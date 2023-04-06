package com.ssafy.palette.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.palette.domain.dto.PointListDto;
import com.ssafy.palette.domain.entity.Point;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.repository.ChallengeRepository;
import com.ssafy.palette.repository.FriendRepository;
import com.ssafy.palette.repository.PointRepository;
import com.ssafy.palette.repository.UserFriendRepository;
import com.ssafy.palette.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class PointService {
	private final UserRepository userRepository;
	private final PointRepository pointRepository;
	private final FriendRepository friendRepository;
	private final ChallengeRepository challengeRepository;
	private final UserFriendRepository userFriendRepository;

	public void earnPoint(String userId, int val) {
		User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
		user.setPoint(user.getPoint() + val);
	}

	public void usePoint(String userId, int val) {
		User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
		user.setPoint(user.getPoint() - val);
	}

	public void addChallengeHistory(String useId, Long challengeId, LocalDateTime date, String type) {
		Point point = Point.builder()
			.user(userRepository.findById(useId).get())
			.point(challengeRepository.getReferenceById(challengeId).getPoint())
			.prevPoint(userRepository.findById(useId).get().getPoint())
			.category(challengeRepository.getReferenceById(challengeId).getContents())
			.date(date)
			.type(type)
			.build();
		pointRepository.save(point);
	}

	public void addFriendHistory(String useId, Long friendId, LocalDateTime date) {
		Point point = Point.builder()
			.user(userRepository.findById(useId).get())
			.point(-1 * (friendRepository.findById(friendId).get().getPrice()))
			.prevPoint(userRepository.findById(useId).get().getPoint())
			.category(friendRepository.findById(friendId).get().getKname() + " 친구비")
			.date(date)
			.type(friendRepository.findById(friendId).get().getEname())
			.build();
		pointRepository.save(point);
	}

	public PointListDto getPoint(String userId, String category, String date) {
		User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
		List<PointListDto.PointDto> pointList;
		PointListDto pointListDto = new PointListDto();
		LocalDate temp = LocalDate.parse(date + "-01");
		LocalDateTime start = temp.atTime(0, 0, 1);
		LocalDateTime end = temp.plusMonths(1).minusDays(1).atTime(23, 59, 59);
		switch (category) {
			case "all":
				pointList = pointRepository.findByUser_IdAndDateBetween(userId, start, end, Sort.by("date").descending())
					.stream()
					.map(point -> PointListDto.PointDto.builder()
						.point(point.getPoint())
						.prevPoint(point.getPrevPoint())
						.date(point.getDate().toLocalDate())
						.contents(point.getCategory())
						.type(point.getType())
						.build())
					.collect(Collectors.toList());

				pointListDto = PointListDto.builder()
					.currentPoint(user.getPoint())
					.pointList(pointList)
					.build();
				break;

			case "earn":
				pointList = pointRepository.findByUser_IdAndDateBetweenAndPointGreaterThan(userId, start, end, 0, Sort.by("date").descending())
					.stream()
					.map(point -> PointListDto.PointDto.builder()
						.point(point.getPoint())
						.prevPoint(point.getPrevPoint())
						.date(point.getDate().toLocalDate())
						.contents(point.getCategory())
						.type(point.getType())
						.build())
					.collect(Collectors.toList());

				pointListDto = PointListDto.builder()
					.currentPoint(user.getPoint())
					.pointList(pointList)
					.build();
				break;

			case "use":
				pointList = pointRepository.findByUser_IdAndDateBetweenAndPointLessThan(userId, start, end, 0, Sort.by("date").descending())
					.stream()
					.map(point -> PointListDto.PointDto.builder()
						.point(point.getPoint())
						.prevPoint(point.getPrevPoint())
						.date(point.getDate().toLocalDate())
						.contents(point.getCategory())
						.type(point.getType())
						.build())
					.collect(Collectors.toList());

				pointListDto = PointListDto.builder()
					.currentPoint(user.getPoint())
					.pointList(pointList)
					.build();
				break;

		}

		return pointListDto;
	}
}
