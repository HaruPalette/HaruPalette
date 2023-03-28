package com.ssafy.palette.controller;

import javax.transaction.Transactional;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ssafy.palette.config.security.JwtUtil;
import com.ssafy.palette.domain.dto.FriendListDto;
import com.ssafy.palette.service.FriendService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/api/v1/friends")
@Transactional
public class FriendController {

	private final FriendService friendService;
	private final JwtUtil jwtUtil;

	// 캐릭터 조회
	@GetMapping()
	public ResponseEntity<?> getFriend(@RequestHeader HttpHeaders header) {
		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);

		FriendListDto friendListDto = friendService.getFriendList(userId);
		return new ResponseEntity<>(friendListDto, HttpStatus.OK);
	}

	// 캐릭터 선택
	@PatchMapping("/{friendId}")
	public ResponseEntity<?> chooseFriend(@RequestHeader HttpHeaders header, @PathVariable Long friendId) throws
		Exception {
		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);

		friendService.chooseFriend(userId, friendId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	// 캐릭터 구매
	@PostMapping()
	public ResponseEntity<?> makeFriend(@RequestHeader HttpHeaders header) {
		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
