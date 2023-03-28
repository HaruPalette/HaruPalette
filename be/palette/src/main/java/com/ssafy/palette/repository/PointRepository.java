package com.ssafy.palette.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Point;

public interface PointRepository extends JpaRepository<Point, Long> {
}
