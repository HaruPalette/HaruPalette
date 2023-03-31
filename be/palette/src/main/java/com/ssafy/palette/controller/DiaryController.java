package com.ssafy.palette.controller;

import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.palette.config.security.JwtUtil;
import com.ssafy.palette.domain.dto.CalenderDto;
import com.ssafy.palette.domain.dto.DetailDiaryDto;
import com.ssafy.palette.domain.dto.DiaryDto;
import com.ssafy.palette.service.DiaryService;
import com.ssafy.palette.service.ImageService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/api/v1/diaries")
@Transactional
public class DiaryController {

	private final ImageService imageService;
	private final DiaryService diaryService;
	private final JwtUtil jwtUtil;

	// 상세 조회
	@GetMapping()
	public ResponseEntity<?> detailDiary(@RequestHeader HttpHeaders header,
		@RequestParam("diaryId") Long diaryId) throws
		Exception {
		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);

		DetailDiaryDto detailDiaryDto = diaryService.detailDiary(diaryId, userId);
		return new ResponseEntity<DetailDiaryDto>(detailDiaryDto, HttpStatus.OK);
	}

	// stt
	@PostMapping(value = "/stt", produces = "application/json; charset=utf8")
	public ResponseEntity<?> speechToText(@RequestHeader HttpHeaders header, @RequestBody MultipartFile file) throws
		Exception {
		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);

		diaryService.addRedisList(file, userId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	// 일기 작성
	@PostMapping()
	public ResponseEntity<?> writeDiary(@RequestHeader HttpHeaders header,
		@RequestPart(value = "diaryDto") DiaryDto diaryDto,
		@RequestPart(value = "file", required = false) MultipartFile file) throws
		IOException {
		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);

		diaryService.writeDiary(file, diaryDto, userId);
		diaryService.deleteScript(userId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	// 이미지 조회
	@GetMapping("/image")
	public ResponseEntity<?> imageDiary(@RequestHeader HttpHeaders header) {

		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);

		String str = imageService.getRandomDefaultImage();
		return new ResponseEntity<String>(str, HttpStatus.OK);
	}

	// 수정 조회
	@GetMapping("/script")
	public ResponseEntity<?> scriptDiary(@RequestHeader HttpHeaders header, @RequestParam("order") int order) throws
		Exception {
		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);

		String str = diaryService.sendScript(order, userId);
		return new ResponseEntity<String>(str, HttpStatus.OK);
	}

	// 일기 삭제
	@PatchMapping("/{diaryId}")
	public ResponseEntity<?> deleteDiary(@RequestHeader HttpHeaders header, @PathVariable Long diaryId) {
		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);

		diaryService.deleteDiary(diaryId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping("/calendars")
	public ResponseEntity<?> getCalendar(@RequestHeader HttpHeaders header, @RequestParam String date) {
		String token = header.get("Authorization").get(0).substring(7);   // 헤더의 토큰 파싱 (Bearer 제거)
		String userId = jwtUtil.getUid(token);

		List<CalenderDto> calenderListDto = diaryService.getCalendar(userId, date);
		return new ResponseEntity<List<CalenderDto>>(calenderListDto, HttpStatus.OK);
	}
}
