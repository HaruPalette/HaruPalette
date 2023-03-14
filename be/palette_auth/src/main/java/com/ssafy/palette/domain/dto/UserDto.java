package com.ssafy.palette.domain.dto;

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
public class UserDto {

	// 기본키
	String userId;

	// 프로필 이미지
	String image;

	// 캐릭터 FK
	int characterId;

	public UserDto(String userId, String image) {
		this.userId = userId;
		this.image = image;
	}

}
