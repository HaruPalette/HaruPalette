package com.ssafy.palette.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Friend;

public interface FriendRepository extends JpaRepository<Friend, Long> {
}
