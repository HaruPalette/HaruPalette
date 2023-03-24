package com.ssafy.palette.service;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.google.protobuf.ByteString;
import com.ssafy.palette.AudioRequest;
import com.ssafy.palette.EmotionResponse;
import com.ssafy.palette.PaletteAIGrpc;
import com.ssafy.palette.TextRequest;
import com.ssafy.palette.TextResponse;
import com.ssafy.palette.domain.dto.DetailDiaryDto;
import com.ssafy.palette.domain.dto.DiaryDto;
import com.ssafy.palette.domain.entity.Answer;
import com.ssafy.palette.domain.entity.Diary;
import com.ssafy.palette.domain.entity.Emotion;
import com.ssafy.palette.domain.entity.Friend;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.repository.AnswerRepository;
import com.ssafy.palette.repository.DiaryRepository;
import com.ssafy.palette.repository.EmotionRepository;
import com.ssafy.palette.repository.FriendRepository;
import com.ssafy.palette.repository.UserRepository;

import io.grpc.ManagedChannel;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class DiaryService {

	private final UserRepository userRepository;
	private final DiaryRepository diaryRepository;
	private final AnswerRepository answerRepository;
	private final FriendRepository friendRepository;
	private final EmotionRepository emotionRepository;
	private final RedisTemplate<String, String> redisTemplate;

	private PaletteAIGrpc.PaletteAIBlockingStub paletteAIStub;
	@Autowired
	public void setPaletteAIStub(ManagedChannel managedChannel) {
		this.paletteAIStub = PaletteAIGrpc.newBlockingStub(managedChannel);
	}

	public void writeDiary(DiaryDto diaryDto, String userId) {

		User user = userRepository.findById(userId).get();
		Friend friend = friendRepository.findById(diaryDto.getFriendId()).get();

		Diary diary = Diary.builder()
			.stickerCode(diaryDto.getStickerCode())
			.weather(diaryDto.getWeather())
			.contents(diaryDto.getContents())
			.registrationDate(LocalDate.now())
			.user(user)
			.friend(friend)
			.status("V")
			.build();
		diaryRepository.save(diary);

		// 감정값 저장
		textToEmotion(diary.getContents(), user, diary);
	}

	public DetailDiaryDto detailDiary(Long diaryId, String userId) {

		// userId validation

		// set detail diary
		Diary diary = diaryRepository.findById(diaryId).get();
		Emotion emotion = emotionRepository.findByDiary(diary).get();
		DetailDiaryDto detailDiaryDto = DetailDiaryDto.toEntity(diary, emotion);
		// 파일 테이블에서 이미지 셋팅
		detailDiaryDto.setImage("abcd");

		return detailDiaryDto;
	}

	public void textToEmotion(String text, User user, Diary diary) {
		TextRequest request = TextRequest.newBuilder().setText(text).build();
		EmotionResponse response = paletteAIStub.textToEmotion(request);

		// 위로의 말 set
		setAnswer(response, diary);

		Emotion emotion = Emotion.builder()
			.neutral((int)(response.getNeutral() * 100))
			.happy((int)(response.getHappy() * 100))
			.surprise((int)(response.getSurprise() * 100))
			.anger((int)(response.getAnger() * 100))
			.anxiety((int)(response.getAnxiety() * 100))
			.sadness((int)(response.getSadness() * 100))
			.disgust((int)(response.getDisgust() * 100))
			.user(user)
			.diary(diary)
			.build();
		emotionRepository.save(emotion);
	}

	public void setAnswer(EmotionResponse response, Diary diary) {

		String[] emotionNames = {"neutral", "happy", "surprise", "anger", "anxiety", "sadness", "disqust"};

		ArrayList<Integer> emotions = new ArrayList<>();
		emotions.add((int)(response.getNeutral() * 100));
		emotions.add((int)(response.getHappy() * 100));
		emotions.add((int)(response.getSurprise() * 100));
		emotions.add((int)(response.getAnger() * 100));
		emotions.add((int)(response.getAnxiety() * 100));
		emotions.add((int)(response.getSadness() * 100));
		emotions.add((int)(response.getDisgust() * 100));

		int maxidx = emotions.indexOf(Collections.max(emotions));
		Random random = new Random();

		List<Answer> answers = answerRepository.findByType(emotionNames[maxidx]);
		int randomIndex = random.nextInt(answers.size());
		Answer answer = answers.get(randomIndex);

		diary.setAnswer(answer);
	}

	public String file2Bytes(MultipartFile file) throws IOException {
		BufferedInputStream in = new BufferedInputStream(file.getInputStream());
		ByteArrayOutputStream out = new ByteArrayOutputStream();

		int read;
		byte[] buff = new byte[2048];
		while ((read = in.read(buff)) > 0) {
			out.write(buff, 0, read);
		}
		out.flush();
		byte [] fileBytes = out.toByteArray();
		AudioRequest request = AudioRequest.newBuilder().setAudio(ByteString.copyFrom(fileBytes)).build();
		TextResponse response = paletteAIStub.speechToText(request);
		in.close();
		out.close();
		return response.getPrediction();
	}

	public void addRedisList(MultipartFile file, String userId) throws IOException {

		// 음성 파일 넘겨 string 반환받기
		String str = file2Bytes(file);
		// redis에 list로 저장
		RedisOperations<String, String> operations = redisTemplate.opsForList().getOperations();
		operations.opsForList().rightPush(userId, str);
		log.info(operations.opsForList().range(userId, 0, -1).toString());
	}

	public String sendScript(int order, String userId)
	{
		RedisOperations<String, String> operations = redisTemplate.opsForList().getOperations();
		String str = operations.opsForList().index(userId+String.valueOf(LocalDate.now()), order);

		return str;
	}

	public void deleteScript(String userId)
	{
		RedisOperations<String, String> operations = redisTemplate.opsForList().getOperations();
	}
}
