package com.ssafy.palette.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Entity
@Getter
@Builder
@AllArgsConstructor
public class Challenge {

    // 기본키
    @Id
    @Column(name = "challenge_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 횟수
    @Column
    private int count;

    // 내용
    @Column
    @NotNull
    private String contents;

    // 포인트
    @Column
    @NotNull
    private int point;

    public Challenge() {
    }

    // setter //
    public void setCount(int count) {
        this.count = count;
    }
}
