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

	@Bean
	public WebSecurityCustomizer configure() {
		return (web) -> web.ignoring()
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
			.requestMatchers(PathRequest.toStaticResources().atCommonLocations());    // 정적인 리소스들에 대해서 시큐리티 적용 무시.
	}

	@Bean
	protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		// cors 설정
		http.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues())
			.and()
			// REST 방식 사용 -> csrf, form로그인, 세션 무시
			.httpBasic().disable()
			.csrf().disable()
			.formLogin().disable()
			.sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()
			// token 검증하는 페이지&메인페이지는 인가 허가, 외엔 모두 인가 필요
			.authorizeRequests()
			.antMatchers("/token/**").permitAll()
			.antMatchers("/").permitAll()
			.anyRequest().authenticated()
			.and()
			.logout().logoutSuccessUrl("/")
			.and()
			.oauth2Login()
			.successHandler(successHandler)
			.userInfoEndpoint()
			.userService(oAuth2UserService);

		http.addFilterBefore(new JwtAuthFilter(tokenProvider), UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}
}