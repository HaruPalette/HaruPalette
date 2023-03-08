package com.ssafy.palette.domain.entity;

import javax.persistence.*;

@Entity
public class Diary  {

    // 기본키
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long diaryId;

    // 사용자
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // 내용
    private String contents;

    // 날씨 (SUN:해, CLOUD:구름, SNOW:눈, RAIN:비)
    private String weather;

    // 감정값
    private int feelingValue;

    // 상태 (V:보기, D:삭제)
    private String status;

    // 등록 일시
    private String registrationDate;

    // 템플릿 코드
    private String templateCode;

    // 답변
    @ManyToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;

    // 캐릭터
    @ManyToOne
    @JoinColumn(name = "character_id")
    private Character character;
}
