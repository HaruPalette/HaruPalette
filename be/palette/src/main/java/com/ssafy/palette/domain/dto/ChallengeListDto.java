package com.ssafy.palette.domain.dto;

import java.util.List;

import javax.validation.Valid;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChallengeListDto {

    private Integer weekCnt;
    private Integer monthCnt;
    private Integer currentPoint;
    List<@Valid ChallengeDto> challengeList;

    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ChallengeDto {
        private Long challengeId;
        private String contents;
        private Integer point;
    }
}

