package com.ssafy.palette.handler;

import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;

import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import com.ssafy.palette.client.UserClient;
import com.ssafy.palette.domain.dto.AuthDto;
import com.ssafy.palette.domain.dto.UserDto;
import com.ssafy.palette.domain.entity.Auth;
import com.ssafy.palette.model.JwtCode;
import com.ssafy.palette.model.Role;
import com.ssafy.palette.model.Token;
import com.ssafy.palette.model.TokenKey;
import com.ssafy.palette.provider.TokenProvider;
import com.ssafy.palette.repository.AuthRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Transactional
@Component
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

	private final AuthRepository authRepository;
	private final TokenProvider tokenProvider;
	private final UserClient userClient;
	private String redirectUrl = "http://localhost:3000/login";
	// private String redirectUrl = "https://harupalette.com/login";

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
		Authentication authentication) throws IOException {

		OAuth2User oAuth2User = (OAuth2User)authentication.getPrincipal();
		Map<String, Object> attributes = oAuth2User.getAttributes();

		AuthDto authDto = AuthDto.builder()
			.code(String.valueOf(attributes.get("id")))
			.build();

		UserDto userDto;

		Auth guest = new Auth();

		Token tokens = new Token();

		// 회원 정보 받아옴
		Auth auth = authRepository.findByCode(authDto.getCode()).orElse(guest);

		// 최초 로그인이라면 회원가입 처리를 한다.
		if (auth.equals(guest)) {
			// 회원 정보 저장
			authRepository.save(authDto.toAuth(authDto));

			// 저장된 회원 정보 불러옴 -> authId 사용
			auth = authRepository.findByCode(authDto.getCode()).orElseThrow();

			userDto = new UserDto(
				String.valueOf(auth.getAuthId())
				, String.valueOf(attributes.get("image"))
			);

			// 토큰 발행
			tokens = tokenProvider.generateToken(userDto.getUserId(), Role.USER.getKey());

			// 리프레시 토큰 캐시 저장
			tokenProvider.setSaveRefresh(
				String.valueOf(auth.getAuthId())
				, tokens.getRefreshToken()
				, tokenProvider.getExpiration(TokenKey.REFRESH)
			);

			// 사용자 DB에 저장
			userClient.insertUser(userDto);
		} else {
			userDto = new UserDto(
				String.valueOf(auth.getAuthId()),
				String.valueOf(attributes.get("image"))
			);

			String access = tokenProvider.generateAccess(userDto.getUserId(), Role.USER.getKey());

			// 리프레시 토큰 유효하면 그대로 사용, 아니면 재발행
			String refresh = tokenProvider.getSavedRefresh(String.valueOf(auth.getAuthId()));
			if (refresh != null && tokenProvider.validateToken(refresh) == JwtCode.ACCESS) {
				tokens = tokens.builder().accessToken(access)
					.refreshToken(refresh).build();
			} else {
				tokens = tokenProvider.generateToken(userDto.getUserId(), Role.USER.getKey());
			}
		}

		String targetUrl;
		targetUrl = UriComponentsBuilder.fromUriString(redirectUrl)
			.queryParam(TokenKey.ACCESS.getKey(), "Bearer-" + tokens.getAccessToken())
			.queryParam(TokenKey.REFRESH.getKey(), "Bearer-" + tokens.getRefreshToken())
			.build().toUriString();

		// 프론트 페이지로 리다이렉트
		getRedirectStrategy().sendRedirect(request, response, targetUrl);
	}
}
