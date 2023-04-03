package com.ssafy.palette.domain.dto;

import java.time.LocalDateTime;

import com.ssafy.palette.domain.entity.Auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuthDto {

	// 기본키
	private String authId;

	// 코드
	private String code;

	// 등록 일시
	private LocalDateTime registration_date;

	public Auth toAuth(AuthDto authDto) {
		return Auth.builder().code(authDto.getCode()).build();
	}
}
