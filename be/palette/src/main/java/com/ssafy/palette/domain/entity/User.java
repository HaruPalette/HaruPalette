package com.ssafy.palette.domain.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class User {

    // 기본키
    @Id
    private String userId;

    // 닉네임
    private String nickname;

    // 프로필 이미지
    private String image;

    // 현재 포인트
    private int point;

    // 현재 설정된 캐릭터
    @ManyToOne
    @JoinColumn(name = "friend_id")
    private Friend friend;
}
