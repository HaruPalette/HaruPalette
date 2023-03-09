package com.ssafy.palette.domain.entity;

import javax.persistence.*;

@Entity
public class UserCharacter {

    // 기본키
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userCharacterId;

    // 사용자
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // 캐릭터
    @ManyToOne
    @JoinColumn(name = "friend_id")
    private Friend friend;

    // 구매 일시
    private String purchaseDate;
}
