package com.ssafy.palette.provider;

import java.security.Key;
import java.util.Date;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.jwt.JwtException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.ssafy.palette.model.JwtCode;
import com.ssafy.palette.model.Token;
import com.ssafy.palette.model.TokenKey;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class TokenProvider implements InitializingBean {
	private final String secret;
	private final long tokenValidityInMilliseconds;
	// private final RedisService redisService;
	private Key key;

	@Autowired
	public TokenProvider(
		@Value("${jwt.secret}") String secret,
		@Value("${jwt.token-validity-in-seconds}") long tokenValidityInSeconds
		// RedisService redisService
	) {
		this.secret = secret;
		this.tokenValidityInMilliseconds = tokenValidityInSeconds * 1000 * 24; // 24시간
		// this.redisService = redisService;
	}

	/**
	 * Bean 생성 후에 실행
	 */
	@Override
	public void afterPropertiesSet() {
		// secret 값을 BASE64로 디코딩
		byte[] keyBytes = Decoders.BASE64.decode(secret);
		this.key = Keys.hmacShaKeyFor(keyBytes);
	}

	/**
	 * Redis에 저장된 refresh token 값을 불러옴
	 * @param key
	 * @return
	 */
	public String getSavedRefresh(String key) {
		// return redisService.getData(key);
		return null;
	}

	/**
	 * Redis에 refresh token 값을 저장
	 * @param key
	 * @param value
	 * @param time
	 */
	public void setSaveRefresh(String key, String value, Long time) {
		// redisService.setDataWithExpiration(key, value, time);
	}

	/**
	 * access token 생성
	 * @param userId
	 * @param role
	 * @return
	 */
	public String generateAccess(String userId, String role) {
		return createToken(userId, role, TokenKey.ACCESS);
	}

	/**
	 * refresh token 생성
	 * @param userId
	 * @param role
	 * @return
	 */
	public String generateRefresh(String userId, String role) {
		return createToken(userId, role, TokenKey.REFRESH);
	}

	/**
	 *  access token과 refresh token을 생성하여 Token 객체로 반환
	 * @param userId
	 * @param role
	 * @return
	 */
	public Token generateToken(String userId, String role) {
		String accessToken = generateAccess(userId, role);
		String refreshToken = generateRefresh(userId, role);

		return new Token(accessToken, refreshToken);
	}

	/**
	 * tokenKey에 따라 해당 토큰의 유효기간을 설정하고, JWT 토큰을 생성
	 * @param userId
	 * @param role
	 * @param tokenKey
	 * @return
	 */
	public String createToken(String userId, String role, TokenKey tokenKey) {
		long period = getExpiration(tokenKey);

		Claims claims = Jwts.claims().setSubject(userId);
		claims.put("role", role);

		Date now = new Date();

		return Jwts.builder()
			.setClaims(claims)
			.setIssuedAt(now)
			.setExpiration(new Date(now.getTime() + period))
			.signWith(key, SignatureAlgorithm.HS256)
			.compact();
	}

	/**
	 * JWT 토큰이 유효한지 검증
	 * @param token
	 * @return
	 */
	public JwtCode validateToken(String token) {
		try {
			Jwts.parserBuilder()
				.setSigningKey(secret)
				.build()
				.parseClaimsJws(token);
			return JwtCode.ACCESS;
		} catch (ExpiredJwtException e) {
			// 만료된 경우에는 refresh token을 확인하기 위해
			return JwtCode.EXPIRED;
		} catch (JwtException | IllegalArgumentException e) {
			log.info("jwtException = {}", e);
		}
		return JwtCode.DENIED;
	}

	/**
	 * JWT 토큰에서 subject 값을 추출하여 반환
	 * @param token
	 * @return
	 */
	public String getUid(String token) {
		return Jwts.parserBuilder().setSigningKey(secret).build().parseClaimsJws(token).getBody().getSubject();
	}

	/**
	 * JWT 토큰에서 claim 값을 추출하여 반환
	 * @param token
	 * @return
	 */
	public Claims getClaims(String token) {
		return Jwts.parserBuilder().setSigningKey(secret).build().parseClaimsJws(token).getBody();
	}

	/**
	 * access token과 refresh token의 유효기간을 설정
	 * @param tokenKey
	 * @return
	 */
	public Long getExpiration(TokenKey tokenKey) {
		// access token : 24시간
		// refresh token : 2주
		String delimiter = tokenKey.getKey();
		if (delimiter.equals(TokenKey.ACCESS.getKey())) {
			return tokenValidityInMilliseconds; // 24시간
		} else if (delimiter.equals(TokenKey.REFRESH.getKey())) {
			return tokenValidityInMilliseconds * 14; // 2주
		} else {
			throw new RuntimeException();
		}
	}

	/**
	 * HTTP Header에서 token을 추출하여 반환
	 * @param bearerToken
	 * @return
	 */
	public String resolveToken(String bearerToken) {
		if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer-")) {
			return bearerToken.substring(7);
		}
		return null;
	}
}