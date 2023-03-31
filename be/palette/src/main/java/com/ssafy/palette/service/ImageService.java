package com.ssafy.palette.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor

public class ImageService {
	String defaultPath = "https://haru-palette.s3.ap-northeast-2.amazonaws.com/default/";
	ArrayList<String> defaultImages = new ArrayList<>(
		List.of("haru_light.svg", "haru_dark.svg", "gomi_light.svg", "gomi_light.svg", "tori_light.svg",
			"tori_light.svg"));
	Random rand;

	public String getRandomDefaultImage() {
		rand = new Random();
		int index = rand.nextInt(defaultImages.size());

		return defaultPath + defaultImages.get(index);
	}

}
