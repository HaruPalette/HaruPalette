package com.ssafy.palette.domain.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Entity
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
	private User user;

	// 포인트
	@Column
	private int point;

	// 구분
	@Column
	private String category;

	// 일시
	@Column
	private LocalDateTime date;
}
