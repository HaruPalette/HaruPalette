package com.ssafy.palette.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Entity
@Getter
@Builder
@Table(name = "emotion")
@AllArgsConstructor
public class Emotion {

	// 기본키
	@Id
	@Column(name = "emotion_id")
	@GeneratedValue
	private Long id;

	// 일기
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "diary_id")
	@NotNull
	private Diary diary;

	// 유저
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@NotNull
	private User user;

	// 중립
	@Column
	@NotNull
	private int neutral;

	// 행복
	@Column
	@NotNull
	private int happy;

	// 당황
	@Column
	@NotNull
	private int surprise;

	// 분노
	@Column
	@NotNull
	private int anger;

	// 불안
	@Column
	@NotNull
	private int anxiety;

	// 슬픔
	@Column
	@NotNull
	private int sadness;

	// 혐오
	@Column
	@NotNull
	private int disgust;

	public Emotion() {

	}
}
