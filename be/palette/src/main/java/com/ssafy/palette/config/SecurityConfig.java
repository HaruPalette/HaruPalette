package com.ssafy.palette.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

	@Bean
	protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		// cors 설정
		http.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues())
			.and()
			// REST 방식 사용 -> csrf, form로그인, 세션 무시
			.httpBasic().disable()
			.csrf().disable()
			// 인가
			.authorizeRequests()
			.antMatchers("/api/**").permitAll()
			.anyRequest().authenticated();

		return http.build();
	}
}
