package com.ssafy.palette.domain.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Entity
@Getter
@Builder
@AllArgsConstructor
public class Diary {

	// 기본키
	@Id
	@Column(name = "diary_id")
	@GeneratedValue
	private Long id;

	// 사용자
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@NotNull
	private User user;

	// 내용
	@Column(columnDefinition = "TEXT")
	@NotNull
	private String contents;

	// 날씨 (SUN:해, CLOUD:구름, SNOW:눈, RAIN:비)
	@Column(columnDefinition = "VARCHAR(10)")
	@NotNull
	private String weather;

	// 상태 (기본값 V:보기, D:삭제)
	@Column(columnDefinition = "VARCHAR(10)")
	@NotNull
	private String status;

	// 등록 일시
	@Column
	@NotNull
	private LocalDate registrationDate;

	// 스티커 코드
	@Column(columnDefinition = "VARCHAR(100)")
	@NotNull
	private String stickerCode;

	// 답변
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "answer_id")
	private Answer answer;

	// 캐릭터
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "friend_id")
	@NotNull
	private Friend friend;

	public Diary() {
	}

	// setter //
	public void setAnswer(Answer answer) {
		this.answer = answer;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
