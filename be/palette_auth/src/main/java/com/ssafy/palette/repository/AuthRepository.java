package com.ssafy.palette.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.palette.domain.entity.Auth;

public interface AuthRepository extends JpaRepository<Auth, String> {

	Optional<Auth> findByAuthId(UUID authId);

	Optional<Auth> findByCode(String code);
}
