package com.ssafy.palette.controller;

import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ssafy.palette.domain.dto.LoginDto;
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

	// 첫 로그인 -> 회원가입
	@PostMapping()
	// 인증서버로부터 받는 값
	public ResponseEntity<?> firstLogin(@RequestBody LoginDto loginDto) {

		userService.signup(loginDto);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	// 정보 조회
	@GetMapping()
	public ResponseEntity<?> profile(@RequestBody Authentication authentication) {

		UserDetails userDetails = (UserDetails)authentication.getPrincipal();
		userService.profile(userDetails.getUsername());
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
