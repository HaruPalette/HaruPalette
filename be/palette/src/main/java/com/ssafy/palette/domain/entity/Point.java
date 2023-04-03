package com.ssafy.palette.domain.entity;

import java.time.LocalDateTime;

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
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Point {

	// 기본키
	@Id
	@Column(name = "point_id")
	@GeneratedValue//(strategy = GenerationType.IDENTITY)
	private Long id;

	// 사용자
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@NotNull
	private User user;

	// 포인트
	@Column
	@NotNull
	private int point;

	// 구분
	@Column
	@NotNull
	private String category;

	// 일시
	@Column
	@NotNull
	private LocalDateTime date;
}
