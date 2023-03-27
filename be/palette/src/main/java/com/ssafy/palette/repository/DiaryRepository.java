package com.ssafy.palette.repository;

import java.time.LocalDate;
import java.util.List;

import com.ssafy.palette.domain.dto.CalenderDto;
import com.ssafy.palette.domain.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Diary;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
    List<Diary> findByUserAndRegistrationDateBetween(User user, LocalDate start, LocalDate edn);
	List<Diary> findByUser_IdAndRegistrationDate(String userId, LocalDate registrationDate);
}
