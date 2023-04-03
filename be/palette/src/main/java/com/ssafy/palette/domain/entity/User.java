package com.ssafy.palette.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@AllArgsConstructor
@Table(name = "USER")
public class User {

	// 기본키
	@Id
	@Column(name = "user_id", columnDefinition = "VARCHAR(36)")
	private String id;

	// 프로필 이미지
	@Column
	@NotNull
	private String image;

	// 현재 포인트
	@Column
	@NotNull
	private int point;

	// 현재 설정된 캐릭터
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "friend_id")
	@NotNull
	private Friend friend;

	// 주간 챌린지 달성 횟수
	@Column
	@NotNull
	private int weekCnt;

	// 월간 챌린지 달성 횟수
	@Column
	@NotNull
	private int monthCnt;

	public User() {
	}

	// setter //
	public void setPoint(int point) {
		this.point = point;
	}

	public void setWeekCnt(int weekCnt) {
		this.weekCnt = weekCnt;
	}

	public void setMonthCnt(int monthCnt) {
		this.monthCnt = monthCnt;
	}

	public void setFriend(Friend friend) {
		this.friend = friend;
	}
}
