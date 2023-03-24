package com.ssafy.palette;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Component;

import com.ssafy.palette.service.InitService;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class initDB {

	private final InitService initService;
	@PostConstruct
	public void init() {

		// 캐릭터 초기 데이터
		initService.addInitFriend();

		// 도전과제 초기 데이터
		initService.addInitChallenge();

		// 위로의 말 초기 데이터
		initService.addAnswer();

		// 테스트 데이터
		//initService.tempUser();

		// redis test
		//initService.tempText();

	}

}