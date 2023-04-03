package com.ssafy.palette.service;

import java.util.HashMap;
import java.util.Map;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
@Builder(access = AccessLevel.PRIVATE)
public class OAuth2Attribute {
	// 토큰을 통해 얻은 사용자 정보들을 매핑해서 저장
	private Map<String, Object> attributes;
	private String id;
	private String attributeKey;
	private String email;
	private String nickname;
	private String image;

	static OAuth2Attribute of(String provider, String attributeKey,
		Map<String, Object> attributes) {
		switch (provider) {
			case "google":
				return ofGoogle(attributeKey, attributes);
			case "kakao":
				return ofKakao(attributeKey, attributes);
			case "naver":
				return ofNaver("id", attributes);
			default:
				throw new RuntimeException();
		}
	}

	private static OAuth2Attribute ofGoogle(String attributeKey,
		Map<String, Object> attributes) {
		return OAuth2Attribute.builder()
			.nickname((String)attributes.get("name"))
			.email((String)attributes.get("email"))
			.attributes(attributes)
			.attributeKey(attributeKey)
			.build();
	}

	private static OAuth2Attribute ofKakao(String attributeKey,
		Map<String, Object> attributes) {
		Map<String, Object> kakaoAccount = (Map<String, Object>)attributes.get("kakao_account");
		Map<String, Object> kakaoProfile = (Map<String, Object>)kakaoAccount.get("profile");

		return OAuth2Attribute.builder()
			.id(String.valueOf(attributes.get("id")))
			.nickname((String)kakaoProfile.get("nickname"))
			.email((String)kakaoAccount.get("email"))
			.image((String)kakaoProfile.get("profile_image_url"))
			.attributes(kakaoAccount)
			.attributeKey(attributeKey)
			.build();
	}

	private static OAuth2Attribute ofNaver(String attributeKey,
		Map<String, Object> attributes) {
		Map<String, Object> response = (Map<String, Object>)attributes.get("response");

		return OAuth2Attribute.builder()
			.nickname((String)response.get("name"))
			.email((String)response.get("email"))
			.attributes(response)
			.attributeKey(attributeKey)
			.build();
	}

	Map<String, Object> convertToMap() {
		Map<String, Object> map = new HashMap<>();
		map.put("id", id);
		map.put("key", attributeKey);
		map.put("nickname", nickname);
		map.put("email", email);
		map.put("image", image);

		return map;
	}
}
