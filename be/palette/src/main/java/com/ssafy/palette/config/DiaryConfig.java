package com.ssafy.palette.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;

@Configuration
public class DiaryConfig {

    @Bean
    public ManagedChannel getManagedChannel() {
        return ManagedChannelBuilder.forTarget("192.168.31.233:50051").usePlaintext().build();
    }
}
