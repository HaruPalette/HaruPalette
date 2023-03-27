package com.ssafy.palette.domain.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChallengeListDto {

    @NotNull
    private Integer weekCnt;
    @NotNull
    private Integer monthCnt;
    @NotNull
    private Integer currentPoint;
    @NotNull
    List<@Valid ChallengeDto> challengeList;

    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ChallengeDto {
        @NotNull
        private Long challengeId;
        @NotNull
        private String contents;
        @NotNull
        private Integer point;
    }
}

