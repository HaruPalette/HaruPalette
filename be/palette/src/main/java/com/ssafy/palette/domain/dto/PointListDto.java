package com.ssafy.palette.domain.dto;

import java.time.LocalDateTime;
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
public class PointListDto {

	private int currentPoint;
	List<@Valid PointDto> pointList;

	@Getter
	@Builder
	@AllArgsConstructor
	@NoArgsConstructor
	public static class PointDto {
		private int point;
		private LocalDateTime date;
		private String contents;
	}
}

