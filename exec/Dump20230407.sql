-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 43.201.37.127    Database: palette_auth
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth`
--

DROP TABLE IF EXISTS `auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth` (
  `user_id` varchar(36) NOT NULL,
  `code` varchar(10) NOT NULL,
  `registration_date` datetime NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth`
--

LOCK TABLES `auth` WRITE;
/*!40000 ALTER TABLE `auth` DISABLE KEYS */;
INSERT INTO `auth` VALUES ('024976b0-a26c-4fb0-a55b-f93b37708481','2736925922','2023-04-05 13:25:05'),('0880c821-3545-49f5-b80a-1631ffa5ab5c','2715816651','2023-04-06 01:37:14'),('25c2c00d-56ed-45fb-9738-5118783127a0','2728249087','2023-04-03 15:20:54'),('3afcaf48-86b3-4595-b2bb-480b1f599f55','2738379826','2023-04-06 14:20:25'),('732e835e-bd8f-43d0-8d75-be1f8a61aab3','2723766817','2023-04-03 08:26:12'),('78b4acdf-d0e1-4f7b-aff4-474e153de101','2737621612','2023-04-06 04:54:12'),('8096b53c-cf37-4c6b-8f58-6cf20363b25e','2708315412','2023-04-03 06:07:47'),('84faeb79-78f6-4e47-a974-5848f4a2602e','2737471783','2023-04-06 02:55:10'),('9b104cd5-1aba-4413-80c4-a5a3c64b188f','2705558135','2023-04-06 00:07:33'),('a8b201a2-4e98-4a46-8d57-8182ea992746','2733097097','2023-04-03 14:42:32'),('e2658250-1647-44ea-bc9a-c65b16dbd039','2737106183','2023-04-05 16:46:09'),('e5012ffc-3131-42a6-8aec-976925e2a86c','2737503155','2023-04-06 03:20:46');
/*!40000 ALTER TABLE `auth` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-07  4:57:25
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 43.201.37.127    Database: palette
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer` (
  `answer_id` bigint NOT NULL AUTO_INCREMENT,
  `contents` text NOT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`answer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,'처음엔 우리가 습관을 만들지만\n그다음엔 습관이 우릴 만든대 ?','neutral'),(2,'친구야~ 오늘 하루도 수고했어! ?','neutral'),(3,'오늘은 평범한 날이지만\n미래로 통하는 가장 소중한 시간이야! ⏳','neutral'),(4,'행복한 기분으로 좋은 꿈 꾸길 바라 ?','happy'),(5,'너는 좋은 일들만 끌어당겨\n그것도 아주 많이! ?','happy'),(6,'부럽다~ 행복한 이야기를 들으니\n나도 행복해졌어! ?','happy'),(7,'좋은 일을 남들과\n공유해 보는건 어떨까? ?‍?‍?','happy'),(8,'너가 행복하다니 내가 기분이 다 좋은걸? ?','happy'),(9,'내일도 오늘처럼 좋은일이 일어나면 좋겠다! ?','happy'),(10,'오늘의 특별한 순간들은\n내일의 소중한 추억들이야! ✨','happy'),(11,'행복은 나눌수록 두배가 된다는데\n더 행복해졌어? ?','happy'),(12,'오 대박! 신난다~ 넌 최고야! 멋있어! ?','happy'),(13,'긍정적인 사고는 능력을 배로 높인대!\n넌 오늘 능력이 두 배 상승했어! ✌','happy'),(14,'헐 진짜? 대박.. 내가 다 어이없다 ?','surprise'),(15,'괜찮아요? 많이 놀랐죠? ?','surprise'),(16,'워워~ 진정해\n우리 같이 눈을 감고 심호흡해 볼까? ??','anger'),(17,'산책하면서 화난 마음을 진정시켜보자. ?','anger'),(18,'절대로 다른 사람들이 너에게 틀렸다고\n말하게 내버려두지마! ?','anger'),(19,'다 너가 귀여운 탓이야! 오늘 야식 고? ?','anger'),(20,'아무일도 생기지 않게 할 순 없어.\n아무일도 없이 어떻게 살아? 재미 없잖아 ?','anger'),(21,'삶이 너를 실망시키면 어쩐다고?\n계속 나아가! ?‍♂️','anger'),(22,'천천히!괜찮아.괜찮아.\n명상을 하면 기분이 좋아질거야~ ?','anger'),(23,'매운 떡볶이 먹으면서\n스트레스 푸는거 어때? ?','anger'),(24,'너는 어떤 일도 이겨낼 수 있을거야 ?','anxiety'),(25,'그거 알아? 너는 강하고 용감해! ?','anxiety'),(26,'잘하고 있어. 토닥토닥.\n너 자신을 믿고 용기를 내보자! ?','anxiety'),(27,'삶은 실수투성이야 우리는 늘 실수를 해 ?','anxiety'),(28,'너무 힘들면 주변에\n도움을 요청하는건 어떨까? ?‍?‍?','anxiety'),(29,'너무 심각할 것 없어. 잘 될 거야! ?','anxiety'),(30,'인생은 속력이 아니야. 방향이야.\n너만의 속도로 가도 돼. ?‍♂️','anxiety'),(31,'너무 빨리 달리지 않아도 돼.\n마지막으로 들어왔대도, 최선을 다한 거야 ?','anxiety'),(32,'침착해. 네가 가야할 곳에만 집중해야해.\n다른 사람들은 신경쓰지 말고! ?','anxiety'),(33,'눈을 감지 말고 똑바로 봐.\n두려움의 실체는 생각과 다를 수 있어 ?','anxiety'),(34,'끔찍한 하루를 보냈구나. 내일은 다를거야 ?','disqust'),(35,'피할 수 없다면 즐기자~ ?','disqust'),(36,'넌 소중한 존재야, 사랑받을 가치가 있어 ?','sadness'),(37,'오늘 힘들었지? 울고싶을땐 울어도돼 ?','sadness'),(38,'지치고 힘들땐 내게 기대\n언제나 너의 곁에 서있을게~ ?','sadness'),(39,'슬퍼하지마 혼자가 아니야~\n기분 up 되는 일에 집중해보자! ?','sadness'),(40,'힘이 들땐 하늘을 봐!\n나는 항상 너를 응원해! ⛅','sadness'),(41,'눈물나게 아플땐 크게 한번 소리를 질러봐 ?','sadness'),(42,'살다 보면 안 좋은 날도 있지\n훌훌 털어내버리자! ?','sadness'),(43,'최고의 순간은 우연히 찾아오는 거야\n같이 기다려 보자~ ?','sadness'),(44,'저기압일땐 고기앞으로!\n행복은 멀리 있지 않아 ?','sadness');
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `challenge`
--

DROP TABLE IF EXISTS `challenge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `challenge` (
  `challenge_id` bigint NOT NULL AUTO_INCREMENT,
  `contents` varchar(100) NOT NULL,
  `count` int DEFAULT NULL,
  `point` int NOT NULL,
  PRIMARY KEY (`challenge_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenge`
--

LOCK TABLES `challenge` WRITE;
/*!40000 ALTER TABLE `challenge` DISABLE KEYS */;
INSERT INTO `challenge` VALUES (1,'주 3회 작성',3,10),(2,'주 5회 작성',5,20),(3,'주 7회 작성',7,30),(4,'연속 한달 작성',31,30),(5,'하루 작성',0,5),(6,'회원가입 이벤트',0,1000);
/*!40000 ALTER TABLE `challenge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diary`
--

DROP TABLE IF EXISTS `diary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diary` (
  `diary_id` bigint NOT NULL AUTO_INCREMENT,
  `contents` text NOT NULL,
  `registration_date` date NOT NULL,
  `status` varchar(10) NOT NULL,
  `sticker_code` varchar(100) NOT NULL,
  `weather` varchar(10) NOT NULL,
  `answer_id` bigint DEFAULT NULL,
  `friend_id` bigint NOT NULL,
  `user_id` varchar(36) NOT NULL,
  PRIMARY KEY (`diary_id`),
  KEY `FKo5vytj0p1gj1cuasmv5of1uvm` (`answer_id`),
  KEY `FKabq190vjhs3h3ef53xdajoxyx` (`friend_id`),
  KEY `FKf0xms46ulxc36096k9gg6j9ip` (`user_id`),
  CONSTRAINT `FKabq190vjhs3h3ef53xdajoxyx` FOREIGN KEY (`friend_id`) REFERENCES `friend` (`friend_id`),
  CONSTRAINT `FKf0xms46ulxc36096k9gg6j9ip` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKo5vytj0p1gj1cuasmv5of1uvm` FOREIGN KEY (`answer_id`) REFERENCES `answer` (`answer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=159 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diary`
--

LOCK TABLES `diary` WRITE;
/*!40000 ALTER TABLE `diary` DISABLE KEYS */;
INSERT INTO `diary` VALUES (5,'직장에서 막내라는 이유로 나에게만 온갖 심부름을 시켜. 일도 많은 데 정말 분하고 섭섭해. 직장 사람들과 솔직하게 이야기해보고 싶어. 일하는 데에 방해된다고.','2023-04-03','V','angry','Clear',22,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(6,'생일 하루 전날 23번의 생일을 보냈지만 여전히 특별한 내 생일. 비록 타지에 있어 가족들이나 친구들과 함께 보낼 수 없지만. 네가 태어나 지나온 모든 하루 중에 가장 멋진 선물 같은 하루가 되기를.','2023-04-02','V','party','Clear',9,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(7,'외할머니 댁에서 김장 김치를 가지고 집에 오니 택배가 와있었다. 늦게 올까봐 전주집으로 시킨 롱부츠. 어제 구매란 가죽 치마랑 입으니 찰떡. 가죽 치마에 롱부츠를 신는 날이 올 줄 이야. 유행은 정말 돌고 도나 보다.','2023-04-01','V','love','Clear',7,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(8,'아까 팀플때문에 진짜 진짜 화났다. 자료 조사를 해오기로 한 사람들이 블로그에서 긁어 온 글들 다듬지고 않고 출처도 없이 가져오고, 약속 시간에 다들 오지도 않았다. 맨날 나만 시켜 먹으려고 하는 거 다 티난다. 완전 싫다.','2023-03-31','V','aversion','Clear',21,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(10,'직장에서 막내라는 이유로 나에게만 온갖 심부름을 시켜. 일도 많은 데 정말 분하고 섭섭해. 직장 사람들과 솔직하게 이야기해보고 싶어. 일하는 데에 방해된다고.','2023-04-03','V','angry','Clear',17,1,'732e835e-bd8f-43d0-8d75-be1f8a61aab3'),(11,'아까 팀플때문에 진짜 진짜 화났다. 자료 조사를 해오기로 한 사람들이 블로그에서 긁어 온 글들 다듬지고 않고 출처도 없이 가져오고, 약속 시간에 다들 오지도 않았다. 맨날 나만 시켜 먹으려고 하는 거 다 티난다. 완전 싫다.','2023-04-03','V','aversion','Clear',21,1,'a8b201a2-4e98-4a46-8d57-8182ea992746'),(12,'아까 팀플때문에 진짜 진짜 화났다. 자료 조사를 해오기로 한 사람들이 블로그에서 긁어 온 글들 다듬지고 않고 출처도 없이 가져오고, 약속 시간에 다들 오지도 않았다. 맨날 나만 시켜 먹으려고 하는 거 다 티난다. 완전 싫다.','2022-04-03','V','aversion','Clear',23,1,'a8b201a2-4e98-4a46-8d57-8182ea992746'),(13,'생일 하루 전날 23번의 생일을 보냈지만 여전히 특별한 내 생일. 비록 타지에 있어 가족들이나 친구들과 함께 보낼 수 없지만. 네가 태어나 지나온 모든 하루 중에 가장 멋진 선물 같은 하루가 되기를.','2023-04-02','V','love','Clear',9,1,'a8b201a2-4e98-4a46-8d57-8182ea992746'),(14,'어라라.벌써 4월이다. 이번 달도 화이팅하자. 4월에 벚꽃구경도 가고 피크닉도 가야지. 벌써부터 설렌다.','2023-04-01','V','love','Clear',11,1,'a8b201a2-4e98-4a46-8d57-8182ea992746'),(34,'2번째 스크립트입니다.\n2번째 스크립트입니다.\n2번째 스크립트입니다.','2023-04-04','V','empty','Clouds',22,1,'732e835e-bd8f-43d0-8d75-be1f8a61aab3'),(35,'어라라.벌써 4월이다. 이번 달도 화이팅하자. 4월에 벚꽃구경도 가고 피크닉도 가야지. 벌써부터 설렌다.','2022-04-04','D','love','Clear',9,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(36,'어라라.벌써 4월이다.\n 이번 달도 화이팅하자.\n 4월에 벚꽃구경도 가고 피크닉도 가야지. 벌써부터 설렌다.','2023-04-05','V','love','Clear',10,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(57,'요즘 코로나 바이러스때문에 세상이 시끄럽다. 그래서 강제 집순이 생활중이다. 마스크 잘쓰고 손도 잘 씻는 어른이가 되자.','2023-03-30','V','love','Clear',32,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(58,'오늘은 에러가 너무 많이 나왔다. 하지만 3시간 노력해서 모든 에러를 고쳤다. 나는 천재인게 분명하다. 캬캬캬캬캬.','2023-03-29','V','love','Clear',12,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(59,'다이어트 중인데 언니가 옆에서 컵라면을 먹었다. 진짜 죽여버리고 싶다. 비 오는 날 한강으로 밀어버리면 한 번에 죽일 수 있지 않을까?','2023-03-28','V','angry','Clear',22,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(60,'비가 와서 옷이 젖었다. 우산이 없는데 집에 어떻게 가지?','2023-03-27','V','sad','Clear',42,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(61,'바퀴보다 께끗한 사람있으면 나와보라그래. 5억주면 바퀴벌레 먹는다.','2023-03-26','V','aversion','Clear',21,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(62,'노트북은 충천기로 충전해야 한다. 현재 내 노트북 배터리는 100% 완충상태.','2023-03-25','V','aversion','Clear',13,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(63,'도토리가 문을 도로록, 드르륵, 두루룩 열었는가? 드로록, 도루륵 두르룩 열었는가?','2023-03-24','V','travel','Clear',2,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(64,'월요일까지 지원서 마감이다. 주말에 얼렁 써야지.','2023-03-23','V','study','Clear',38,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(65,'시간이 흘러 봄이 온다. 난 여름은 싫다. 겨울은 좋다.','2023-03-22','V','nice','Clear',38,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(66,'오늘은 발표날이다. 너무 떨리지만 우리 서비스가 사람들에게 소개되는 자리여서 기대되는 날이기도 한다. 우리의 노력이 잘 보이게 발표를 잘해봐야겠다. 화이팅.','2023-03-21','V','nice','Clear',9,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(67,'오늘은 발표날이다. 너무 떨리지만 우리 서비스가 사람들에게 소개되는 자리여서 기대되는 날이기도 한다. 우리의 노력이 잘 보이게 발표를 잘해봐야겠다. 화이팅.','2023-04-04','V','nice','Clear',7,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(68,' 오늘의 일기 엑시오스를 끝났다\n\n','2023-04-05','V','nice','Clouds',1,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(69,' 제발 됐으면 좋겠는데.. 오늘 배포해서 그러는데 지금 날씨는 구름이고 아침에 비 왔으니까 비 온 걸로 바꾸고.. 이거 글 수정하니까 이미지 바뀌네...\n\n 두 번째 대화도 되는지 한번 확인해볼게\n\n','2023-04-05','D','music','Rain',16,1,'25c2c00d-56ed-45fb-9738-5118783127a0'),(70,'힘든 일... 힘든 일 있어서 공부가 안 되고 머리랑 배에도 아프고 엄마가 자꾸 귀찮게 해서 밥도 안주고 힘들었어 공부를 못했어\n\n\n 이런 날도 있는 거니까 라고 유연하게 생각하기로했어! 그리고 노력 중이야 끝\n\n','2023-04-05','D','empty','Clouds',43,1,'25c2c00d-56ed-45fb-9738-5118783127a0'),(71,' 오늘 배포도 끝나고 이제 서비스 얼추 마무리 돼서 구글이랑 네이버에 사이트 등록하고 검색 인진 최적화해서 잘 마무리 한 것 같아\n\n\n 내일은 발표 준비해야 돼서 오늘이 아마 내가 개발에 참여하는 마지막일 것 같은데 미처 발견 못했던 에러들이나 아니면 좀 더 수정하면 좋을 것 같은 것들 빠르게 수정해보려고 하고 있어 근데 100% 너무 잘 돼서 진짜 행복하다\n\n\n 그리고 자율 팀원들 이제 다 구해줬는데 오늘 가위바위보 져가지고 얼떨결에 팀장이 됐는데 한 번 팀 잘 이끌고 같이 공부하면서 좋은 결과 있었으면 좋겠다\n\n','2023-04-05','D','empty','Snow',4,1,'25c2c00d-56ed-45fb-9738-5118783127a0'),(72,' 끝\n\n','2023-04-05','D','empty','Clouds',1,1,'25c2c00d-56ed-45fb-9738-5118783127a0'),(73,'','2023-04-05','D','empty','Clouds',2,1,'25c2c00d-56ed-45fb-9738-5118783127a0'),(74,' MBC 뉴스 김수근입니다\n\n','2023-04-05','D','sad','Clouds',2,1,'25c2c00d-56ed-45fb-9738-5118783127a0'),(75,' 끝\n 수정해도 이미지 안 바뀌길...\n','2023-04-05','D','love','Clouds',1,1,'25c2c00d-56ed-45fb-9738-5118783127a0'),(76,'너무 axios 많이해서 이상하게 보려나?\n\n\n','2023-04-05','D','party','Clouds',3,1,'25c2c00d-56ed-45fb-9738-5118783127a0'),(77,' 무슨 발표 하루 전 날 추가 기능을 하고 있을까 나는\n\n\n 지금 발생하는 에러들 어느정도 고쳤는데 수정할 때 수정 스크립트를 전부 다 지우게 될 경우 로딩중이 뜨면서 수정이 더 이상 진행되지 않아.\n\n','2023-04-05','D','sad','Clouds',20,3,'25c2c00d-56ed-45fb-9738-5118783127a0'),(78,' 아\n\nd','2023-04-05','D','love','Clouds',16,3,'25c2c00d-56ed-45fb-9738-5118783127a0'),(79,' 결국, 슈트의 길이를 하나로 만들어서 에러를 해결했다. 신나면서 너무 밤 늦게라, 대본은 언제 쓰고, PPT는 언제 만들지 너무 힘들다. 시연은 누가 날 도와주려나.\n\n','2023-04-05','D','smile','Clouds',41,3,'25c2c00d-56ed-45fb-9738-5118783127a0'),(80,' 수정했당ㅋㅋ\n\n 안녕안녕안녕 나는 개발진스 나는야 개발진스 우하하하\n\n','2023-04-05','D','nice','Clouds',13,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(82,'오늘 마지막 에러 다 잡아보고 UX 개선하고 내일 발표다! 발표를 잘하려면 대본을 잘 적기 보다는 시연에서 예상 못한 버그가 안 나오는게 중요할 것 같다! 그래서 대본도 안 적고 지금 에러만 고치고 있다.\n\n','2023-04-06','D','love','Clouds',6,3,'25c2c00d-56ed-45fb-9738-5118783127a0'),(87,' 감사합니다.\n\n','2023-04-06','D','camera','Clouds',2,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(89,' MBC 뉴스 김수근입니다.\n\n','2023-04-06','D','party','Clear',1,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(90,'아닌데요 ?\n\n','2023-04-06','D','camera','Clouds',1,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(92,' 네.\n\n','2023-04-06','D','nice','Clear',3,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(93,' 안녕.\n\n','2023-04-06','D','angry','Clear',2,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(94,' 안녕\n\n','2023-04-06','D','empty','Clear',3,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(95,' MBC 뉴스 김수근입니다.\n\n','2023-04-06','D','camera','Clouds',2,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(96,' 감사합니다.\n\n','2023-04-06','D','nice','Clear',1,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(98,'오랜만에 사진첩을 봤어. 팀원들과 화합을 표현한 인간지네 사진이었는데 벌써 7주 전이라니.. 내일 최종발표인데 떨지않고 잘 할 수 있을까? 마지막까지 화이팅!!\n','2023-04-06','D','party','Clouds',11,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(99,' 그치? 이거 맛있다 이거 할 때 이거 안 했거든 지금 뭐 먹었어? 커피 아이스크림 같은데 너무 맛있어 목소리만 들었어 맛있지? 커피 아이스크림 백조원인 줄 알았어 백조원? 커피 아이스크림? 커피 아이스크림 먹어볼래? 이거 지카페이 오늘 뭐 먹고 누가 나왔냐? 응?\n\n','2023-04-06','D','nice','Clouds',12,1,'732e835e-bd8f-43d0-8d75-be1f8a61aab3'),(100,' 너무 떨리지만 모두 잘할 수 있을 거야. 화이팅!\n\n','2023-04-06','D','love','Clouds',7,3,'25c2c00d-56ed-45fb-9738-5118783127a0'),(101,' 내 목소리는 잘 녹음이 된거야? 내일 발표 때 녹음 안 되면 난 오늘 밤도 새고 대본도 작성하고 시연도 준비해야 하고 내일 회식은 갈 수 있을까?\n\n','2023-04-06','D','angry','Clouds',29,3,'25c2c00d-56ed-45fb-9738-5118783127a0'),(102,' 내가 생각했을 때 리덕스에 제대로 파일이 저장되지 않았는데 그거를 엑시오스에 바디에 넣어서 보낸 것 같아 지금 리덕스를 한번 보고 싶은데\n\n','2023-04-06','D','aversion','Clouds',17,3,'25c2c00d-56ed-45fb-9738-5118783127a0'),(103,'오늘은  최종발표날이야. \n화이팅 하자\n\n','2023-04-06','D','aversion','Clouds',5,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(105,' 8 9 10\n\n\n 녹음도 제대로 안 되고 이미지 저장도 제대로 안 되고 오늘 나는 뭘 해야 되나 일시정지는 제대로 될까? 종료하자. 모든 오류는 개뿔 모든 서비스가 동작하는게 오류다\n\n','2023-04-06','D','empty','Clouds',37,3,'25c2c00d-56ed-45fb-9738-5118783127a0'),(106,'오늘은 최종 발표날이야. 떨리지만 모두 잘 할 수 있을 거야. 모두 화이팅 하자.\n\n','2023-04-06','D','party','Clouds',8,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(107,' 5초부터 시작해볼게 지금 다른 팀들 통화하고 있는데 나도 통화하는 것 같고 캐릭터는 다람쥐에서 고양이로 바꿨어 그리고 원래 지금 날씨는 구름인데 아까 비가 와가지고 비 오는 걸로 바꿨고 이미지 한번 저장해보려고 녹음 잘 됐으면 좋겠다\n\n','2023-04-06','D','movie','Rain',23,3,'25c2c00d-56ed-45fb-9738-5118783127a0'),(108,'예지가 Merge하고 화장실 갔는데 다녀오는 동안 Error 5개는 찾아야겠다. 일단 1개 발견했다.\n\n','2023-04-06','D','love','Clouds',3,3,'25c2c00d-56ed-45fb-9738-5118783127a0'),(109,' 예지가 PK 바꾸고 나도 상점 가서 캐릭터 바꿔서 이제 Dispatch가 제대로 이루어졌다면 일기도 제대로 작성되겠지?\n\n','2023-04-06','D','aversion','Clear',10,2,'25c2c00d-56ed-45fb-9738-5118783127a0'),(110,' 내 말이 그래도 디테일하게 적어놨으니까 언제 클릭해야 될지 막 이런 거 적혀 있으니까. 연습 3번? 그치. 근데 이거 메인에 다 시연이 형이 시현이 스크래치 중에 있는 거 아니야? 맞아 아직.. 남은지 안 돼 있어. 하고 있어. 하다 보니까 에러가 계속 나와가지고 저거 시간이 없어\n\n','2023-04-06','D','aversion','Clouds',20,2,'25c2c00d-56ed-45fb-9738-5118783127a0'),(111,' 안녕하세요.\n\n','2023-04-06','D','love','Snow',3,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(112,' 안녕하세요.\n\n','2023-04-06','D','nice','Rain',2,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(113,' 오늘은 마지막 발표날이었어 너무 떨렸지만 모두 잘 할 수 있을 거야. 모두 화이팅!!\n\n','2023-04-06','D','party','Clouds',7,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(114,' 오늘은 마지막 발표하는 날이었어요 너무 떨렸지만 모두 잘할 수 있을 거야. 모두 화이팅!\n\n','2023-04-06','D','sad','Clouds',10,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(115,'일년 뒤에 내가 너무 궁금하다. 나는 일년 뒤에 무엇을 하고있을까? 무엇을 하든지 난 잘할거야!','2022-04-06','V','nice','Clear',11,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(116,' 오늘은 최종적으로 발표하는 날이야 너무 떨리지만 잘 할 수 있을 거야. 모두 화이팅!!\n\n','2023-04-06','D','love','Clouds',5,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(117,' 오늘은 마지막으로 발표하는 날이야 너무 떨리지만 잘할 수 있을 거야 모두 화이팅!!\n\n','2023-04-06','D','party','Clear',10,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(118,' 오늘은 최종적으로 발표하는 날이야 너무 떨리지만 잘 할 수 있을 거야 모두 화이팅!!\n\n','2023-04-06','D','smile','Clear',10,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(119,'','2023-04-06','D','smile','Rain',1,2,'25c2c00d-56ed-45fb-9738-5118783127a0'),(121,' 시연 때 제대로 안되면 소연이가 기절 시켜달라는데.. 나부터 기절하고 싶다. 너무 힘드네...\n\n','2023-04-06','D','love','Rain',21,3,'25c2c00d-56ed-45fb-9738-5118783127a0'),(122,' 우선 일기를 �성할 수 있는 is true를 false로 바꿔서 오늘 일기를 작성하지 않았다 즉 일기를 작성할 수 있다고 변할 수 있도록 만들어줘 근데 왜 제대로 동작이 안하고 있을까\n\n','2023-04-06','D','love','Rain',16,1,'25c2c00d-56ed-45fb-9738-5118783127a0'),(123,' 내일 시연이 제대로 될까?\n\n','2023-04-06','D','sad','Rain',1,1,'25c2c00d-56ed-45fb-9738-5118783127a0'),(124,' 모두 7주간 프로젝트 개발하느라 수고 많았고 오늘 푹 쉬면서 행복한 시간 보냈으면 좋겠어!\n\n','2023-04-06','D','party','Rain',12,1,'25c2c00d-56ed-45fb-9738-5118783127a0'),(125,' 오늘 비가 와서 그런거 같은데? 아니구나 그냥 선택하는거 같애 근데 되게 잘한거 같은데? 잘했다 잘했는데?\n\n','2023-04-06','V','camera','Clear',1,1,'3afcaf48-86b3-4595-b2bb-480b1f599f55'),(126,' 나는 지금 피곤해\n\n','2023-04-06','V','sad','Rain',44,2,'0880c821-3545-49f5-b80a-1631ffa5ab5c'),(127,' 잘 자요 오늘 하루도 고생많았어요.\n\n','2023-04-06','V','love','Clear',1,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(128,' 모두 7주간 프로젝트 개발하느라 수고 많았고 오늘 푹 쉬면서 행복한 시간 보냈으면 좋겠어 모두 화이팅!!\n\n','2023-04-06','V','party','Clear',4,1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(129,'졸립다. 그렇지만 내일 발표를 위해 조금 더 힘내봐야지. 우리 팀원들도 같이 고생하니깐 나도 열심히 해야지.','2023-03-20','V','nice','Clear',44,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(130,' 끝\n\n','2023-04-06','D','camera','Rain',3,3,'732e835e-bd8f-43d0-8d75-be1f8a61aab3'),(131,'블랙핑크. 아에아에. 착한 얼굴에 그렇지 못한 태도. 블랙하면 핑크.','2023-03-19','V','nice','Clear',16,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(132,'지금 내가 걸어가는 거리. 블랙 핑크 사거리. 두번 생각해. 쉽게 웃어주는 건 날 위한 거야.','2023-03-18','V','nice','Clear',20,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(133,'어라라. 벌써 4월이다. 이번 달도 화이팅하자. 4월에 벚꽃구경도 가고 피크닉도 가야지. 설렌다.','2023-03-17','V','nice','Clear',6,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(134,'프로젝트가 빨리 끝났으면 좋겠다. 피곤하다. 끝나고 잠을 충분히 자야지. 마지막까지 힘내야지.','2023-03-16','V','nice','Clear',20,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(135,'다들 잠 못 드는 밤이다. 내일은 푹 자야지. 커피 호로록.','2023-03-15','V','nice','Clear',38,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(136,' 안녕하세요. 3 팀 발표를 맡은 임성빈입니다. 저희 프로젝트는 음성으로 일기를 기록하는 멘탈 케어 서비스, 하루 팔레트입니다. 발표에 앞서 UCC 먼저 시청하도록 하겠습니다.\n\n\n UCC를 통해 저희 프로젝트에 대하여 간단히 소개해 드렸습니다. 그렇다면 하루 팔레트의 개발 의도에 대해 말씀해 드리도록 하겠습니다. 다들 프로젝트 하면서 즐거운 일도 많았지만 스트레스 받는 일 또한 많으셨을 거라 생각합니다. 3팀에서 조사한 설문에 따르면 프로젝트 개발 기간 동안 무려 100%가 한 번쯤 스트레스를 받아보았다고 합니다.\n\n\n 다행히 말이나 글쓰기로 생각과 감정을 내뱉게 되면 스트레스를 줄일 수 있다는 미국 듀크대 교수진의 연구결과가 있습니다.\n\n\n 그래서 일기를 작성하면서 생각과 감정을 내뱉어 스트레스를 줄여 멘탈 관리를 하면 어떨까 생각했습니다. 하지만 많은 사람들에게 매일 일기를 작성하는 것은 꽤 귀찮은 일입니다. 다들 어린 시절 일기를 작성해본 경험이 있을 거니 이 점은 잘 알고 있을 거라 생각합니다. 그래서 음성을 통해 쉽게 일기를 작성하면 좋을 거라고 생각을 해서 하루 팔레트를 개발하게 되었습니다. 귀여운 캐릭터와 대화하는 형식으로 일기를 작성한다면 누군가에게 말하지 못한 깊은 속마음까지 얘기할 수 있을 것이라 생각했습니다. 그렇다면 함께 서비스 시연하러 가보실까요?\n\n','2023-04-06','V','love','Clouds',8,1,'25c2c00d-56ed-45fb-9738-5118783127a0'),(137,' 오늘은 발표 준비를 했어. 컨설턴트님 앞에서 말을 했는데 말이 너무 빠르다고 조금만 느리게 하라고 했어.\n\n','2023-04-06','V','beer','Clear',16,2,'732e835e-bd8f-43d0-8d75-be1f8a61aab3'),(138,'드림. 나는 네가 꼭 내것 같은데. 다시 꾸지 못하는 꿈. 그게 바로 너.','2023-03-14','V','nice','Clear',11,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(139,'내가 전부였던 너인걸. 너도 내맘과 같다면 그렇다고 해줘. 우리가 좋았던 그때로 돌아가고 싶어.','2023-03-13','V','nice','Clear',42,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(140,'오늘 내 친한 친구에게 안좋은 일이 생겨서 내가 다 속상하고 화가 났다. 이걸 올바르게 해결하고 싶다. 그 친구의 마음을 완전히 알 수 없음에 스스로가 한심하게 느껴졌지만 힘이 된다는 말에 다행스러웠다.','2023-03-12','V','nice','Clear',18,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(141,'다음주에 생일인데 이번 생일에는 어떤 일이 벌어질지 궁금하다. 기대하면 실망이 크니깐 너무 기대는 안해야겠다.','2023-03-11','V','nice','Clear',12,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(142,'오늘 핸드폰 액정이 깨진 걸 확인했다. 다행스럽게 크게는 안깨져서 괜찮은 것 같다. 취업하면 핸드폰 바꿔야지.','2023-03-10','V','nice','Clear',12,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(143,'눈이 조금 건조하네. 요새 모니터를 많이 봐서 그런 것 같다. 손목도 갑자기 아파서 당황스럽다.','2023-03-09','V','nice','Clear',14,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(144,'다시는 널 볼 수 없을 줄 알았는데. 흐르는 시간 속에서 너와 내 시간은 끝난 줄 알았어. 지난 여름 바닷가. 너와 단 둘이. 네가 있었기에 내가 더욱 더 빛나.','2023-03-08','V','nice','Clear',40,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(145,'지난 여름 바닷가에서 너를 만나 별이 되었다고. 말하고 싶어.','2023-03-07','V','nice','Clear',41,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(146,'이제부터 내 시간이야. 너와 함께. 꿈을 그려나가고 싶어. 같이 해줘.','2023-03-06','V','nice','Clear',41,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(147,'무더운 밤 잠은 오지않고, 웃고 있는 우리. 밤하늘의 별. 한 여름밤의 꿈.','2023-03-05','V','nice','Clear',42,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(148,'내일이면 프로젝트가 완료된다. 성장한 것 같아 기분이 좋다. 앞으로도 성장해나가야지.','2023-03-04','V','nice','Clear',13,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(149,'이제 자야겠다. 오늘 고생했어. 내 자신아. 하루도 잘자.','2023-03-03','V','nice','Clear',36,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(150,'오늘 너무 즐거웠어. 너무 반가웠어. 행복했어. 잘자. 바랄게 뭐 더 있어.','2023-03-02','V','nice','Clear',8,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(157,'오늘 마지막 에러 다 잡아보고 UX 개선하고 내일 발표다! 발표를 잘하려면 대본을 잘 적기 보다는 시연에서 예상 못한 버그가 안 나오는게 중요할 것 같다! 그래서 대본도 안 적고 지금 에러만 고치고 있다.','2023-03-01','V','nice','Clear',12,1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(158,' 안녕 첫번째야\n\n\n 응, 두번째 얘기야\n\n','2023-04-07','V','nice','Clear',3,2,'a8b201a2-4e98-4a46-8d57-8182ea992746');
/*!40000 ALTER TABLE `diary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emotion`
--

DROP TABLE IF EXISTS `emotion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emotion` (
  `emotion_id` bigint NOT NULL AUTO_INCREMENT,
  `anger` int NOT NULL,
  `anxiety` int NOT NULL,
  `disgust` int NOT NULL,
  `happy` int NOT NULL,
  `neutral` int NOT NULL,
  `sadness` int NOT NULL,
  `surprise` int NOT NULL,
  `diary_id` bigint NOT NULL,
  `user_id` varchar(36) NOT NULL,
  PRIMARY KEY (`emotion_id`),
  KEY `FKk6nolvigo5qnkkngl63rd3r6e` (`diary_id`),
  KEY `FKsi20n9shb9iik3bw13yb4y2py` (`user_id`),
  CONSTRAINT `FKk6nolvigo5qnkkngl63rd3r6e` FOREIGN KEY (`diary_id`) REFERENCES `diary` (`diary_id`),
  CONSTRAINT `FKsi20n9shb9iik3bw13yb4y2py` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emotion`
--

LOCK TABLES `emotion` WRITE;
/*!40000 ALTER TABLE `emotion` DISABLE KEYS */;
INSERT INTO `emotion` VALUES (1,88,0,0,0,0,6,3,5,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(2,0,0,0,97,0,0,0,6,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(3,0,0,0,97,0,0,0,7,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(4,87,1,0,0,0,8,1,8,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(5,88,0,0,0,0,6,3,10,'732e835e-bd8f-43d0-8d75-be1f8a61aab3'),(6,87,1,0,0,0,8,1,11,'a8b201a2-4e98-4a46-8d57-8182ea992746'),(7,87,1,0,0,0,8,1,12,'a8b201a2-4e98-4a46-8d57-8182ea992746'),(8,0,0,0,97,0,0,0,13,'a8b201a2-4e98-4a46-8d57-8182ea992746'),(9,0,0,0,96,2,0,0,14,'a8b201a2-4e98-4a46-8d57-8182ea992746'),(23,44,1,2,1,41,7,0,34,'732e835e-bd8f-43d0-8d75-be1f8a61aab3'),(24,0,0,0,96,2,0,0,35,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(25,0,0,0,96,2,0,0,36,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(29,28,38,0,0,0,22,9,57,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(30,0,0,0,98,0,0,0,58,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(31,90,0,0,0,0,5,2,59,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(32,4,1,1,0,13,78,1,60,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(33,67,0,4,2,17,5,1,61,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(34,0,0,0,94,3,0,0,62,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(35,15,1,2,4,53,10,12,63,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(36,6,0,0,18,11,62,0,64,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(37,2,0,0,15,2,78,0,65,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(38,1,5,0,91,0,0,0,66,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(39,1,5,0,91,0,0,0,67,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(40,2,0,0,31,56,8,0,68,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(41,52,16,0,3,4,14,8,69,'25c2c00d-56ed-45fb-9738-5118783127a0'),(42,14,29,0,1,0,50,3,70,'25c2c00d-56ed-45fb-9738-5118783127a0'),(43,0,0,0,99,0,0,0,71,'25c2c00d-56ed-45fb-9738-5118783127a0'),(44,2,0,0,7,84,4,0,72,'25c2c00d-56ed-45fb-9738-5118783127a0'),(45,4,0,1,2,81,9,0,73,'25c2c00d-56ed-45fb-9738-5118783127a0'),(46,15,0,2,2,68,8,1,74,'25c2c00d-56ed-45fb-9738-5118783127a0'),(47,12,0,5,0,64,14,1,75,'25c2c00d-56ed-45fb-9738-5118783127a0'),(48,7,0,0,1,77,6,6,76,'25c2c00d-56ed-45fb-9738-5118783127a0'),(49,49,16,0,15,3,13,2,77,'25c2c00d-56ed-45fb-9738-5118783127a0'),(50,50,0,13,0,26,6,0,78,'25c2c00d-56ed-45fb-9738-5118783127a0'),(51,7,13,0,15,1,59,2,79,'25c2c00d-56ed-45fb-9738-5118783127a0'),(52,4,0,0,77,13,1,1,80,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(54,7,9,0,79,0,1,1,82,'25c2c00d-56ed-45fb-9738-5118783127a0'),(59,0,0,0,33,61,4,0,87,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(61,9,0,2,2,76,7,1,89,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(62,1,0,0,19,49,1,26,90,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(64,1,0,0,4,86,5,0,92,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(65,0,0,0,11,83,3,0,93,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(66,1,0,0,12,82,2,0,94,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(67,9,0,2,2,76,7,1,95,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(68,0,0,0,33,61,4,0,96,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(70,0,0,0,98,0,0,0,98,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(71,6,0,0,62,11,1,16,99,'732e835e-bd8f-43d0-8d75-be1f8a61aab3'),(72,0,1,0,76,20,0,0,100,'25c2c00d-56ed-45fb-9738-5118783127a0'),(73,7,82,0,0,0,5,4,101,'25c2c00d-56ed-45fb-9738-5118783127a0'),(74,47,9,0,4,1,29,7,102,'25c2c00d-56ed-45fb-9738-5118783127a0'),(75,0,0,0,64,28,6,0,103,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(77,30,31,0,0,0,33,4,105,'25c2c00d-56ed-45fb-9738-5118783127a0'),(78,0,0,0,98,0,0,0,106,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(79,27,10,0,26,14,11,8,107,'25c2c00d-56ed-45fb-9738-5118783127a0'),(80,20,0,13,2,40,19,2,108,'25c2c00d-56ed-45fb-9738-5118783127a0'),(81,10,1,0,42,30,13,1,109,'25c2c00d-56ed-45fb-9738-5118783127a0'),(82,53,13,0,8,4,12,7,110,'25c2c00d-56ed-45fb-9738-5118783127a0'),(83,0,0,0,27,67,2,0,111,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(84,0,0,0,27,67,2,0,112,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(85,0,0,0,98,0,0,0,113,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(86,0,0,0,98,0,0,0,114,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(87,3,3,0,90,0,1,1,115,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(88,0,0,0,98,0,0,0,116,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(89,0,0,0,98,0,0,0,117,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(90,0,0,0,98,0,0,0,118,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(91,4,0,1,2,81,9,0,119,'25c2c00d-56ed-45fb-9738-5118783127a0'),(93,63,10,0,0,0,24,1,121,'25c2c00d-56ed-45fb-9738-5118783127a0'),(94,57,7,0,3,5,19,5,122,'25c2c00d-56ed-45fb-9738-5118783127a0'),(95,3,25,0,7,55,3,4,123,'25c2c00d-56ed-45fb-9738-5118783127a0'),(96,0,0,0,86,10,2,0,124,'25c2c00d-56ed-45fb-9738-5118783127a0'),(97,1,0,0,37,45,1,12,125,'3afcaf48-86b3-4595-b2bb-480b1f599f55'),(98,2,0,0,0,42,53,0,126,'0880c821-3545-49f5-b80a-1631ffa5ab5c'),(99,0,0,0,26,55,17,0,127,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(100,0,0,0,94,4,1,0,128,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(101,2,0,0,30,19,47,0,129,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(102,2,0,0,7,84,4,0,130,'732e835e-bd8f-43d0-8d75-be1f8a61aab3'),(103,74,0,1,0,8,14,0,131,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(104,54,12,0,4,2,23,2,132,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(105,0,0,0,95,3,0,0,133,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(106,70,13,0,8,0,4,0,134,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(107,1,0,0,0,0,96,0,135,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(108,19,28,0,38,0,8,3,136,'25c2c00d-56ed-45fb-9738-5118783127a0'),(109,46,25,0,6,0,15,6,137,'732e835e-bd8f-43d0-8d75-be1f8a61aab3'),(110,1,0,0,62,8,26,0,138,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(111,4,0,0,1,0,92,0,139,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(112,82,3,0,0,0,5,8,140,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(113,9,20,0,48,12,7,1,141,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(114,4,6,0,77,4,3,2,142,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(115,0,5,0,0,0,0,93,143,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(116,0,0,0,2,0,96,0,144,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(117,0,0,0,0,1,96,0,145,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(118,0,0,0,22,9,67,0,146,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(119,1,0,0,6,10,80,0,147,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(120,0,0,0,99,0,0,0,148,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(121,2,0,0,17,9,69,0,149,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(122,0,0,0,96,3,0,0,150,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(123,7,9,0,79,0,1,1,157,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(124,6,0,0,7,78,6,0,158,'a8b201a2-4e98-4a46-8d57-8182ea992746');
/*!40000 ALTER TABLE `emotion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file` (
  `file_id` bigint NOT NULL AUTO_INCREMENT,
  `path` varchar(255) NOT NULL,
  `diary_id` bigint NOT NULL,
  PRIMARY KEY (`file_id`),
  KEY `FK41ktjsy9whhlsilpf2g6ldq93` (`diary_id`),
  CONSTRAINT `FK41ktjsy9whhlsilpf2g6ldq93` FOREIGN KEY (`diary_id`) REFERENCES `diary` (`diary_id`)
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES (2,'https://harupalette.com/image/default/haru_light.svg',5),(3,'https://harupalette.com/image/default/haru_dark.svg',6),(4,'https://harupalette.com/image/default/haru_light.svg',7),(5,'https://harupalette.com/image/default/haru_light.svg',8),(6,'https://harupalette.com/image/default/castell.jpg',10),(7,'https://harupalette.com/image/default/haru_light.svg',11),(8,'https://harupalette.com/image/default/haru_light.svg',12),(9,'https://harupalette.com/image/default/haru_light.svg',13),(10,'https://harupalette.com/image/diary/2023-04-03-14',14),(24,'https://harupalette.com/image/default/haru_light.svg',34),(25,'https://harupalette.com/image/diary/2023-04-04-35',35),(26,'https://harupalette.com/image/diary/2023-04-04-36',36),(43,'https://harupalette.com/image/default/haru_dark.svg',57),(44,'https://harupalette.com/image/default/haru_dark.svg',58),(45,'https://harupalette.com/image/default/haru_dark.svg',59),(46,'https://harupalette.com/image/default/haru_dark.svg',60),(47,'https://harupalette.com/image/default/haru_dark.svg',61),(48,'https://harupalette.com/image/default/haru_dark.svg',62),(49,'https://harupalette.com/image/default/haru_dark.svg',63),(50,'https://harupalette.com/image/default/haru_dark.svg',64),(51,'https://harupalette.com/image/default/haru_dark.svg',65),(52,'https://harupalette.com/image/default/haru_dark.svg',66),(53,'https://harupalette.com/image/default/haru_dark.svg',67),(54,'https://harupalette.com/image/diary/2023-04-05-68',68),(57,'https://harupalette.com/image/diary/2023-04-05-71',71),(58,'https://harupalette.com/image/diary/2023-04-05-72',72),(59,'https://harupalette.com/image/diary/2023-04-05-73',73),(60,'https://harupalette.com/image/diary/2023-04-05-74',74),(61,'https://harupalette.com/image/diary/2023-04-05-75',75),(62,'https://harupalette.com/image/diary/2023-04-05-76',76),(63,'https://harupalette.com/image/diary/2023-04-05-77',77),(64,'https://harupalette.com/image/diary/2023-04-05-78',78),(65,'https://harupalette.com/image/diary/2023-04-05-79',79),(66,'https://harupalette.com/image/diary/2023-04-05-80',80),(68,'https://harupalette.com/image/diary/2023-04-06-82',82),(73,'https://harupalette.com/image/diary/2023-04-06-87',87),(75,'https://harupalette.com/image/default/haru_light.svg',89),(76,'https://harupalette.com/image/diary/2023-04-06-90',90),(78,'https://harupalette.com/image/diary/2023-04-06-92',92),(79,'https://harupalette.com/image/diary/2023-04-06-93',93),(80,'https://harupalette.com/image/diary/2023-04-06-94',94),(81,'https://harupalette.com/image/diary/2023-04-06-95',95),(82,'https://harupalette.com/image/diary/2023-04-06-96',96),(84,'https://harupalette.com/image/diary/2023-04-06-98',98),(85,'https://harupalette.com/image/diary/2023-04-06-99',99),(86,'https://harupalette.com/image/diary/2023-04-06-100',100),(87,'https://harupalette.com/image/diary/2023-04-06-101',101),(88,'https://harupalette.com/image/diary/2023-04-06-102',102),(89,'https://harupalette.com/image/default/haru_light.svg',103),(91,'https://harupalette.com/image/diary/2023-04-06-105',105),(92,'https://harupalette.com/image/diary/2023-04-06-106',106),(93,'https://harupalette.com/image/diary/2023-04-06-107',107),(94,'https://harupalette.com/image/diary/2023-04-06-108',108),(95,'https://harupalette.com/image/diary/2023-04-06-109',109),(96,'https://harupalette.com/image/default/gomi_dark.svg',110),(97,'https://harupalette.com/image/diary/2023-04-06-111',111),(98,'https://harupalette.com/image/default/haru_light.svg',112),(99,'https://harupalette.com/image/diary/2023-04-06-113',113),(100,'https://harupalette.com/image/diary/2023-04-06-114',114),(101,'https://harupalette.com/image/default/haru_light.svg',115),(102,'https://harupalette.com/image/diary/2023-04-06-116',116),(103,'https://harupalette.com/image/diary/2023-04-06-117',117),(104,'https://harupalette.com/image/diary/2023-04-06-118',118),(105,'https://harupalette.com/image/default/gomi_dark.svg',119),(107,'https://harupalette.com/image/diary/2023-04-06-121',121),(108,'',122),(109,'https://harupalette.com/image/default/haru_light.svg',123),(110,'https://harupalette.com/image/diary/2023-04-06-124',124),(111,'https://harupalette.com/image/diary/2023-04-06-125',125),(112,'https://harupalette.com/image/default/gomi_light.svg',126),(113,'https://harupalette.com/image/default/haru_light.svg',127),(114,'https://harupalette.com/image/diary/2023-04-06-128',128),(115,'https://harupalette.com/image/default/haru_lightk.svg',129),(116,'https://harupalette.com/image/diary/2023-04-06-130',130),(117,'https://harupalette.com/image/default/haru_lightk.svg',131),(118,'https://harupalette.com/image/default/haru_lightk.svg',132),(119,'https://harupalette.com/image/default/haru_lightk.svg',133),(120,'https://harupalette.com/image/default/haru_lightk.svg',134),(121,'https://harupalette.com/image/default/haru_lightk.svg',135),(122,'https://haru-palette.s3.ap-northeast-2.amazonaws.com/default/haru_light.svg',136),(123,'https://haru-palette.s3.ap-northeast-2.amazonaws.com/default/gomi_light.svg',137),(124,'https://harupalette.com/image/default/haru_lightk.svg',138),(125,'https://harupalette.com/image/default/haru_lightk.svg',139),(126,'https://harupalette.com/image/default/haru_lightk.svg',140),(127,'https://harupalette.com/image/default/haru_lightk.svg',141),(128,'https://harupalette.com/image/default/haru_lightk.svg',142),(129,'https://harupalette.com/image/default/haru_lightk.svg',143),(130,'https://harupalette.com/image/default/haru_lightk.svg',144),(131,'https://harupalette.com/image/default/haru_lightk.svg',145),(132,'https://harupalette.com/image/default/haru_lightk.svg',146),(133,'https://harupalette.com/image/default/haru_lightk.svg',147),(134,'https://harupalette.com/image/default/haru_lightk.svg',148),(135,'https://harupalette.com/image/default/haru_lightk.svg',149),(136,'https://harupalette.com/image/default/haru_lightk.svg',150),(143,'https://harupalette.com/image/default/haru_lightk.svg',157),(144,'https://haru-palette.s3.ap-northeast-2.amazonaws.com/default/gomi_light.svg',158);
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `friend`
--

DROP TABLE IF EXISTS `friend`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `friend` (
  `friend_id` bigint NOT NULL AUTO_INCREMENT,
  `contents` varchar(100) NOT NULL,
  `ename` varchar(20) NOT NULL,
  `kname` varchar(20) NOT NULL,
  `price` int NOT NULL,
  `tag` varchar(100) NOT NULL,
  PRIMARY KEY (`friend_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friend`
--

LOCK TABLES `friend` WRITE;
/*!40000 ALTER TABLE `friend` DISABLE KEYS */;
INSERT INTO `friend` VALUES (1,'안녕? 난 하루야?\n난 하루하루 기록하는 걸 좋아해\n너도 나와 같이 오늘 하루를\n기록하지않을래?','haru','하루',0,'#다정한 #진솔한 #ISFP'),(2,'안녕? 난 고미야~?항상 고민이 많은 나는\n그걸 일기에 기록하곤해\n어때? 너도 고민을 말해볼래?','gomi','고미',100,'#섬세한 #느긋한 #INFJ'),(3,'안녕? 난 토리야!?\n난 도토리를 좋아해서\n이름도 토리로 개명했어!\n난 외톨이가 아니라구! 나랑 친구할래?','tori','토리',500,'#낙천적인 #발랄한 #ESFP');
/*!40000 ALTER TABLE `friend` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `point`
--

DROP TABLE IF EXISTS `point`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `point` (
  `point_id` bigint NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `point` int NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `type` varchar(100) DEFAULT NULL,
  `prev_point` int DEFAULT NULL,
  PRIMARY KEY (`point_id`),
  KEY `FKh4qxmn9mig6kith0ish2r67ka` (`user_id`),
  CONSTRAINT `FKh4qxmn9mig6kith0ish2r67ka` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `point`
--

LOCK TABLES `point` WRITE;
/*!40000 ALTER TABLE `point` DISABLE KEYS */;
INSERT INTO `point` VALUES (1,'회원가입 이벤트','2023-04-01 15:07:48',1000,'8096b53c-cf37-4c6b-8f58-6cf20363b25e','sign',490),(6,'하루 작성','2023-04-01 15:17:55',5,'8096b53c-cf37-4c6b-8f58-6cf20363b25e','goal',1490),(7,'하루 작성','2023-04-02 18:00:00',5,'8096b53c-cf37-4c6b-8f58-6cf20363b25e','goal',1495),(8,'하루 작성','2023-04-03 15:17:55',5,'8096b53c-cf37-4c6b-8f58-6cf20363b25e','goal',1500),(9,'회원가입 이벤트','2023-04-03 17:26:12',1000,'732e835e-bd8f-43d0-8d75-be1f8a61aab3','sign',0),(11,'회원가입 이벤트','2023-04-01 23:42:32',1000,'a8b201a2-4e98-4a46-8d57-8182ea992746','sign',0),(13,'회원가입 이벤트','2023-04-04 00:20:54',1000,'25c2c00d-56ed-45fb-9738-5118783127a0','sign',0),(17,'회원가입 이벤트','2023-04-04 10:14:29',1000,'3b1a661a-d187-4653-bf52-b7da1ae66fbb','sign',0),(31,'하루 작성','2023-04-04 15:19:57',5,'8096b53c-cf37-4c6b-8f58-6cf20363b25e','goal',1505),(32,'주 3회 작성','2023-04-03 15:27:07',10,'8096b53c-cf37-4c6b-8f58-6cf20363b25e','goal',1510),(33,'하루 작성','2023-04-05 15:27:07',5,'8096b53c-cf37-4c6b-8f58-6cf20363b25e','goal',1520),(49,'하루 작성','2023-04-06 15:44:05',5,'8096b53c-cf37-4c6b-8f58-6cf20363b25e','goal',1525),(66,'회원가입 이벤트','2023-04-05 22:25:05',1000,'024976b0-a26c-4fb0-a55b-f93b37708481','sign',0),(67,'회원가입 이벤트','2023-04-06 01:46:09',1000,'e2658250-1647-44ea-bc9a-c65b16dbd039','sign',0),(68,'회원가입 이벤트','2023-04-06 09:07:34',1000,'9b104cd5-1aba-4413-80c4-a5a3c64b188f','sign',0),(79,'회원가입 이벤트','2023-04-06 10:37:14',1000,'0880c821-3545-49f5-b80a-1631ffa5ab5c','sign',0),(82,'회원가입 이벤트','2023-04-06 11:55:10',1000,'84faeb79-78f6-4e47-a974-5848f4a2602e','sign',0),(83,'회원가입 이벤트','2023-04-06 12:20:46',1000,'e5012ffc-3131-42a6-8aec-976925e2a86c','sign',0),(87,'회원가입 이벤트','2023-04-06 13:54:12',1000,'78b4acdf-d0e1-4f7b-aff4-474e153de101','sign',0),(94,'회원가입 이벤트','2023-04-06 23:20:26',1000,'3afcaf48-86b3-4595-b2bb-480b1f599f55','sign',0),(98,'하루 작성','2023-04-06 23:30:26',5,'3afcaf48-86b3-4595-b2bb-480b1f599f55','goal',1000),(100,'고미 친구비','2023-04-07 04:45:04',-100,'a8b201a2-4e98-4a46-8d57-8182ea992746','gomi',1000),(101,'하루 작성','2023-04-07 04:46:11',5,'a8b201a2-4e98-4a46-8d57-8182ea992746','goal',900),(102,'토리 친구비','2023-04-07 04:50:00',-500,'a8b201a2-4e98-4a46-8d57-8182ea992746','tori',905);
/*!40000 ALTER TABLE `point` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` varchar(36) NOT NULL,
  `image` varchar(255) NOT NULL,
  `month_cnt` int NOT NULL,
  `point` int NOT NULL,
  `week_cnt` int NOT NULL,
  `friend_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `FKrtc44cryhcxhnpp1cbjlut8r7` (`friend_id`),
  CONSTRAINT `FKrtc44cryhcxhnpp1cbjlut8r7` FOREIGN KEY (`friend_id`) REFERENCES `friend` (`friend_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('024976b0-a26c-4fb0-a55b-f93b37708481','http://k.kakaocdn.net/dn/cwTNsk/btr74vfmGhs/AyInIUft8LLBk4T9Covdo0/img_640x640.jpg',0,1000,0,1),('0880c821-3545-49f5-b80a-1631ffa5ab5c','http://k.kakaocdn.net/dn/cXDYpM/btr61mbUFYW/85UVKAu9bfLIVXpEWzkcA1/img_640x640.jpg',0,1000,0,1),('25c2c00d-56ed-45fb-9738-5118783127a0','http://k.kakaocdn.net/dn/bwlHgI/btr49SXA3vw/2w65KYcksWZv4bKoKkGAZ1/img_640x640.jpg',2,410,2,1),('3afcaf48-86b3-4595-b2bb-480b1f599f55','http://k.kakaocdn.net/dn/mNaz6/btrSMIyVet1/VtQu6jRDdYX8DN30PfpfT1/img_640x640.jpg',1,1005,1,1),('3b1a661a-d187-4653-bf52-b7da1ae66fbb','http://k.kakaocdn.net/dn/cXDYpM/btr61mbUFYW/85UVKAu9bfLIVXpEWzkcA1/img_640x640.jpg',0,1000,0,1),('732e835e-bd8f-43d0-8d75-be1f8a61aab3','http://k.kakaocdn.net/dn/bl31cA/btr5LBByj4K/XegNk6k2yiykLlWNBAuJ31/img_640x640.jpg',3,515,3,2),('78b4acdf-d0e1-4f7b-aff4-474e153de101','http://k.kakaocdn.net/dn/QfjlU/btrH76jJN0y/mEqPoRF2XqvhJxvXiciGmK/img_640x640.jpg',0,1000,0,1),('8096b53c-cf37-4c6b-8f58-6cf20363b25e','http://k.kakaocdn.net/dn/bi18i3/btr5Ho2Owxn/7ktuS31VZsbdPs4AWOxVvK/img_640x640.jpg',4,1530,4,2),('84faeb79-78f6-4e47-a974-5848f4a2602e','http://k.kakaocdn.net/dn/bZ3LZY/btr6OqytwO6/MCbNX2vjoWBL7KbEaLLTNk/img_640x640.jpg',0,1000,0,1),('9b104cd5-1aba-4413-80c4-a5a3c64b188f','http://k.kakaocdn.net/dn/bXYWJs/btr7f0tEkhx/qJerorOzvvX63J8Rwl9xuK/img_640x640.jpg',0,1000,0,1),('a8b201a2-4e98-4a46-8d57-8182ea992746','http://k.kakaocdn.net/dn/FIwg0/btr5jb9zm38/Hr9c0tUtOSOC95KKeUXXw1/img_640x640.jpg',1,405,1,3),('e2658250-1647-44ea-bc9a-c65b16dbd039','http://k.kakaocdn.net/dn/qKUX9/btrSjpeYGch/pZfILHA3Zg1qdzmaPuJJ60/img_640x640.jpg',0,1000,0,1),('e5012ffc-3131-42a6-8aec-976925e2a86c','http://k.kakaocdn.net/dn/bR1R4T/btr5OdUHmQN/J9gZcwYCvckAKkWlYWZMt0/img_640x640.jpg',0,1000,0,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_friend`
--

DROP TABLE IF EXISTS `user_friend`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_friend` (
  `user_friend_id` bigint NOT NULL AUTO_INCREMENT,
  `purchase_date` datetime NOT NULL,
  `friend_id` bigint NOT NULL,
  `user_id` varchar(36) NOT NULL,
  PRIMARY KEY (`user_friend_id`),
  KEY `FKco2n5caff8bkyspvocormigjg` (`friend_id`),
  KEY `FKd78cpvffyirgej1vmul9vqao4` (`user_id`),
  CONSTRAINT `FKco2n5caff8bkyspvocormigjg` FOREIGN KEY (`friend_id`) REFERENCES `friend` (`friend_id`),
  CONSTRAINT `FKd78cpvffyirgej1vmul9vqao4` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_friend`
--

LOCK TABLES `user_friend` WRITE;
/*!40000 ALTER TABLE `user_friend` DISABLE KEYS */;
INSERT INTO `user_friend` VALUES (1,'2023-04-03 15:07:47',1,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(2,'2023-04-03 17:26:12',1,'732e835e-bd8f-43d0-8d75-be1f8a61aab3'),(3,'2023-04-03 23:42:32',1,'a8b201a2-4e98-4a46-8d57-8182ea992746'),(4,'2023-04-04 00:20:54',1,'25c2c00d-56ed-45fb-9738-5118783127a0'),(7,'2023-04-04 10:14:29',1,'3b1a661a-d187-4653-bf52-b7da1ae66fbb'),(11,'2023-04-05 21:20:51',2,'25c2c00d-56ed-45fb-9738-5118783127a0'),(12,'2023-04-05 21:21:12',3,'25c2c00d-56ed-45fb-9738-5118783127a0'),(13,'2023-04-05 22:25:05',1,'024976b0-a26c-4fb0-a55b-f93b37708481'),(14,'2023-04-06 01:46:09',1,'e2658250-1647-44ea-bc9a-c65b16dbd039'),(15,'2023-04-06 09:07:34',1,'9b104cd5-1aba-4413-80c4-a5a3c64b188f'),(16,'2023-04-06 09:31:26',2,'732e835e-bd8f-43d0-8d75-be1f8a61aab3'),(20,'2023-04-06 10:37:14',1,'0880c821-3545-49f5-b80a-1631ffa5ab5c'),(21,'2023-04-06 11:55:10',1,'84faeb79-78f6-4e47-a974-5848f4a2602e'),(22,'2023-04-06 12:20:46',1,'e5012ffc-3131-42a6-8aec-976925e2a86c'),(23,'2023-04-06 13:03:31',3,'732e835e-bd8f-43d0-8d75-be1f8a61aab3'),(24,'2023-04-06 13:54:12',1,'78b4acdf-d0e1-4f7b-aff4-474e153de101'),(30,'2023-04-06 23:20:26',1,'3afcaf48-86b3-4595-b2bb-480b1f599f55'),(31,'2023-04-07 01:24:34',2,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(32,'2023-04-07 01:37:59',3,'8096b53c-cf37-4c6b-8f58-6cf20363b25e'),(34,'2023-04-07 04:45:04',2,'a8b201a2-4e98-4a46-8d57-8182ea992746'),(35,'2023-04-07 04:50:00',3,'a8b201a2-4e98-4a46-8d57-8182ea992746');
/*!40000 ALTER TABLE `user_friend` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-07  4:57:26
