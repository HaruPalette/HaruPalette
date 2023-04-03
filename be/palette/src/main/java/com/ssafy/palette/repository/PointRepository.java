package com.ssafy.palette.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Point;

public interface PointRepository extends JpaRepository<Point, Long> {
	List<Point> findByUser_Id(String userId);

	List<Point> findByUser_IdAndDateBetween(String userId, LocalDateTime start, LocalDateTime end);

	List<Point> findByUser_IdAndDateBetweenAndPointGreaterThan(String userId, LocalDateTime start, LocalDateTime end,
		int point);

	List<Point> findByUser_IdAndDateBetweenAndPointLessThan(String userId, LocalDateTime start, LocalDateTime end,
		int point);
}
