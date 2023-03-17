package com.ssafy.palette.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Diary;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
}
