package com.ssafy.palette.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Friend;

import java.util.Optional;

public interface FriendRepository extends JpaRepository<Friend, Long> {
}
