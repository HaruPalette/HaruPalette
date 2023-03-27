package com.ssafy.palette.service;

import java.util.List;
import java.util.stream.Collectors;

import com.ssafy.palette.domain.dto.ChallengeListDto;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.repository.ChallengeRepository;
import com.ssafy.palette.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}
