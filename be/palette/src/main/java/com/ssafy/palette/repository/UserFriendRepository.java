package com.ssafy.palette.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Friend;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.domain.entity.UserFriend;

public interface UserFriendRepository extends JpaRepository<UserFriend, Long> {

	Optional<Friend> findFriendByUser(User user);

	List<Object> findByUser(User user);

	Optional<UserFriend> findByUserIdAndFriendId(String userId, Long friendId);
}
