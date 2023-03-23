package com.ssafy.palette.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
