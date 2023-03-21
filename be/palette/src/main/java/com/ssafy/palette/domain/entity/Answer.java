package com.ssafy.palette.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Answer {

    // 기본키
    @Id
    @Column(name = "answer_id")
    @GeneratedValue//(strategy = GenerationType.IDENTITY)
    private Long id;

    // 내용
    @Column(columnDefinition = "TEXT")
    private String contents;
}
