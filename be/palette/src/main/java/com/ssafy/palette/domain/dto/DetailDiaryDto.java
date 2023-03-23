package com.ssafy.palette.domain.dto;

import java.time.LocalDate;

import com.ssafy.palette.domain.entity.Diary;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DetailDiaryDto {

	private Long diaryId;
	private LocalDate date;
	private String contents;
	private String weather;
	private long friendId;
	private String answer;
	private String image;
	private String stickerCode;

	public static DetailDiaryDto toEntity(Diary diary)
	{
		return DetailDiaryDto.builder()
			.diaryId(diary.getId())
			.date(diary.getRegistrationDate())
			.contents(diary.getContents())
			.weather(diary.getWeather())
			.friendId(diary.getFriend().getId())
			.answer(diary.getAnswer().getContents())
			.stickerCode(diary.getStickerCode())
			.build();
	}

	public void setImage(String image)
	{
		this.image = image;
	}
}
