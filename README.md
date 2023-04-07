# HaruPalette 🎨
![logo](https://user-images.githubusercontent.com/55950992/230177770-c2362c56-9f90-45ed-8740-a1ae72aca76f.png)

![목업](https://user-images.githubusercontent.com/55950992/230185259-c0709622-89d2-4dc0-861d-31af079a8acd.png)

### 팀원 소개
![team_member_light](https://user-images.githubusercontent.com/55950992/230524378-3faca273-44b2-4027-9c2e-5870e13157dc.svg)

길상욱 : https://github.com/gilsanguk
<br />
김창겸 : https://github.com/kyum8562
<br /> 
김소윤 : https://github.com/misso88
<br />
서예지 : https://github.com/syg9272
<br />
유지연 : https://github.com/youjiyeon
<br />
임성빈 : https://github.com/LimSB-dev
<br />

### 프로젝트 설명
> 💗 오늘 하루도 수고하셨습니다. 무슨 일이 있었는지 들려주실 수 있나요?
> 대화를 통해 언어로 정서를 표현하면 마음이 정화되고, 감정을 해소하는데 도움이 됩니다. 
> 여러분이 이야기한 일기를 **다중감정분석**을 통해 귀여운 캐릭터들이 답변을 달아줍니다. 
> 하루하루 모은 포인트로 캐릭터들과 친구 맺기를 하고, 이야기를 나누어 봐요


### 폴더 구조
```
📦be
 ┣ 📂palette
 ┃ ┣ 📂gradle
 ┃ ┃ ┗ 📂wrapper
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📂java
 ┃ ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┃ ┗ 📂ssafy
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂palette
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂security
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┗ 📂resources
 ┃ ┃ ┗ 📂test
 ┃ ┃ ┃ ┗ 📂java
 ┃ ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┃ ┗ 📂ssafy
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂palette
 ┣ 📂palette_ai
 ┣ 📂palette_auth
 ┃ ┣ 📂gradle
 ┃ ┃ ┗ 📂wrapper
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📂java
 ┃ ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┃ ┗ 📂ssafy
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂palette
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂client
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂filter
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂handler
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂model
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂provider
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┗ 📂resources
 ┃ ┃ ┗ 📂test
 ┃ ┃ ┃ ┗ 📂java
 ┃ ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┃ ┗ 📂ssafy
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂palette
 ┗ 📂proto
```
```
📦fe
┣ 📂constants
┣ 📂components
┃ ┣ 📂animation
┃ ┣ 📂button
┃ ┣ 📂common
┃ ┣ 📂diary
┃ ┣ 📂nav
┃ ┣ 📂progressbar
┃ ┗ 📂shop
┣ 📂hooks
┃ ┗ 📂reactQueryHooks
┣ 📂pages
┃ ┣ 📂create
┃ ┣ 📂detail
┃ ┣ 📂diary
┃ ┣ 📂login
┃ ┗ 📂shop
┣ 📂store
┃ ┗ 📂modules
┣ 📂styles
┗ 📂types
```
# 목차

- [HaruPalette 🎨](#HaruPalette-🎨)
    + [팀원 소개](#팀원-소개)
    + [프로젝트 설명](#프로젝트-설명)
    + [폴더 구조](#폴더-구조)
- [프로젝트 정보](#프로젝트-정보)
    + [기술 스택](#기술-스택)
  * [구현 목록](#구현-목록)
- [프로젝트 결과물](#프로젝트-결과물)
  * [메인페이지](#메인페이지)
  * [일기 작성 페이지](#일기-작성-페이지)
  * [일기 수정 페이지](#일기-수정-페이지)
  * [달력 페이지](#달력-페이지)
  * [일기 상세 페이지](#일기-상세-페이지)
  * [상점 페이지](#상점-페이지)
  * [하루팔레트 테마](#하루팔레트-테마)
  * [반응형 웹](#반응형-웹)
  * [SSR & SEO 최적화로 사용자 경험 개선](#SSR-&-SEO-최적화로-사용자-경험-개선)
  * [시스템 아키텍쳐](#시스템-아키텍쳐)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# 프로젝트 정보

### 기술 스택
<img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
<img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white">
<img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">
<img src="https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white">
<img src="https://img.shields.io/badge/gitlab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white">
<img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white">
<br />
<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white">
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
<br />
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
<img src="https://img.shields.io/badge/three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
<br />
<img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white">
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">


## 구현 목록

#### - 인공지능 음성인식 모델을 통한 STT서비스
- openAI의 whisper 모델을 사용하여 음성인식을 구현하였습니다.
  ![whisper](https://user-images.githubusercontent.com/55950992/230521063-2e9093d9-e74e-4f4d-adbd-d35b141586a9.PNG)
#### - 자연어처리 모델을 통한 다중감정분석 서비스
- facebook의 RoBERTa 모델을 사용하여 다중감정분석을 구현하였습니다.
  ![RoBERTa](https://user-images.githubusercontent.com/55950992/230521113-750c5108-fcf0-481a-8b49-c68940c59bd1.PNG)

# 프로젝트 결과물
## 메인페이지
#### 메인페이지는 서비스 설명과 소개로 이루어져 있어요.
![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/55950992/230417795-1904740c-89c1-4910-b3bf-ab0368b40fc8.gif)

## 일기 작성 페이지
#### 일기 작성 페이지는 현재 위치 기반 날씨 데이터를 불러와 해당 날씨를 배경에 띄워줍니다. 귀여운 캐릭터와 대화하며 일기를 작성해보세요.
![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/55950992/230423064-7df46b97-6d8c-4965-901d-5793b2a00329.gif)

## 일기 수정 페이지
#### 일기 수정 페이지에서는는 대화 종료 후 STT 데이터를 불러와 내용을 수정할 수 있고, 주어진 템플릿을 활용해 일기장을 꾸밀 수 있어요.
![ezgif com-video-to-gif (3)](https://user-images.githubusercontent.com/55950992/230426001-6886bd70-1c51-4ac9-b550-a5cff360fe98.gif)

## 달력 페이지
#### 달력 페이지는 작성한 일기들을 확인할 수 있어요. 행복지수에 따라 팔레트 처럼 다양한 색상을 띄웁니다. 일기를 매일 작성해서 예쁜 팔레트를 채워봐요 😊
![ezgif com-video-to-gif (4)](https://user-images.githubusercontent.com/55950992/230435869-f7c75f29-cd54-4f65-baee-340b76f7fd01.gif)

## 일기 상세 페이지
#### 일기 상세 페이지에서는 작성한 일기를 토대로 다중 감정 분석을 통해 작성자의 감정을 분석합니다. 이후 분석한 감정데이터를 토대로 위로의 말을 제공합니다. 또한 완성된 일기장을 이미지로 저장할 수 있습니다. 지난 날의 감정을 기록하고 이미지로 저장해 공유해봐요.
![ezgif com-video-to-gif (5)](https://user-images.githubusercontent.com/55950992/230438421-4f76038f-b3ea-4e7d-ab1c-720d08ba8f09.gif)
< 저장된 이미지 >
<br />
![diary (22)](https://user-images.githubusercontent.com/55950992/230445431-9a165821-b3fe-4e32-aaea-62d74e7594bd.png)
![diary (23)](https://user-images.githubusercontent.com/55950992/230445524-c5e295e7-4ecb-4625-98ed-361f716dc9ca.png)

## 상점 페이지

#### 상점 페이지에서는 챌린지 현황과 포인트 사용내역 조회, 캐릭터 정보 조회 및 구매와 선택을 할 수 있어요.
![ezgif com-video-to-gif (6)](https://user-images.githubusercontent.com/55950992/230442955-6fae1d9f-535b-491f-b51d-7115c7ca0397.gif)

## 하루팔레트 테마
#### 저희 하루팔레트는 이름처럼 알록달록한 테마 디자인을 제공해요.
##### 라이트 & 다크모드와 캐릭터 별로 테마 디자인이 변경됩니다.
<br />
- 하루 Haru 
<br />
![Group 1000002614](https://user-images.githubusercontent.com/55950992/230446896-25e20c4b-1d11-42e3-b162-6282fabcd35d.png)
<br />
- 고미 Gomi
<br />
![Group 1000002615](https://user-images.githubusercontent.com/55950992/230448073-3ff95ca6-3e65-411c-990e-1ba88f6396d0.png)
<br />
- 토리 Tori
<br />
![Group 1000002613](https://user-images.githubusercontent.com/55950992/230446904-69bfd799-4c8e-4a9f-9b68-196424a55a2a.png)

## 반응형 웹
#### 저희 하루팔레트는 사용자 경험을 개선하기 위한한 반응형 웹으로 모바일, 태블릿 뷰도 지원해요.
![Group 1000002620](https://user-images.githubusercontent.com/55950992/230450116-c5ed988e-0cb9-422a-8f0c-c864ffb7ed39.png)
![Group 1000002618](https://user-images.githubusercontent.com/55950992/230450126-5e69dbe0-3d76-413e-b2ec-3b1953dfda8a.png)
![Group 1000002619](https://user-images.githubusercontent.com/55950992/230450131-b2a5db1c-9a92-4e49-97db-8f3b9e7d9318.png)

## SSR & SEO 최적화로 사용자 경험 개선
#### next.js를 활용해 SSR과 SEO 최적화로 접근성과 사용자 경험을 고려해 제작했습니다.
![E4D03F23-8261-4BBF-9282-FEB95E89685C](https://user-images.githubusercontent.com/55950992/230454256-9e472873-ad6e-4dc9-87f5-b2f1dc9778cd.jpg)
![C2E1C583-62F6-47CB-93B6-696A0522078A](https://user-images.githubusercontent.com/55950992/230454334-35804a94-456e-48c0-9d96-e40bbabcb396.png)

## 시스템 아키텍쳐
![최종 아키텍처](https://user-images.githubusercontent.com/55950992/230525072-df276475-1c27-41f7-8e43-f93bad014294.png)
