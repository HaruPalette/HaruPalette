package com.ssafy.palette.domain.entity;

import javax.persistence.*;

@Entity
public class Calendar {

    // 기본키
    @Id
    @Column(name = "calendar_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 사용자
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    // 날짜 (연/월)
    @Column
    private String date;

    // 색상 코드 (R:Red, B:Blue, Y:Yellow, G:Green)
    @Column
    private String colorCode;
}
