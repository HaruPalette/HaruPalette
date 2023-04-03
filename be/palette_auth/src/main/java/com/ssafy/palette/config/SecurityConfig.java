package com.ssafy.palette.config;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import com.ssafy.palette.filter.JwtAuthFilter;
import com.ssafy.palette.handler.OAuth2SuccessHandler;
import com.ssafy.palette.provider.TokenProvider;
import com.ssafy.palette.service.CustomOAuth2UserService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Configuration
public class SecurityConfig {

	private final CustomOAuth2UserService oAuth2UserService;
	private final OAuth2SuccessHandler successHandler;
	private final TokenProvider tokenProvider;

	/**
	 * 특정 리소스와 정적인 리소스에 대한 접근 권한 허용
	 */
	@Bean
	public WebSecurityCustomizer configure() {
		return (web) -> web.ignoring()
			// 특정 리소스에 대하여 권한 설정
			.antMatchers(
				"/favicon.ico",
				"/error",
				"/swagger-resources/**",
				"/swagger-ui/**",
				"/v3/api-docs",
				"/webjars/**"
			)
			.and()
			.ignoring()
			// 정적인 리소스들에 대해서 시큐리티 적용 무시.
			.requestMatchers(PathRequest.toStaticResources().atCommonLocations());
	}

	/**
	 * HTTP 요청에 대한 필터 체인 설정
	 */
	@Bean
	protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		// CORS 설정 활성화
		http.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues())
			.and()
			// HTTP Basic 인증 방식 비활성화
			// REST 방식 사용 -> CSRF 방어, 폼로그인, 세션 비활성화
			.httpBasic().disable()
			.csrf().disable()
			.formLogin().disable()
			.sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()
			// 요청에 대한 인가(Authorization) 설정
			.authorizeRequests()
			// token 검증하는 페이지 인가 허가
			.antMatchers("/token/**").permitAll()
			// 메인페이지는 인가 허가
			.antMatchers("/").permitAll()
			// 그 외의 모든 요청은 인가 필요
			.anyRequest().authenticated()
			.and()
			// 로그아웃 기능 설정
			.logout().logoutSuccessUrl("/")
			.and()
			// OAuth2 인증 방식을 사용할 때 필요한 설정
			.oauth2Login()
			// 로그인 성공 시 수행할 핸들러 설정
			.successHandler(successHandler)
			// 사용자 정보를 가져오는 서비스 설정
			.userInfoEndpoint()
			.userService(oAuth2UserService);

		// JwtAuthFilter 필터를 UsernamePasswordAuthenticationFilter 필터 앞에 추가
		http.addFilterBefore(new JwtAuthFilter(tokenProvider), UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}
}