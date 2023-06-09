package com.ssafy.palette.service;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Random;

import org.apache.http.HttpException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.Cursor;
import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.core.RedisOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ScanOptions;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.google.protobuf.ByteString;
import com.ssafy.palette.AudioRequest;
import com.ssafy.palette.EmotionResponse;
import com.ssafy.palette.PaletteAIGrpc;
import com.ssafy.palette.TextRequest;
import com.ssafy.palette.TextResponse;
import com.ssafy.palette.domain.dto.CalenderDto;
import com.ssafy.palette.domain.dto.DetailDiaryDto;
import com.ssafy.palette.domain.dto.DiaryDto;
import com.ssafy.palette.domain.entity.Answer;
import com.ssafy.palette.domain.entity.Diary;
import com.ssafy.palette.domain.entity.Emotion;
import com.ssafy.palette.domain.entity.File;
import com.ssafy.palette.domain.entity.Friend;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.exception.NoScriptException;
import com.ssafy.palette.repository.AnswerRepository;
import com.ssafy.palette.repository.ChallengeRepository;
import com.ssafy.palette.repository.DiaryRepository;
import com.ssafy.palette.repository.EmotionRepository;
import com.ssafy.palette.repository.FileRepository;
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

	private final FileRepository fileRepository;
	private final UserRepository userRepository;
	private final DiaryRepository diaryRepository;
	private final AnswerRepository answerRepository;
	private final FriendRepository friendRepository;
	private final EmotionRepository emotionRepository;
	private final ChallengeRepository challengeRepository;
	private final RedisTemplate<String, String> redisTemplate;

	private final S3Service s3Service;
	private final UserService userService;
	private final ChallengeService challengeService;

	private PaletteAIGrpc.PaletteAIBlockingStub paletteAIStub;

	@Autowired
	public void setPaletteAIStub(ManagedChannel managedChannel) {
		this.paletteAIStub = PaletteAIGrpc.newBlockingStub(managedChannel);
	}

	@SuppressWarnings("checkstyle:NeedBraces")
	public DetailDiaryDto detailDiary(Long diaryId, String userId) throws Exception {
		// userId validation
		User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
		Diary diary = diaryRepository.findById(diaryId).get();

		// diary 상태 조회
		System.out.println(diary.getStatus());
		if (Objects.equals(diary.getStatus(), "D")) {
			throw new Exception("해당 다이어리는 없습니다.");
		}

		// set detail diary
		Emotion emotion = emotionRepository.findByDiary(diary).get();
		DetailDiaryDto detailDiaryDto = DetailDiaryDto.toEntity(diary, emotion);
		// 파일 테이블에서 이미지 셋팅
		detailDiaryDto.setImage(fileRepository.findByDiary_Id(diaryId).get().getPath());

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

	public void writeDiary(MultipartFile file, DiaryDto diaryDto, String userId) throws IOException {
		User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다."));
		Friend friend = friendRepository.findById(diaryDto.getFriendId()).get();

		// 날짜 계산
		LocalDate date = todayDate();

		// 오늘 처음 쓰는 일기인지 체크
		// 포인트, 도전 과제 체크
		if (isFirst(userId, date)) {
			userService.plusCnt(userId);
			challengeService.checkChallenge(userId, date.atTime(LocalTime.now()));
		}

		Diary diary = Diary.builder()
			.stickerCode(diaryDto.getStickerCode())
			.weather(diaryDto.getWeather())
			.contents(diaryDto.getContents())
			.registrationDate(date)
			.user(user)
			.friend(friend)
			.status("V")
			.build();
		diaryRepository.save(diary);

		if (file == null) {
			File image = File.builder()
				.path(diaryDto.getImage())
				.diary(diary)
				.build();
			fileRepository.save(image);
		} else {
			s3Service.uploadImg(diary.getId(), file, date);
		}

		// 감정값 저장
		textToEmotion(diary.getContents(), user, diary);
	}

	public List<CalenderDto> getCalendar(String userId, String date) {
		log.info("userId : " + userId);
		User user = userRepository.findById(userId)
			.orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다. id=" + userId));
		LocalDate start = LocalDate.parse(date + "-01");
		LocalDate end = start.plusMonths(1).minusDays(1);
		List<Diary> diaries = diaryRepository.findByUserAndRegistrationDateBetween(user, start, end);
		List<CalenderDto> calenderDto = new ArrayList<>();
		for (Diary diary : diaries) {
			if (diary.getStatus().equals("D"))
				continue;
			Emotion emotion = emotionRepository.findByDiary(diary).get();
			calenderDto.add(CalenderDto.toEntity(diary, emotion));
		}
		return calenderDto;
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
		byte[] fileBytes = out.toByteArray();
		AudioRequest request = AudioRequest.newBuilder().setAudio(ByteString.copyFrom(fileBytes)).build();
		TextResponse response = paletteAIStub.speechToText(request);
		in.close();
		out.close();
		return response.getPrediction();
	}

	public void addRedisList(MultipartFile file, String userId, int index) throws IOException {
		// 음성 파일 넘겨 string 반환받기
		String str = file2Bytes(file) + "\n\n";
		// redis에 list로 저장
		ValueOperations<String, String> stringStringValueOperations = redisTemplate.opsForValue();
		stringStringValueOperations.set(userId+Integer.toString(index), str);
		log.info(stringStringValueOperations.get(userId+String.valueOf(index)));
	}

	public String sendScript(int index, String userId) throws Exception {
		ValueOperations<String, String> stringStringValueOperations = redisTemplate.opsForValue();
		// 키 존재 여부 & 인덱스에 해당 값 존재 여부 확인
		if (!(redisTemplate.hasKey(userId+Integer.toString(index)))) {
			return "504";
		}
		String str = stringStringValueOperations.get(userId+Integer.toString(index));

		return str;
	}

	public void deleteScript(String userId) {
		List<String> result = new ArrayList<>();
		redisTemplate.execute(new RedisCallback() {
			@Override
			public Object doInRedis(RedisConnection connection) throws DataAccessException {

				ScanOptions options = ScanOptions.scanOptions().match(userId + "*").count(20).build();

				Cursor<byte[]> entries = connection.scan(options);

				while (entries.hasNext()) {
					String key = new String(entries.next());
					result.add(key);
					redisTemplate.delete(key);
				}
				return result;
			}
		});

		log.info(result.toString());
	}

	public LocalDate todayDate() {
		LocalDateTime time = LocalDateTime.now();
		LocalDate date = LocalDate.now();
		if (time.getHour() < 4) {
			date = LocalDate.from(time.minusDays(1));
		}
		return date;
	}

	public void deleteDiary(Long diaryId) {
		Diary diary = diaryRepository.findById(diaryId).get();
		diary.setStatus("D");
	}

	public boolean isFirst(String userId, LocalDate date) {
		List<Diary> diaries = diaryRepository.findByUser_IdAndRegistrationDate(userId, date);
		if (diaries.size() > 0)
			return false;
		return true;
	}
}
