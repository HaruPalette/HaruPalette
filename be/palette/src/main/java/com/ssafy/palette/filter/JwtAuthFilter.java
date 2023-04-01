package com.ssafy.palette.filter;

import java.io.IOException;
import java.util.Arrays;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import com.ssafy.palette.config.security.Role;
import com.ssafy.palette.config.security.TokenKey;
import com.ssafy.palette.provider.TokenProvider;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Component
public class JwtAuthFilter extends GenericFilterBean {

	private final TokenProvider tokenProvider;

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws
		ServletException,
		IOException {
		String token = tokenProvider.resolveToken(((HttpServletRequest)request).getHeader(TokenKey.ACCESS.getKey()));

		if (token != null && tokenProvider.validateToken(token)) {
			Authentication auth = getAuthentication(token);
			SecurityContextHolder.getContext().setAuthentication(auth);
			log.info("로그인 됨");
		}

		chain.doFilter(request, response);
	}

	public Authentication getAuthentication(String auth) {
		return new UsernamePasswordAuthenticationToken(auth, "",
			Arrays.asList(new SimpleGrantedAuthority(Role.USER.getKey())));
	}
}
