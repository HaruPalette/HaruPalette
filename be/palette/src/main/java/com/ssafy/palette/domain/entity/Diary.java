package com.ssafy.palette.domain.entity;

import javax.persistence.*;

@Entity
public class Diary  {

    // 기본키
    @Id
    @Column(name = "diary_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 사용자
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // 내용
    @Column
    private String contents;

    // 날씨 (SUN:해, CLOUD:구름, SNOW:눈, RAIN:비)
    @Column
    private String weather;

    // 감정값
    @Column
    private int feelingValue;

    // 상태 (V:보기, D:삭제)
    @Column
    private String status;

    // 등록 일시
    @Column
    private String registrationDate;

    // 템플릿 코드
    @Column
    private String templateCode;

    // 답변
    @ManyToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;

    // 캐릭터
    @ManyToOne
    @JoinColumn(name = "friend_id")
    private Friend friend;
}
