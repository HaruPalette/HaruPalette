package com.ssafy.palette.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DiaryDto {
	String stickerCode;
	String weather;
	String contents;
	String image;
	Long friendId;
}
