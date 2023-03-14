package com.ssafy.palette.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ssafy.palette.domain.dto.UserDto;
import com.ssafy.palette.model.BaseResponseBody;

@FeignClient(name = "user-client", url = "localhost:8080/api/v1/user")
// @FeignClient(name = "user-profile-client", url = "j8b303.p.ssafy.io:8080/api/v1/user")
public interface UserClient {

	@PostMapping(produces = "application/json")
	ResponseEntity<? extends BaseResponseBody> insertUser(@RequestBody UserDto userDto);

	@PostMapping(value = "/image", produces = "application/json")
	ResponseEntity<? extends BaseResponseBody> updateImage(@RequestBody UserDto userDto);
}
