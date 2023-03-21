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
import com.ssafy.palette.domain.dto.LoginDto;
import com.ssafy.palette.domain.dto.ProfileDto;
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
	private final JwtUtil jwtUtil;

	// 첫 로그인 -> 회원가입
	@PostMapping()
	// 인증서버로부터 받는 값
	public ResponseEntity<?> firstLogin(@RequestBody LoginDto loginDto) {

		userService.signup(loginDto);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	// 정보 조회
	@GetMapping()
	public ResponseEntity<?> profile(@RequestHeader HttpHeaders header) {

		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);

		//System.out.println(userId);
		ProfileDto profileDto = userService.sendProfile(userId);
		return new ResponseEntity<ProfileDto>(profileDto, HttpStatus.OK);
	}
}
