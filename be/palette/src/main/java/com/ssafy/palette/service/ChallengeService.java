package com.ssafy.palette.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.palette.domain.dto.ChallengeListDto;
import com.ssafy.palette.domain.entity.Challenge;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.repository.ChallengeRepository;
import com.ssafy.palette.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class ChallengeService {

	private final PointService pointService;
	private final ChallengeRepository challengeRepository;
	private final UserRepository userRepository;

	public ChallengeListDto getChallenge(String userId) {
		User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
		List<ChallengeListDto.ChallengeDto> challengeList = challengeRepository.findAll()
			.stream()
			.map(challenge -> ChallengeListDto.ChallengeDto.builder()
				.challengeId(challenge.getId())
				.contents(challenge.getContents())
				.point(challenge.getPoint())
				.build())
			.collect(Collectors.toList());

		ChallengeListDto challengeListDto = ChallengeListDto.builder()
			.weekCnt(user.getWeekCnt())
			.monthCnt(user.getMonthCnt())
			.currentPoint(user.getPoint())
			.challengeList(challengeList)
			.build();

		return challengeListDto;
	}

	// 매월 1일 오전 5시 정각에 실행
	// 챌린지 count 초기화
	@Scheduled(cron = "0 0 5 1 * ?")
	public void resetMonth() {
		challengeRepository.findById(4L).get().setCount(LocalDate.now().lengthOfMonth());
		List<User> users = userRepository.findAll();
		for (User u : users) {
			u.setMonthCnt(0);
		}
	}

	// 월요일마다 오전 5시 정각에 실행
	@Scheduled(cron = "0 0 5 ? * 0")
	public void resetWeek() {
		List<User> users = userRepository.findAll();
		for (User u : users) {
			u.setWeekCnt(0);
		}
	}

	public void checkWeekChallenge(String userId, LocalDateTime time) {
		int weekCnt = userRepository.findById(userId).get().getWeekCnt();
		// challenge마다 조건 충족 확인
		List<Challenge> challenges = challengeRepository.findByIdBetween(1L, 3L);
		for (Challenge c : challenges) {
			if (weekCnt == c.getCount()) {
				pointService.earnPoint(userId, c.getPoint());
				pointService.addChallengeHistory(userId, c.getId(), time, "goal");
			}
		}
	}

	public void checkMonthChallenge(String userId, LocalDateTime time) {
		int monthCnt = userRepository.findById(userId).get().getMonthCnt();
		// challenge마다 조건 충족 확인
		Challenge challenge = challengeRepository.findById(4L).get();
		if (monthCnt == challenge.getCount()) {
			pointService.earnPoint(userId, challenge.getPoint());
			pointService.addChallengeHistory(userId, challenge.getId(), time, "goal");
		}
	}

	public void dailyChallenge(String userId, LocalDateTime time) {
		Challenge challenge = challengeRepository.findById(5L).get();
		pointService.earnPoint(userId, challenge.getPoint());
		pointService.addChallengeHistory(userId, challenge.getId(), time, "goal");
	}

	public void eventChallenge(String userId, LocalDateTime time) {
		Challenge challenge = challengeRepository.findById(6L).get();
		pointService.earnPoint(userId, challenge.getPoint());
		pointService.addChallengeHistory(userId, challenge.getId(), time, "sign");
	}

	public void checkChallenge(String userId, LocalDateTime time) {
		checkWeekChallenge(userId, time);
		checkMonthChallenge(userId, time);
		dailyChallenge(userId, time);
	}
}
