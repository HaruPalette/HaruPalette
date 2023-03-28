package com.ssafy.palette.controller;

import javax.transaction.Transactional;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ssafy.palette.config.security.JwtUtil;
import com.ssafy.palette.domain.dto.ChallengeListDto;
import com.ssafy.palette.domain.dto.LoginDto;
import com.ssafy.palette.domain.dto.ProfileDto;
import com.ssafy.palette.service.ChallengeService;
import com.ssafy.palette.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/api/v1/users")
@Transactional
public class UserController {

	private final UserService userService;
	private final ChallengeService challengeService;
	private final JwtUtil jwtUtil;

	// 정보 조회
	@GetMapping()
	public ResponseEntity<?> profile(@RequestHeader HttpHeaders header) {

		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);

		ProfileDto profileDto = userService.sendProfile(userId);
		return new ResponseEntity<ProfileDto>(profileDto, HttpStatus.OK);
	}

	// 리마인드
	@GetMapping("/remind")
	public ResponseEntity<?> remind(@RequestHeader HttpHeaders header) {

		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);

		Long diaryId = userService.BeforeOneYear(userId);
		return new ResponseEntity<Long>(diaryId, HttpStatus.OK);
	}

	// 첫 로그인 -> 회원가입
	@PostMapping()
	// 인증서버로부터 받는 값
	public ResponseEntity<?> firstLogin(@RequestBody LoginDto loginDto) {

		userService.signup(loginDto);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	// 도전 과제 조회
	@GetMapping("/challenge")
	public ResponseEntity<?> challengeUser(@RequestHeader HttpHeaders header) {

		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);

		ChallengeListDto challengeListDto = challengeService.getChallenge(userId);

		return new ResponseEntity<>(challengeListDto, HttpStatus.OK);
	}

	// 포인트 내역 조회

}
