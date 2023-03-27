package com.ssafy.palette.service;

import com.ssafy.palette.domain.dto.FriendListDto;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.repository.FriendRepository;
import com.ssafy.palette.repository.UserFriendRepository;
import com.ssafy.palette.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class FriendService {

    public final FriendRepository friendRepository;
    public final UserRepository userRepository;
    public final UserFriendRepository userFriendRepository;

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
}
