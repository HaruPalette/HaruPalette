package com.ssafy.palette.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.palette.domain.entity.Point;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.repository.PointRepository;
import com.ssafy.palette.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class PointService {
	private final UserRepository userRepository;
	private final PointRepository pointRepository;

	public void earnPoint(String userId, int val) {
		User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
		user.setPoint(user.getPoint() + val);
	}

	public void usePoint(String userId, int val) {
		User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
		user.setPoint(user.getPoint() - val);
	}

	public void addHistory(String useId, int val, String category, LocalDateTime date) {
		Point point = Point.builder()
			.user(userRepository.findById(useId).get())
			.point(val)
			.category(category)
			.date(date)
			.build();
		pointRepository.save(point);
	}
}
