package com.ssafy.palette.service;

import org.springframework.data.redis.core.RedisOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.palette.domain.entity.Answer;
import com.ssafy.palette.domain.entity.Challenge;
import com.ssafy.palette.domain.entity.Friend;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.repository.AnswerRepository;
import com.ssafy.palette.repository.ChallengeRepository;
import com.ssafy.palette.repository.FriendRepository;
import com.ssafy.palette.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class InitService {

	private final UserRepository userRepository;
	private final AnswerRepository answerRepository;
	private final FriendRepository friendRepository;
	private final ChallengeRepository challengeRepository;
	private final RedisTemplate<String, String> redisTemplate;
	public void addInitFriend()
	{
		Friend haru = Friend.builder()
			.id(1L)
			.kname("하루")
			.ename("haru")
			.tag("#다정한 #진솔한 #ISFP")
			.contents("안녕🐾 난 하루야😻\n"+"난 하루하루 기록하는 걸 좋아해\n"+"너도 나와 같이 오늘 하루를\n"+"기록하지않을래?")
			.price(0)
			.build();

		Friend gomi = Friend.builder()
			.id(2L)
			.kname("고미")
			.ename("gomi")
			.tag("#섬세한 #느긋한 #INFJ")
			.contents("안녕🐾 난 고미야~🐼"+"항상 고민이 많은 나는\n"+"그걸 일기에 기록하곤해\n"+"어때? 너도 고민을 말해볼래?")
			.price(100)
			.build();

		Friend tori = Friend.builder()
			.id(3L)
			.kname("토리")
			.ename("tori")
			.tag("#낙천적인 #발랄한 #ESFP")
			.contents("안녕🐾 난 토리야!🐿\n"+"난 도토리를 좋아해서\n"+"이름도 토리로 개명했어!\n"+"난 외톨이가 아니라구! 나랑 친구할래?")
			.price(500)
			.build();




		friendRepository.save(haru);
		friendRepository.save(gomi);
		friendRepository.save(tori);

	}

	public void addInitChallenge()
	{
		Challenge one = Challenge.builder()
			.id(1L)
			.contents("주 3회 작성")
			.point(10)
			.build();

		Challenge two = Challenge.builder()
			.id(2L)
			.contents("주 5회 작성")
			.point(20)
			.build();

		Challenge three = Challenge.builder()
			.id(3L)
			.contents("주 7회 작성")
			.point(30)
			.build();

		Challenge four = Challenge.builder()
			.id(4L)
			.contents("연속 한달 작성")
			.point(30)
			.build();

		Challenge five = Challenge.builder()
			.id(5L)
			.contents("하루 작성")
			.point(5)
			.build();

		challengeRepository.save(one);
		challengeRepository.save(two);
		challengeRepository.save(three);
		challengeRepository.save(four);
		challengeRepository.save(five);
	}

	public void tempUser()
	{
		User jiyeon = User.builder()
			.id("test")
			.build();

		userRepository.save(jiyeon);
	}

	public void tempText()
	{
		redisTemplate.opsForList().rightPush("hi", "하루야");
		RedisOperations<String, String> operations = redisTemplate.opsForList().getOperations();
		System.out.println(operations.opsForList().range("hi", 0, -1));

		Long size = operations.opsForList().size("hi");

		/*
		for (int i = 0; i < size; i++) {
			System.out.println(operations.opsForList().leftPop("hi"));
		}*/

		operations.opsForList().rightPush("hi", "안녕");
		//System.out.println(operations.opsForList().range("hi", 0, -1));
	}

	public void tempAnswer()
	{
		Answer answer = Answer.builder()
			.contents("수고했어 오늘도")
			.build();

		answerRepository.save(answer);
	}
}
