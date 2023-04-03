package com.ssafy.palette.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.palette.domain.dto.FriendListDto;
import com.ssafy.palette.domain.entity.Friend;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.domain.entity.UserFriend;
import com.ssafy.palette.repository.FriendRepository;
import com.ssafy.palette.repository.UserFriendRepository;
import com.ssafy.palette.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class FriendService {

	public final UserRepository userRepository;
	public final FriendRepository friendRepository;
	public final UserFriendRepository userFriendRepository;

	private final PointService pointService;

	public FriendListDto getFriendList(String userId) {
		User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 유저가 없습니다."));
		List<FriendListDto.FriendDto> friendList = friendRepository.findAll()
			.stream()
			.map(friend -> FriendListDto.FriendDto.builder()
				.friendId(friend.getId())
				.kname(friend.getKname())
				.ename(friend.getEname())
				.contents(friend.getContents())
				.tag(friend.getTag())
				.price(friend.getPrice())
				.isBuy(userFriendRepository.findByUserIdAndFriendId(userId, friend.getId()).isPresent())
				.build())
			.collect(Collectors.toList());

		FriendListDto friendListDto = FriendListDto.builder()
			.currentPoint(user.getPoint())
			.friendList(friendList)
			.build();

		return friendListDto;
	}

	public int chooseFriend(String userId, Long friendId) throws Exception {
		User user = userRepository.findById(userId).get();
		Friend friend = friendRepository.findById(friendId).get();
		if (!userFriendRepository.findByUserIdAndFriendId(userId, friendId).isPresent()) {
			throw new Exception("해당 친구랑은 친구를 맺을 수 없습니다.");
		}
		user.setFriend(friend);
		return user.getPoint();
	}

	public int makeFriend(String userId, Long friendId) throws Exception {
		User user = userRepository.findById(userId).get();
		Friend friend = friendRepository.findById(friendId).get();
		LocalDateTime date = LocalDateTime.now();

		if (userFriendRepository.findByUserIdAndFriendId(userId, friendId).isPresent()) {
			throw new Exception("해당 친구랑 이미 친구를 맺었습니다.");
		}

		if (user.getPoint() < friend.getPrice()) {
			throw new Exception("포인트가 부족합니다.");
		}

		UserFriend userFriend = UserFriend.builder()
			.user(user)
			.friend(friend)
			.purchaseDate(date)
			.build();
		userFriendRepository.save(userFriend);

		pointService.usePoint(userId, friend.getPrice());
		pointService.addFriendHistory(userId, friendId, date);

		return user.getPoint();
	}
}
