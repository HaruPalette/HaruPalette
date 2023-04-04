package com.ssafy.palette.exception;

import org.apache.http.HttpException;

public class NoPointException extends HttpException {
	public NoPointException(String message) {
		super(message);
	}
}