package com.ssafy.palette.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class DiaryDto {
	String stickerCode;
	String weather;
	String contents;
	String date;
	Long friendId;
}
