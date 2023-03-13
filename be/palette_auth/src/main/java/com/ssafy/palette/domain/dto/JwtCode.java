package com.ssafy.palette.domain.dto;

import lombok.Getter;

@Getter
public enum JwtCode {

	DENIED,
	ACCESS,
	EXPIRED;
}