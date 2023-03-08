package com.ssafy.palette.domain.entity;

import javax.persistence.*;

@Entity
public class Point {

    // 기본키
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pointId;

    // 사용자
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // 포인트
    private int point;

    // 구분
    private String category;

    // 일시
    private String date;
}
