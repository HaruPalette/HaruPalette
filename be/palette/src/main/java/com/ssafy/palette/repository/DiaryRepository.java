package com.ssafy.palette.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Diary;
import com.ssafy.palette.domain.entity.User;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
	List<Diary> findByUserAndRegistrationDateBetween(User user, LocalDate start, LocalDate edn);

	List<Diary> findByUser_IdAndRegistrationDate(String userId, LocalDate registrationDate);
}
