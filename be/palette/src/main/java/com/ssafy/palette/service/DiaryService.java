package com.ssafy.palette.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.palette.domain.dto.DetailDiaryDto;
import com.ssafy.palette.domain.dto.DiaryDto;
import com.ssafy.palette.domain.entity.Answer;
import com.ssafy.palette.domain.entity.Diary;
import com.ssafy.palette.domain.entity.Friend;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.repository.AnswerRepository;
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
	private final AnswerRepository answerRepository;
	private final FriendRepository friendRepository;
	public void writeDiary(DiaryDto diaryDto, String userId)
	{
		Answer answer = answerRepository.findById(1L).get();
		User user = userRepository.findById(userId).get();
		Friend friend = friendRepository.findById(diaryDto.getFriendId()).get();
		LocalDate date = LocalDate.parse(diaryDto.getDate(), DateTimeFormatter.ofPattern("dd-MM-yyyy"));
		Diary diary = Diary.builder()
			.stickerCode(diaryDto.getStickerCode())
			.weather(diaryDto.getWeather())
			.contents(diaryDto.getContents())
			.registrationDate(date)
			.user(user)
			.friend(friend)
			.status("V")
			.answer(answer)
			.build();

		diaryRepository.save(diary);
	}

	public DetailDiaryDto detailDiary(Long diaryId, String userId) {

		// userId validation

		// set detail diary
		Diary diary = diaryRepository.findById(diaryId).get();
		DetailDiaryDto detailDiaryDto = DetailDiaryDto.toEntity(diary);
		// 파일 테이블에서 이미지 셋팅
		detailDiaryDto.setImage("abcd");

		return detailDiaryDto;
	}
}
