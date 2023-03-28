package com.ssafy.palette.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.palette.domain.dto.PointListDto;
import com.ssafy.palette.domain.entity.Point;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.repository.ChallengeRepository;
import com.ssafy.palette.repository.PointRepository;
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
	private final ChallengeRepository challengeRepository;

	public void earnPoint(String userId, int val) {
		User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
		user.setPoint(user.getPoint() + val);
	}

	public void usePoint(String userId, int val) {
		User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
		user.setPoint(user.getPoint() - val);
	}

	public void addChallengeHistory(String useId, Long challengeId, LocalDateTime date) {
		Point point = Point.builder()
			.user(userRepository.findById(useId).get())
			.point(challengeRepository.getReferenceById(challengeId).getPoint())
			.category(challengeRepository.getReferenceById(challengeId).getContents())
			.date(date)
			.build();
		pointRepository.save(point);
	}

	public PointListDto getPoint(String userId) {
		User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
		List<PointListDto.PointDto> pointList = pointRepository.findByUser_Id(userId)
			.stream()
			.map(point -> PointListDto.PointDto.builder()
				.point(point.getPoint())
				.date(point.getDate())
				.contents(point.getCategory())
				.build())
			.collect(Collectors.toList());

		PointListDto pointListDto = PointListDto.builder()
			.currentPoint(user.getPoint())
			.pointList(pointList)
			.build();

		return pointListDto;
	}
}
