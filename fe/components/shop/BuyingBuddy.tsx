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
import { selectTheme } from '../../store/modules/theme';
import { useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import FriendCard from './FriendCard';

// import SwiperCore, { Autoplay, Pagination } from 'swiper';

// SwiperCore.use([Pagination, Autoplay]);

export interface IFriendData {
  characteristic: string[];
  name: string;
  ename: string;
  desc: string;
  amount: number;
  index: number;
}

// interface ISetting {
//   effect: string;
//   grabCursor: boolean;
//   centeredSlides: boolean;
//   loop: boolean;
//   slidesPerView: string;
//   coverflowEffect: {
//     rotate: number;
//     stretch: number;
//     depth: number;
//     modifier: number;
//   };
//   pagination: any;
//   navigation: any;
//   modules: SwiperModule[];
//   className: string;
// }

const friendData: IFriendData[] = [
  {
    characteristic: ['#다정한', '#진솔한', '#ISFP'],
    name: '하루',
    ename: 'haru',
    desc: `안녕🐾 난 하루야😻\n난 하루하루 기록하는 걸 좋아해\n너도 나와 같이 오늘 하루를\n기록하지 않을래?`,
    amount: 0,
    index: 0,
  },
  {
    characteristic: ['#낙천적인', '#발랄한', '#ESFP'],
    name: '토리',
    ename: 'tori',
    desc: '안녕🐾 난 토리야!🐿\n난 도토리를 좋아해서 \n이름도 토리로 개명했어!\n난 외톨이가 아니라구! 나랑 친구할래?',
    amount: 500,
    index: 1,
  },
  {
    characteristic: ['#섬세한', '#느긋한', '#INFJ'],
    name: '고미',
    ename: 'gomi',
    desc: '안녕🐾 난 고미야~🐼\n항상 고민이 많은 나는 \n그걸 일기에 기록하곤해\n어때? 너도 고민을 말해볼래?',
    amount: 110,
    index: 2,
  },
];

const Container = styled.div`
  position: relative;
  width: 38vw;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform-style: preserve-3d;
  & .swiper_container {
    width: 100%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    position: relative;
    width: 200px;
    height: 50px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & span {
    background-color: ${props => props.theme.main};
    cursor: pointer;
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
  const renderCards = () => {
    const renderCardsArr = friendData.map((el: IFriendData) => {
      return (
        <SwiperSlide key={el.index}>
          <FriendCard data={el} />
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
