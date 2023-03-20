/*
package com.ssafy.palette.config.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
	private final UserRepository userRepository;
//	private final ProfileRepository profileRepository;

	@Override
	public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
		//user를 가져옴
		User user = userRepository.findById(Long.valueOf(id))
			.orElseThrow(() -> new UsernameNotFoundException("해당 유저를 찾을 수 없습니다: "));

		return new UserDetailsImpl(user.getId());
	}
}
*/
