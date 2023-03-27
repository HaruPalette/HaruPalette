package com.ssafy.palette.repository;

import com.ssafy.palette.domain.dto.CalenderDto;
import com.ssafy.palette.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Diary;

import java.time.LocalDate;
import java.util.List;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
    List<Diary> findByUserAndRegistrationDateBetween(User user, LocalDate start, LocalDate edn);
}
