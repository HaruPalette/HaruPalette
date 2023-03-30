package com.ssafy.palette.domain.dto;

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

	public Auth toAuth(AuthDto authDto) {
		return Auth.builder().code(authDto.getCode()).build();
	}
}
