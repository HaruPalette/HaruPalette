package com.ssafy.palette.controller;

import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

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
	// 일기 작성
	@PostMapping()
	// auth 미적용
	//Authentication authentication,
	public ResponseEntity<?> writeDiary(@RequestBody DiaryDto diaryDto) {

		//UserDetails userDetails = (UserDetails)authentication.getPrincipal();
		//String id = userDetails.getUsername();
		String userId = "test";
		diaryService.writeDiary(diaryDto, userId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
