package com.ssafy.palette.domain.entity;

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
public class Friend {

    // 기본키
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long friendId;

    // 이름
    @NotNull
    private String name;

    // 설명
    @NotNull
    private String contents;

    // 태그
    @NotNull
    private String tag;

    // 가격
    @NotNull
    private int price;

    public Friend() {
    }
}
