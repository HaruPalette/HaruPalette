package com.ssafy.palette.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.palette.domain.dto.ChallengeListDto;
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
	@Scheduled(cron = "0 0 5 1 * ?")
	public void resetMonth() {
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
}
