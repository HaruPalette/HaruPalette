package com.ssafy.palette.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Challenge;

public interface ChallengeRepository extends JpaRepository<Challenge, Long> {

	List<Challenge> findByIdBetween(Long start, Long end);
}
