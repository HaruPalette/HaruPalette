package com.ssafy.palette.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.palette.domain.dto.LoginDto;
import com.ssafy.palette.domain.dto.ProfileDto;
import com.ssafy.palette.domain.entity.Friend;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.repository.DiaryRepository;
import com.ssafy.palette.repository.FriendRepository;
import com.ssafy.palette.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

	private final UserRepository userRepository;
	private final DiaryRepository diaryRepository;
	private final FriendRepository friendRepository;
	public void signup(LoginDto loginDto)
	{
		Friend friend = friendRepository.findById(1L).get();
		User user = User.builder()
			.id(loginDto.getUserId())
			.image(loginDto.getImage())
			.point(0)
			.friend(friend)
			.build();

		userRepository.save(user);
	}

	public ProfileDto profile(String userId) {

		Friend friend = userRepository.findFriendById(userId).get();
		String image = userRepository.findImageById(userId).get();
		ProfileDto profileDto = ProfileDto.builder()
			.image(image)
			.friendEname(friend.getEname())
			.friendId(friend.getId())
			.build();

		return profileDto;
	}
}
