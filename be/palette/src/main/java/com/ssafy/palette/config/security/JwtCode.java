package com.ssafy.palette.config.security;

import lombok.Getter;

@Getter
public enum JwtCode {

	DENIED,
	ACCESS,
	EXPIRED;
}