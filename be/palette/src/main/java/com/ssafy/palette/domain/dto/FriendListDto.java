package com.ssafy.palette.domain.dto;

import lombok.Getter;
import lombok.Builder;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FriendListDto {
    @NotNull
    private Integer currentPoint;
    List<@Valid FriendDto> friendList;

    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class FriendDto {
        @NotNull
        private Long friendId;
        @NotNull
        private String kname;
        @NotNull
        private String ename;
        @NotNull
        private String contents;
        @NotNull
        private String tag;
        @NotNull
        private Integer price;
        @NotNull
        private Boolean isBuy;
    }
}
