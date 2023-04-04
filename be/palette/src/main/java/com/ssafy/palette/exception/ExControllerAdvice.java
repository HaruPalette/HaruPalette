package com.ssafy.palette.exception;

import javax.persistence.EntityNotFoundException;

import org.apache.http.HttpException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
public class ExControllerAdvice {
	@ExceptionHandler(NoScriptException.class)
	public ResponseEntity<ErrorResult> noScriptExHandle(HttpException e) {
		log.error("[exceptionHandle] ex", e);
		ErrorResult errorResult = new ErrorResult("504", e.getMessage());
		return new ResponseEntity<>(errorResult, HttpStatus.CONFLICT);
	}

	@ExceptionHandler(NoPointException.class)
	public ResponseEntity<ErrorResult> noPointExHandle(HttpException e) {
		log.error("[exceptionHandle] ex", e);
		ErrorResult errorResult = new ErrorResult("413", e.getMessage());
		return new ResponseEntity<>(errorResult, HttpStatus.CONFLICT);
	}

}
