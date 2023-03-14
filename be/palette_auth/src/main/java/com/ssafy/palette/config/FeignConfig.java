package com.ssafy.palette.config;

import org.apache.commons.lang3.ArrayUtils;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import feign.Request;
import feign.RequestInterceptor;
import feign.RequestTemplate;

@Configuration
@EnableFeignClients("com.ssafy.palette")
class FeignConfig {

	@Bean
	public RequestInterceptor requestInterceptor() {
		return requestTemplate -> {
			if (ArrayUtils.isEmpty(requestTemplate.body()) && !isGetOrDelete(requestTemplate)) {
				// body가 비어있는 경우에 요청을 보내면 411 에러가 생김 https://github.com/OpenFeign/feign/issues/1251
				// content-length로 처리가 안되어서 빈 값을 항상 보내주도록 함
				requestTemplate.body("{}");
			}
		};
	}

	private boolean isGetOrDelete(RequestTemplate requestTemplate) {
		return Request.HttpMethod.GET.name().equals(requestTemplate.method())
			|| Request.HttpMethod.DELETE.name().equals(requestTemplate.method());
	}
}