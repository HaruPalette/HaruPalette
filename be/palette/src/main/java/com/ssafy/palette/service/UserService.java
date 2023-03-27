package com.ssafy.palette.service;

import java.time.LocalDate;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.palette.domain.dto.LoginDto;
import com.ssafy.palette.domain.dto.ProfileDto;
import com.ssafy.palette.domain.entity.Friend;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.domain.entity.UserFriend;
import com.ssafy.palette.repository.FriendRepository;
import com.ssafy.palette.repository.UserFriendRepository;
import com.ssafy.palette.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

	private final UserRepository userRepository;
	private final FriendRepository friendRepository;
	private final UserFriendRepository userFriendRepository;

	public void signup(LoginDto loginDto)
	{
		Friend friend = friendRepository.findById(1L).get();
		User user = User.builder()
			.id(loginDto.getUserId())
			.image(loginDto.getImage())
			.point(0)
			.weekCnt(0)
			.monthCnt(0)
			.friend(friend)
			.build();

		UserFriend userFriend = UserFriend.builder()
			.friend(friend)
			.user(user)
			.purchaseDate(LocalDate.now())
			.build();

		userRepository.save(user);
		userFriendRepository.save(userFriend);
	}

	public ProfileDto sendProfile(String userId) {

		User user = userRepository.findById(userId).get();
		Friend friend = user.getFriend();
		//String image = userRepository.findImageById(userId).get();
		ProfileDto profileDto = ProfileDto.builder()
			.image(user.getImage())
			.friendEname(friend.getEname())
			.friendId(friend.getId())
			.build();

		return profileDto;
	}
}
