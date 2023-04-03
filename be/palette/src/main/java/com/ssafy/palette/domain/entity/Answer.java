package com.ssafy.palette.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Answer {

	// 기본키
	@Id
	@Column(name = "answer_id")
	@GeneratedValue
	private Long id;

	// 감정 타입 (neutral, happy, surprise, anger, anxiety, sadness, disqust)
	@Column
	@NotNull
	private String type;

	// 내용
	@Column(columnDefinition = "TEXT")
	@NotNull
	private String contents;
}
