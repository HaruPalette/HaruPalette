import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper';
// import { SwiperModule } from 'swiper/types';
import Image from 'next/image';
import { ColorTypes } from '@emotion/react';
import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { selectTheme } from '../../store/modules/theme';
import { useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import FriendCard from './FriendCard';
import { CACHE_TIME, FRIEND, STALE_TIME } from '../../constants/api';
import { useGetFriends } from '../../apis/friends';
import { ErrorResponse } from '../../types/commonTypes';
import {
  FriendList,
  FriendsData,
  FriendsResponse,
} from '../../types/friendsTypes';
import { getCookie } from '../../utils/cookie';

// import SwiperCore, { Autoplay, Pagination } from 'swiper';

// SwiperCore.use([Pagination, Autoplay]);

const Container = styled.div`
  position: relative;
  width: 45vw;
  height: 500px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform-style: preserve-3d;
  & .swiper_container {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  & .swiper_container .swiper-wrapper {
    display: flex;
    align-items: center;
    width: 800px;
  }
  & .swiper_container .swiper-wrapper .swiper-slide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    &:first-of-type {
      transform: rotate(0deg) translateZ(250px);
    }
    &:nth-of-type(2) {
      transform: rotateY(120deg) translateZ(250px) rotateY(-120deg);
    }
    &:nth-of-type(3) {
      transform: rotateY(240deg) translateZ(250px) rotateY(-240deg);
    }
  }
  @media all and (max-width: 1150px) {
    width: 55vw;
  }
  @media all and (max-width: 960px) {
    width: 80vw;
    margin-top: 40px;
  }
  @media all and (max-width: 700px) {
    width: 100vw;
    margin-top: 0px;
  }
`;

const NextBtn = styled.div`
  right: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 110px;
  cursor: pointer;
  &::after {
    content: '';
  }
`;
const PrevBtn = styled.div`
  left: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 110px;
  cursor: pointer;
  &::after {
    content: '';
  }
`;
const Pagenation = styled.div<{ theme: ColorTypes }>`
  position: relative;
  width: 200px;
  height: 50px;
  margin-top: 20px;
  &:nth-of-type(n) {
    margin: 30px;
  }

  & .swiper-pagination-bullet {
    background-color: ${props => props.theme.main};
    cursor: pointer;
    margin: 4px;
  }
`;

const NextIcon = styled(Image)`
  position: absolute;
  width: 40px;
  height: 40px;
`;
const PrevIcon = styled(Image)`
  position: absolute;
  width: 40px;
  height: 40px;
`;

function BuyingBuddy() {
  const isDark = useAppSelector(selectTheme);
  const theme = useTheme();
  const NextIconImg = `/assets/img/common/${
    isDark ? 'nextBtnDark' : 'nextBtnLight'
  }.svg`;
  const PrevIconImg = `/assets/img/common/${
    isDark ? 'prevBtnDark' : 'prevBtnLight'
  }.svg`;

  const { data } = useQuery<
    AxiosResponse<FriendsResponse>,
    AxiosError<ErrorResponse>,
    FriendsData
  >([FRIEND], () => useGetFriends(getCookie('Authorization')), {
    keepPreviousData: true,
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const renderCards = () => {
    const renderCardsArr = data?.friendList.map((el: FriendList) => {
      return (
        <SwiperSlide key={el.friendId}>
          <FriendCard friend={el} />
        </SwiperSlide>
      );
    });
    return renderCardsArr;
  };

  return (
    <Container>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        // loop // 슬라이드 반복 여부(true시 무한 loop)
        slidesPerView="auto" // 한 슬라이드에 보여줄 갯수
        // autoplay // 시간설정 및 스와이프 후 자동 재생 비활성화 할 수 있음
        coverflowEffect={{
          rotate: 0, // 메인과 서브가 바뀔때 회전정도(0은 회전 X)
          stretch: 2, // 슬라이드 간의 당김 정도 지정
          depth: 150, // 원근감(메인과 서브 카드의 거리)
          modifier: 6.5, // 중첩정도(서로 붙는 정도, 0은 중첩 x)
          slideShadows: false, // 서브 그림자여부
        }}
        // clickable: 페이지 네이션 버튼 크릭시 슬라이드 반응 여부
        // type : 'bullets', // 버튼 모양 결정 "bullets", "fraction"
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          // clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {renderCards()}
        <PrevBtn className="swiper-button-prev">
          <PrevIcon src={PrevIconImg} width={16} height={16} alt="PrevIcon" />
        </PrevBtn>
        <NextBtn className="swiper-button-next">
          <NextIcon src={NextIconImg} width={16} height={16} alt="NextIcon" />
        </NextBtn>
      </Swiper>
      <Pagenation className="swiper-pagination" theme={theme} />
    </Container>
  );
}

export default BuyingBuddy;
