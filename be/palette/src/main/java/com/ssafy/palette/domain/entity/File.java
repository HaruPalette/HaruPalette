package com.ssafy.palette.domain.entity;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class File {

    // 기본키
    @Id
    @Column(name = "file_id")
    @GeneratedValue//(strategy = GenerationType.IDENTITY)
    private Long id;

    // 일기
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "diary_id")
    private Diary diary;

    // 경로
    @Column
    private String path;
}
