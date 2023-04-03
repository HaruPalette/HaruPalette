package com.ssafy.palette.service;

import java.util.Collections;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.ssafy.palette.model.Role;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CustomOAuth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

	@Override
	public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

		OAuth2UserService<OAuth2UserRequest, OAuth2User> oAuth2UserService = new DefaultOAuth2UserService();

		// oAuth2UserService 객체로 부터 사용자 정보를 받는다.
		OAuth2User oAuth2User = oAuth2UserService.loadUser(userRequest);
		log.info("oAuth2User = {}", oAuth2User);

		// 받은 사용자 정보로 registrationId(소셜로그인 종류)와 userNameAttributeName를 추출
		String registrationId = userRequest.getClientRegistration().getRegistrationId();
		String userNameAttributeName = userRequest.getClientRegistration()
			.getProviderDetails().getUserInfoEndpoint().getUserNameAttributeName();
		log.info("registrationId = {}", registrationId);
		log.info("userNameAttributeName = {}", userNameAttributeName);

		// 추출한 정보들로 OAuth2Attribute 객체 생성
		OAuth2Attribute oAuth2Attribute =
			OAuth2Attribute.of(registrationId, userNameAttributeName, oAuth2User.getAttributes());

		// 사용자 정보 매핑
		var memberAttribute = oAuth2Attribute.convertToMap();

		// 권한 정보를 추가하여 최종적으로 인증된 사용자 정보를 반환
		return new DefaultOAuth2User(
			Collections.singleton(new SimpleGrantedAuthority(Role.USER.getKey())),
			memberAttribute, "id");
	}
}
