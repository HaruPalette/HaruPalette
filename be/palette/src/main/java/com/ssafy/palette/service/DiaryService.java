package com.ssafy.palette.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.palette.domain.dto.DiaryDto;
import com.ssafy.palette.domain.entity.Diary;
import com.ssafy.palette.domain.entity.Friend;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.repository.DiaryRepository;
import com.ssafy.palette.repository.FriendRepository;
import com.ssafy.palette.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class DiaryService {

	private final UserRepository userRepository;
	private final DiaryRepository diaryRepository;
	private final FriendRepository friendRepository;
	public void writeDiary(DiaryDto diaryDto, String userId)
	{
		User user = userRepository.findById(userId).get();
		Friend friend = friendRepository.findById(diaryDto.getFriendId()).get();
		LocalDate date = LocalDate.parse(diaryDto.getDate(), DateTimeFormatter.ISO_DATE);
		Diary diary = Diary.builder()
			.stickerCode(diaryDto.getStickerCode())
			.weather(diaryDto.getWeather())
			.contents(diaryDto.getContents())
			.registrationDate(date)
			.user(user)
			.friend(friend)
			.build();

		diaryRepository.save(diary);
	}
}
