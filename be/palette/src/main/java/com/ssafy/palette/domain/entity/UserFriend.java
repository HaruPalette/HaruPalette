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
import lombok.Getter;

@Entity
@Getter
@Builder
@AllArgsConstructor
public class UserFriend {

	// 기본키
	@Id
	@Column(name = "user_friend_id")
	@GeneratedValue//(strategy = GenerationType.IDENTITY)
	private Long id;

	// 사용자
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;

	// 캐릭터
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "friend_id")
	private Friend friend;

	// 구매 일시
	@Column
	private LocalDateTime purchaseDate;

	public UserFriend() {

	}
}
