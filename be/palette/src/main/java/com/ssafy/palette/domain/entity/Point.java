package com.ssafy.palette.domain.entity;

import javax.persistence.*;

@Entity
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
    private String date;
}
