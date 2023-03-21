package com.ssafy.palette.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Friend;
import com.ssafy.palette.domain.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findById(String userId);
	Optional<Friend> findFriendById(String userId);

	Optional<String> findImageById(String userId);
}
