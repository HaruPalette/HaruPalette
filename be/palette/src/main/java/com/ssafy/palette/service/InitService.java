package com.ssafy.palette.service;

import org.springframework.data.redis.core.RedisOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.palette.domain.entity.Answer;
import com.ssafy.palette.domain.entity.Challenge;
import com.ssafy.palette.domain.entity.Friend;
import com.ssafy.palette.domain.entity.User;
import com.ssafy.palette.repository.AnswerRepository;
import com.ssafy.palette.repository.ChallengeRepository;
import com.ssafy.palette.repository.FriendRepository;
import com.ssafy.palette.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class InitService {

	private final UserRepository userRepository;
	private final AnswerRepository answerRepository;
	private final FriendRepository friendRepository;
	private final ChallengeRepository challengeRepository;
	private final RedisTemplate<String, String> redisTemplate;
	public void addInitFriend()
	{
		Friend haru = Friend.builder()
			.id(1L)
			.kname("하루")
			.ename("haru")
			.tag("#다정한 #진솔한 #ISFP")
			.contents("안녕🐾 난 하루야😻\n"+"난 하루하루 기록하는 걸 좋아해\n"+"너도 나와 같이 오늘 하루를\n"+"기록하지않을래?")
			.price(0)
			.build();

		Friend gomi = Friend.builder()
			.id(2L)
			.kname("고미")
			.ename("gomi")
			.tag("#섬세한 #느긋한 #INFJ")
			.contents("안녕🐾 난 고미야~🐼"+"항상 고민이 많은 나는\n"+"그걸 일기에 기록하곤해\n"+"어때? 너도 고민을 말해볼래?")
			.price(100)
			.build();

		Friend tori = Friend.builder()
			.id(3L)
			.kname("토리")
			.ename("tori")
			.tag("#낙천적인 #발랄한 #ESFP")
			.contents("안녕🐾 난 토리야!🐿\n"+"난 도토리를 좋아해서\n"+"이름도 토리로 개명했어!\n"+"난 외톨이가 아니라구! 나랑 친구할래?")
			.price(500)
			.build();




		friendRepository.save(haru);
		friendRepository.save(gomi);
		friendRepository.save(tori);

	}

	public void addInitChallenge()
	{
		Challenge one = Challenge.builder()
			.id(1L)
			.contents("주 3회 작성")
			.point(10)
			.build();

		Challenge two = Challenge.builder()
			.id(2L)
			.contents("주 5회 작성")
			.point(20)
			.build();

		Challenge three = Challenge.builder()
			.id(3L)
			.contents("주 7회 작성")
			.point(30)
			.build();

		Challenge four = Challenge.builder()
			.id(4L)
			.contents("연속 한달 작성")
			.point(30)
			.build();

		Challenge five = Challenge.builder()
			.id(5L)
			.contents("하루 작성")
			.point(5)
			.build();

		challengeRepository.save(one);
		challengeRepository.save(two);
		challengeRepository.save(three);
		challengeRepository.save(four);
		challengeRepository.save(five);
	}

	public void addAnswer()
	{
		// 감정 타입 (neutral, happy, surprise, anger, anxiety, sadness, disqust)
		// neutral
		Answer n1 = Answer.builder()
			.contents("처음엔 우리가 습관을 만들지만\n"
				+ "그다음엔 습관이 우릴 만든대 \uD83D\uDE00")
			.type("neutral")
			.build();

		Answer n2 = Answer.builder()
			.contents("친구야~ 오늘 하루도 수고했어! \uD83D\uDE09")
			.type("neutral")
			.build();

		Answer n3 = Answer.builder()
			.contents("오늘은 평범한 날이지만\n"
				+ "미래로 통하는 가장 소중한 시간이야! ⏳")
			.type("neutral")
			.build();

		answerRepository.save(n1);
		answerRepository.save(n2);
		answerRepository.save(n3);

		// happy
		Answer h1 = Answer.builder()
			.contents("행복한 기분으로 좋은 꿈 꾸길 바라 \uD83D\uDE34")
			.type("happy")
			.build();

		Answer h2 = Answer.builder()
			.contents("너는 좋은 일들만 끌어당겨\n"
				+ "그것도 아주 많이! \uD83E\uDDF2")
			.type("happy")
			.build();

		Answer h3 = Answer.builder()
			.contents("부럽다~ 행복한 이야기를 들으니\n"
				+ "나도 행복해졌어! \uD83C\uDF40")
			.type("happy")
			.build();

		Answer h4 = Answer.builder()
			.contents("좋은 일을 남들과\n"
				+ "공유해 보는건 어떨까? \uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66")
			.type("happy")
			.build();

		Answer h5 = Answer.builder()
			.contents("너가 행복하다니 내가 기분이 다 좋은걸? \uD83E\uDD29")
			.type("happy")
			.build();

		Answer h6 = Answer.builder()
			.contents("내일도 오늘처럼 좋은일이 일어나면 좋겠다! \uD83D\uDE4F")
			.type("happy")
			.build();

		Answer h7 = Answer.builder()
			.contents("오늘의 특별한 순간들은\n"
				+ "내일의 소중한 추억들이야! ✨")
			.type("happy")
			.build();

		Answer h8 = Answer.builder()
			.contents("행복은 나눌수록 두배가 된다는데\n"
				+ "더 행복해졌어? \uD83E\uDD70")
			.type("happy")
			.build();

		Answer h9 = Answer.builder()
			.contents("오 대박! 신난다~ 넌 최고야! 멋있어! \uD83E\uDD73")
			.type("happy")
			.build();

		Answer h10 = Answer.builder()
			.contents("긍정적인 사고는 능력을 배로 높인대!\n"
				+ "넌 오늘 능력이 두 배 상승했어! ✌")
			.type("happy")
			.build();

		answerRepository.save(h1);
		answerRepository.save(h2);
		answerRepository.save(h3);
		answerRepository.save(h4);
		answerRepository.save(h5);
		answerRepository.save(h6);
		answerRepository.save(h7);
		answerRepository.save(h8);
		answerRepository.save(h9);
		answerRepository.save(h10);

		// surprise
		Answer s1 = Answer.builder()
			.contents("헐 진짜? 대박.. 내가 다 어이없다 \uD83D\uDE32")
			.type("surprise")
			.build();

		Answer s2 = Answer.builder()
			.contents("괜찮아요? 많이 놀랐죠? \uD83D\uDE13")
			.type("surprise")
			.build();

		answerRepository.save(s1);
		answerRepository.save(s2);

		// anger
		Answer a1 = Answer.builder()
			.contents("워워~ 진정해\n"
				+ "우리 같이 눈을 감고 심호흡해 볼까? \uD83D\uDE2E\uD83D\uDCA8")
			.type("anger")
			.build();

		Answer a2 = Answer.builder()
			.contents("산책하면서 화난 마음을 진정시켜보자. \uD83C\uDF43")
			.type("anger")
			.build();

		Answer a3 = Answer.builder()
			.contents("절대로 다른 사람들이 너에게 틀렸다고\n"
				+ "말하게 내버려두지마! \uD83D\uDE0E")
			.type("anger")
			.build();

		Answer a4 = Answer.builder()
			.contents("다 너가 귀여운 탓이야! 오늘 야식 고? \uD83C\uDF57")
			.type("anger")
			.build();

		Answer a5 = Answer.builder()
			.contents("아무일도 생기지 않게 할 순 없어.\n"
				+ "아무일도 없이 어떻게 살아? 재미 없잖아 \uD83D\uDE09")
			.type("anger")
			.build();

		Answer a6 = Answer.builder()
			.contents("삶이 너를 실망시키면 어쩐다고?\n"
				+ "계속 나아가! \uD83C\uDFC3\u200D♂️")
			.type("anger")
			.build();

		Answer a7 = Answer.builder()
			.contents("천천히!괜찮아.괜찮아.\n"
				+ "명상을 하면 기분이 좋아질거야~ \uD83D\uDE0A")
			.type("anger")
			.build();

		Answer a8 = Answer.builder()
			.contents("매운 떡볶이 먹으면서\n"
				+ "스트레스 푸는거 어때? \uD83D\uDD25")
			.type("anger")
			.build();

		answerRepository.save(a1);
		answerRepository.save(a2);
		answerRepository.save(a3);
		answerRepository.save(a4);
		answerRepository.save(a5);
		answerRepository.save(a6);
		answerRepository.save(a7);
		answerRepository.save(a8);

		// anxiety
		Answer an1 = Answer.builder()
			.contents("너는 어떤 일도 이겨낼 수 있을거야 \uD83D\uDE4C")
			.type("anxiety")
			.build();

		Answer an2 = Answer.builder()
			.contents("그거 알아? 너는 강하고 용감해! \uD83D\uDE4C")
			.type("anxiety")
			.build();

		Answer an3 = Answer.builder()
			.contents("잘하고 있어. 토닥토닥.\n"
				+ "너 자신을 믿고 용기를 내보자! \uD83D\uDE4C")
			.type("anxiety")
			.build();

		Answer an4 = Answer.builder()
			.contents("삶은 실수투성이야 우리는 늘 실수를 해 \uD83D\uDE09")
			.type("anxiety")
			.build();

		Answer an5 = Answer.builder()
			.contents("너무 힘들면 주변에\n"
				+ "도움을 요청하는건 어떨까? \uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66")
			.type("anxiety")
			.build();

		Answer an6 = Answer.builder()
			.contents("너무 심각할 것 없어. 잘 될 거야! \uD83D\uDC4D")
			.type("anxiety")
			.build();

		Answer an7 = Answer.builder()
			.contents("인생은 속력이 아니야. 방향이야.\n"
				+ "너만의 속도로 가도 돼. \uD83C\uDFC3\u200D♂️")
			.type("anxiety")
			.build();

		Answer an8 = Answer.builder()
			.contents("너무 빨리 달리지 않아도 돼.\n"
				+ "마지막으로 들어왔대도, 최선을 다한 거야 \uD83D\uDC4F")
			.type("anxiety")
			.build();

		Answer an9 = Answer.builder()
			.contents("침착해. 네가 가야할 곳에만 집중해야해.\n"
				+ "다른 사람들은 신경쓰지 말고! \uD83D\uDC0C")
			.type("anxiety")
			.build();

		Answer an10 = Answer.builder()
			.contents("눈을 감지 말고 똑바로 봐.\n"
				+ "두려움의 실체는 생각과 다를 수 있어 \uD83D\uDC40")
			.type("anxiety")
			.build();

		answerRepository.save(an1);
		answerRepository.save(an2);
		answerRepository.save(an3);
		answerRepository.save(an4);
		answerRepository.save(an5);
		answerRepository.save(an6);
		answerRepository.save(an7);
		answerRepository.save(an8);
		answerRepository.save(an9);
		answerRepository.save(an10);

		// sadness
		Answer sa1 = Answer.builder()
			.contents("넌 소중한 존재야, 사랑받을 가치가 있어 \uD83D\uDC96")
			.type("sadness")
			.build();

		Answer sa2 = Answer.builder()
			.contents("오늘 힘들었지? 울고싶을땐 울어도돼 \uD83D\uDE25")
			.type("sadness")
			.build();

		Answer sa3 = Answer.builder()
			.contents("지치고 힘들땐 내게 기대\n"
				+ "언제나 너의 곁에 서있을게~ \uD83E\uDD70")
			.type("sadness")
			.build();

		Answer sa4 = Answer.builder()
			.contents("슬퍼하지마 혼자가 아니야~\n"
				+ "기분 up 되는 일에 집중해보자! \uD83D\uDCAA")
			.type("sadness")
			.build();

		Answer sa5 = Answer.builder()
			.contents("힘이 들땐 하늘을 봐!\n"
				+ "나는 항상 너를 응원해! ⛅")
			.type("sadness")
			.build();

		Answer sa6 = Answer.builder()
			.contents("눈물나게 아플땐 크게 한번 소리를 질러봐 \uD83D\uDCE2")
			.type("sadness")
			.build();

		Answer sa7 = Answer.builder()
			.contents("살다 보면 안 좋은 날도 있지\n"
				+ "훌훌 털어내버리자! \uD83E\uDDF9")
			.type("sadness")
			.build();

		Answer sa8 = Answer.builder()
			.contents("최고의 순간은 우연히 찾아오는 거야\n"
				+ "같이 기다려 보자~ \uD83C\uDF40")
			.type("sadness")
			.build();

		Answer sa9 = Answer.builder()
			.contents("저기압일땐 고기앞으로!\n"
				+ "행복은 멀리 있지 않아 \uD83C\uDF56")
			.type("sadness")
			.build();

		answerRepository.save(an1);
		answerRepository.save(an2);
		answerRepository.save(an3);
		answerRepository.save(an4);
		answerRepository.save(an5);
		answerRepository.save(an6);
		answerRepository.save(an7);
		answerRepository.save(an8);
		answerRepository.save(an9);

		// disqust
		Answer d1 = Answer.builder()
			.contents("끔찍한 하루를 보냈구나. 내일은 다를거야 \uD83E\uDD17")
			.type("disqust")
			.build();

		Answer d2 = Answer.builder()
			.contents("피할 수 없다면 즐기자~ \uD83D\uDE0F")
			.type("disqust")
			.build();

		answerRepository.save(d1);
		answerRepository.save(d2);
	}

	public void tempUser()
	{
		User jiyeon = User.builder()
			.id("test")
			.build();

		userRepository.save(jiyeon);
	}

	public void tempText()
	{
		redisTemplate.opsForList().rightPush("hi", "하루야");
		RedisOperations<String, String> operations = redisTemplate.opsForList().getOperations();
		System.out.println(operations.opsForList().range("hi", 0, -1));

		Long size = operations.opsForList().size("hi");


		for (int i = 0; i < size; i++) {
			System.out.println(operations.opsForList().leftPop("hi"));
		}

		operations.opsForList().rightPush("hi", "안녕");
		System.out.println(operations.opsForList().range("hi", 0, -1));
	}

	public void tempAnswer()
	{
		Answer answer = Answer.builder()
			.contents("수고했어 오늘도")
			.build();

		answerRepository.save(answer);
	}
}
