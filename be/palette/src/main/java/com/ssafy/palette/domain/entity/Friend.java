package com.ssafy.palette.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Entity
@Getter
@Builder
@AllArgsConstructor
public class Friend {

    // 기본키
    @Id
    @Column(name = "friend_id")
    @GeneratedValue//(strategy = GenerationType.IDENTITY)
    private Long id;

    // 이름
    @NotNull
    @Column
    private String kname;

    // 영문 이름
    @NotNull
    @Column
    private String ename;

    // 설명
    @NotNull
    @Column
    private String contents;

    // 태그
    @NotNull
    @Column
    private String tag;

    // 가격
    @NotNull
    @Column
    private int price;

    public Friend() {
    }
}
