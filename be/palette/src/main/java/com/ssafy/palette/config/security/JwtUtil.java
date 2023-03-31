package com.ssafy.palette.config.security;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class JwtUtil {

	private final String secret;

	@Autowired
	public JwtUtil(
		@Value("${jwt.secret}") String secret
	) {
		this.secret = secret;
	}

	public String getUid(String token) {
		return Jwts.parserBuilder().setSigningKey(secret).build().parseClaimsJws(token).getBody().getSubject();
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
		// catch (JwtException ex) {
		// 	throw new UnAuthorizedException("만료되었거나 검증되지 않은 토큰입니다.");
		// }
		return false;
	}

	/**
	 * 토큰 유효시간 확인
	 */
	public Long getExpiration(String token) {
		Date expiration = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getExpiration();
		Date now = new Date();
		return expiration.getTime() - now.getTime();

	}

	public String resolveToken(String bearerToken) {
		if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer-")) {
			return bearerToken.substring(7);
		}
		return null;
	}
}