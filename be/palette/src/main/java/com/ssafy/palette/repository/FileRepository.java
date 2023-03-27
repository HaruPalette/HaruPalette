package com.ssafy.palette.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.File;

public interface FileRepository extends JpaRepository<File, Long> {

	Optional<File> findByDiary_Id(Long diaryId);
}
