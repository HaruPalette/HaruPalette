package com.ssafy.palette.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Diary;
import com.ssafy.palette.domain.entity.Emotion;

public interface EmotionRepository extends JpaRepository<Emotion, Long> {
	Optional<Emotion> findByDiary(Diary diary);
}
