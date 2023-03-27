package com.ssafy.palette.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class PointService {
    private final UserRepository userRepository;

    public void earnPoint(String userId, int val) {
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
        user.setPoint(user.getPoint()+val);
    }

}
