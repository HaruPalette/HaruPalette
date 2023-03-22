package com.ssafy.palette.controller;

import javax.transaction.Transactional;

import org.springframework.http.HttpHeaders;
import com.ssafy.palette.PaletteAIGrpc;
import io.grpc.ManagedChannel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ssafy.palette.config.security.JwtUtil;
import com.ssafy.palette.domain.dto.DetailDiaryDto;
import com.ssafy.palette.domain.dto.DiaryDto;
import com.ssafy.palette.service.DiaryService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/api/v1/diaries")
@Transactional
public class DiaryController {

	private final DiaryService diaryService;
	private final JwtUtil jwtUtil;
	private PaletteAIGrpc.PaletteAIBlockingStub paletteAIStub;

	@Autowired
	public void setPaletteAIStub(ManagedChannel managedChannel) {
		this.paletteAIStub = PaletteAIGrpc.newBlockingStub(managedChannel);
	}

	@PostMapping(value="/stt", produces = "application/json; charset=utf8")
	public String speechToText() {
		return "speech";
	}

	// 일기 작성
	@PostMapping()
	public ResponseEntity<?> writeDiary(@RequestHeader HttpHeaders header, @RequestBody DiaryDto diaryDto) {

		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);
		diaryService.writeDiary(diaryDto, userId, paletteAIStub);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	// 상세 조회
	@GetMapping()
	public ResponseEntity<?> detailDiary(@RequestHeader HttpHeaders header, @RequestParam("diaryId") Long diaryId) {

		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);

		DetailDiaryDto detailDiaryDto = diaryService.detailDiary(diaryId, userId);
		return new ResponseEntity<DetailDiaryDto>(detailDiaryDto, HttpStatus.OK);
	}
}
