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

		// 더미 데이터
		initService.tempUser();
	}

}
