package com.ssafy.palette.domain.dto;

import com.ssafy.palette.domain.entity.Diary;
import com.ssafy.palette.domain.entity.Emotion;

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
	private String date;
	private String contents;
	private String weather;
	private long friendId;
	private String answer;
	private String image;
	private String stickerCode;

	private int neutral;
	private int happy;
	private int surprise;
	private int anger;
	private int anxiety;
	private int sadness;
	private int disgust;

	public static DetailDiaryDto toEntity(Diary diary, Emotion emotion)
	{
		return DetailDiaryDto.builder()
			.diaryId(diary.getId())
			.date(String.valueOf(diary.getRegistrationDate()))
			.contents(diary.getContents())
			.weather(diary.getWeather())
			.friendId(diary.getFriend().getId())
			.answer(diary.getAnswer().getContents())
			.stickerCode(diary.getStickerCode())
			.neutral(emotion.getNeutral())
			.happy(emotion.getHappy())
			.surprise(emotion.getSurprise())
			.anger(emotion.getAnger())
			.anxiety(emotion.getAnxiety())
			.sadness(emotion.getSadness())
			.disgust(emotion.getDisgust())
			.build();
	}

	public void setImage(String image)
	{
		this.image = image;
	}
}
