package com.ssafy.palette.config;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

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
	public WebSecurityCustomizer configure() {
		return (web) -> web.ignoring()
			.antMatchers(
				"/api/v1/diaries/stt"
			)
			.and()
			.ignoring()
			.requestMatchers(PathRequest.toStaticResources().atCommonLocations());    // 정적인 리소스들에 대해서 시큐리티 적용 무시.
	}

	@Bean
	protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		// cors 설정
		http.cors().configurationSource(corsConfigurationSource())
			.and()
			// // REST 방식 사용 -> csrf, form로그인, 세션 무시
			.httpBasic().disable()
			.csrf().disable()
			//.addFilterBefore(new MultipartFilter(), UsernamePasswordAuthenticationFilter.class)
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

	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();

		configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000", "https://harupalette.com"));
		configuration.setAllowedMethods(Arrays.asList("HEAD", "GET", "POST", "PATCH"));
		configuration.setAllowedHeaders(List.of("*"));
		configuration.setAllowCredentials(true); // 자격증명과 함께 요청 여부 (Authorization로 사용자 인증 사용 시 true)

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

	@Bean
	public CommonsMultipartResolver multipartResolver() {
		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
		multipartResolver.setDefaultEncoding("UTF-8"); // 파일 인코딩 설정
		//multipartResolver.setMaxUploadSizePerFile(5 * 1024 * 1024); // 파일당 업로드 크기 제한 (5MB)
		return multipartResolver;
	}
}
