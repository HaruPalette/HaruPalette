package com.ssafy.palette.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
@Builder
@Table(name = "emotion")
@AllArgsConstructor
public class Emotion {

    // 기본키
    @Id
    @Column(name = "emotion_id")
    @GeneratedValue //(strategy = GenerationType.IDENTITY)
    private Long id;

    // 일기
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "diary_id")
    private Diary diary;

    // 유저
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    // 중립
    @Column
    private int neutral;

    // 행복
    @Column
    private int happy;

    // 당황
    @Column
    private int surprise;

    // 분노
    @Column
    private int anger;

    // 불안
    @Column
    private int anxiety;

    // 슬픔
    @Column
    private int sadness;

    // 혐오
    @Column
    private int disgust;

    public Emotion() {

    }
}
