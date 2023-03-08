package com.ssafy.palette.domain.entity;

import javax.persistence.*;

@Entity
public class File {

    // 기본키
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fileId;

    // 일기
    @ManyToOne
    @JoinColumn(name = "diary_id")
    private Diary diary;

    // 경로
    private String path;
}
