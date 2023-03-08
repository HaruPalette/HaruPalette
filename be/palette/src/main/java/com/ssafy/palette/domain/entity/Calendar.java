package com.ssafy.palette.domain.entity;

import javax.persistence.*;

@Entity
public class Calendar {

    // 기본키
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long calendarId;

    // 사용자
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // 날짜 (연/월)
    private String date;

    // 색상 코드 (R:Red, B:Blue, Y:Yellow, G:Green)
    private String colorCode;
}
