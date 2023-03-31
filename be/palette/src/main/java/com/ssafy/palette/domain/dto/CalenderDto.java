package com.ssafy.palette.domain.dto;

import com.ssafy.palette.domain.entity.Diary;
import com.ssafy.palette.domain.entity.Emotion;
import lombok.*;

import java.time.LocalDate;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CalenderDto {

    private Long diaryId;
    private Integer emotion;
    private LocalDate date;

    public static CalenderDto toEntity(Diary diary, Emotion emotion) {
        return CalenderDto.builder()
                .diaryId(diary.getId())
                .date(diary.getRegistrationDate())
                .emotion(emotion.getHappy())
                .build();
    }

}
