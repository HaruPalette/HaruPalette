package com.ssafy.palette.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import com.ssafy.palette.filter.JwtAuthFilter;
import com.ssafy.palette.provider.TokenProvider;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

	@Value("${jwt.secret}")
	private String secret;

	@Value("${jwt.token-validity-in-seconds}")
	private String time;

	@Bean
	protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		// cors 설정
		http.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues())
			.and()
			// REST 방식 사용 -> csrf, form로그인, 세션 무시
			.httpBasic().disable()
			.csrf().disable()
			.addFilterBefore(new JwtAuthFilter(new TokenProvider(secret, Long.parseLong(time))),
				UsernamePasswordAuthenticationFilter.class)
			.sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			// 인가
			.and()
			.authorizeRequests()
			.antMatchers(HttpMethod.POST, "/api/v1/users").permitAll()
			.anyRequest().authenticated();

		return http.build();
	}
}
