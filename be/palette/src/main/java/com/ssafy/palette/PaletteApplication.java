package com.ssafy.palette;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class PaletteApplication {

	public static void main(String[] args) {
		SpringApplication.run(PaletteApplication.class, args);
	}

}
