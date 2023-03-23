package com.ssafy.palette.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

@Configuration
public class DiaryConfig {

    @Bean
    public ManagedChannel getManagedChannel() {
        return ManagedChannelBuilder.forTarget("localhost:50051").usePlaintext().build();
    }
}
