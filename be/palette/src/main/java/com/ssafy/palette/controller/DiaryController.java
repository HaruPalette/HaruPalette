package com.ssafy.palette.controller;

import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.googlecode.protobuf.format.JsonFormat;
import com.ssafy.palette.PaletteAIGrpc;
import com.ssafy.palette.PaletteProto.*;
import io.grpc.ManagedChannel;

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

	private final ManagedChannel channelToPythonServer;
	private final PaletteAIGrpc.PaletteAIBlockingStub paletteAIStub;
	private final DiaryService diaryService;

//	DiaryController(ManagedChannel managedChannel) {
//		channelToPythonServer = managedChannel;
//		paletteAIStub = PaletteAIGrpc.newBlockingStub(channelToPythonServer);
//	}

	// STT
	@PostMapping("/stt")
	public ResponseEntity<?> speechToText(@RequestBody String speech) {
//		AudioRequest request = AudioRequest.newBuilder().setAudio(speech).build();
//		TextResponse response = paletteAIStub.speechToText(request);
		return new ResponseEntity<>('1', HttpStatus.OK);
	}

	// 감정 분석
	@PostMapping(value="/emotion", produces = "application/json; charset=utf8")
	public String textToEmotion(@RequestBody String text) {
		TextRequest request = TextRequest.newBuilder().setText(text).build();
		EmotionResponse response = paletteAIStub.textToEmotion(request);
		return new JsonFormat().printToString(response);
	}

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
