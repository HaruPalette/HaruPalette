package com.ssafy.palette.domain.entity;

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
@AllArgsConstructor
@NoArgsConstructor
public class File {

	// 기본키
	@Id
	@Column(name = "file_id")
	@GeneratedValue
	private Long id;

	// 일기
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "diary_id")
	@NotNull
	private Diary diary;

	// 경로
	@Column(columnDefinition = "VARCHAR(255)")
	@NotNull
	private String path;
}
