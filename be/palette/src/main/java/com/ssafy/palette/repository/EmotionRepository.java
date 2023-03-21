package com.ssafy.palette.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Emotion;

public interface EmotionRepository extends JpaRepository<Emotion, Long> {
}
