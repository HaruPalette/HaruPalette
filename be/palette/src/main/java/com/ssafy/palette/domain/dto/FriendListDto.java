package com.ssafy.palette.domain.dto;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
		private String friendKname;
		@NotNull
		private String friendEname;
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
