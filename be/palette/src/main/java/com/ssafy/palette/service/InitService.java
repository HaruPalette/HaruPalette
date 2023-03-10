package com.ssafy.palette.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.palette.domain.entity.Friend;
import com.ssafy.palette.repository.FriendRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class InitService {

	private final FriendRepository friendRepository;
	public void addInitFriend()
	{
		Friend haru = Friend.builder()
			.friendId(1L)
			.name("하루")
			.tag("#다정한 #진솔한 #ISFP")
			.contents("안녕🐾 난 하루야😻 난 하루하루 기록하는 걸 좋아해\n"+"너도 나와 같이 오늘 하루를 기록하지않을래?")
			.price(0)
			.build();

		Friend gomi = Friend.builder()
			.friendId(2L)
			.name("고미")
			.tag("#섬세한 #느긋한 #INFJ")
			.contents("안녕🐾 난 고미야~🐼 항상 고민이 많은 나는 그걸 일기에 기록하곤해\n"+"어때? 너도 고민을 말해볼래?")
			.price(100)
			.build();

		Friend tori = Friend.builder()
			.friendId(3L)
			.name("토리")
			.tag("#낙천적인 #발랄한 #ESFP")
			.contents("안녕🐾 난 토리야!🐿 난 도토리를 좋아해서 이름도 토리로 개명했어!\n"+"난 외톨이가 아니라구! 나랑 친구할래?")
			.price(500)
			.build();

		Friend mystery = Friend.builder()
			.friendId(4L)
			.name("?")
			.tag("?")
			.contents("?")
			.price(1000)
			.build();


		friendRepository.save(haru);
		friendRepository.save(gomi);
		friendRepository.save(tori);
		friendRepository.save(mystery);
	}
}
