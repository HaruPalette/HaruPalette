package com.ssafy.palette.provider;

import java.security.Key;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.ssafy.palette.config.security.TokenKey;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class TokenProvider implements InitializingBean {
	private final String secret;
	private final long tokenValidityInMilliseconds;     // 1 hour
	private Key key;

	@Autowired
	public TokenProvider(
		@Value("${jwt.secret}") String secret,
		@Value("${jwt.token-validity-in-seconds}") long tokenValidityInSeconds
	) {
		this.secret = secret;
		this.tokenValidityInMilliseconds = tokenValidityInSeconds * 1000;
	}

	public boolean validateToken(String token) {
		try {
			Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
			return true;
		} catch (SignatureException ex) {
			log.error("Invalid JWT signature");
		} catch (MalformedJwtException ex) {
			log.error("Invalid JWT token");
		} catch (ExpiredJwtException ex) {
			log.error("Expired JWT token");
		} catch (UnsupportedJwtException ex) {
			log.error("Unsupported JWT token");
		} catch (IllegalArgumentException ex) {
			log.error("JWT claims string is empty.");
		} catch (NullPointerException ex) {
			log.error("JWT RefreshToken is empty");
		}
		return false;
	}

	public Long getExpiration(TokenKey tokenKey) {

		String delimiter = tokenKey.getKey();
		if (delimiter.equals(TokenKey.ACCESS.getKey())) {
			return tokenValidityInMilliseconds;
		} else if (delimiter.equals(TokenKey.REFRESH.getKey())) {
			return tokenValidityInMilliseconds * 2L * 24L * 30;
		} else {
			throw new RuntimeException();
		}
	}

	public String resolveToken(String bearerToken) {
		if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer-")) {
			return bearerToken.substring(7);
		}
		return null;
	}

	@Override
	public void afterPropertiesSet() throws Exception {

	}
}
