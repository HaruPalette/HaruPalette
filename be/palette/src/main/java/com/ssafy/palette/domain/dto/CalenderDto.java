package com.ssafy.palette.domain.dto;

import java.time.LocalDate;

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
public class CalenderDto {

	private Long diaryId;
	private Integer happy;
	private LocalDate date;

	public static CalenderDto toEntity(Diary diary, Emotion emotion) {
		return CalenderDto.builder()
			.diaryId(diary.getId())
			.date(diary.getRegistrationDate())
			.happy(emotion.getHappy())
			.build();
	}

}
