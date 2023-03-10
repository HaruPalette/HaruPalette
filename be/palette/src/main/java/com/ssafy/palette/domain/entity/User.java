package com.ssafy.palette.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "USER")
public class User {

    // 기본키
    @Id
    @Column(name = "user_id")
    private String id;

    // 닉네임
    @Column
    private String nickname;

    // 프로필 이미지
    @Column
    private String image;

    // 현재 포인트
    @Column
    private int point;

    // 현재 설정된 캐릭터
    @ManyToOne
    @JoinColumn(name = "friend_id")
    private Friend friend;
}
