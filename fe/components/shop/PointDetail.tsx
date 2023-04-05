import styled from '@emotion/styled';
import Image from 'next/image';
import { ColorTypes } from '@emotion/react';
import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import useTheme from '../../hooks/useTheme';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { selectTheme } from '../../store/modules/theme';
import { selectShop, setOpenFilterModal } from '../../store/modules/shop';
import { SHOP_FILTER_CATORIGY_LIST } from '../../constants/nav';
import { common } from '../../styles/theme';
import { ErrorResponse } from '../../types/commonTypes';
import { PointData, PointResponse } from '../../types/usersTypes';
import { CACHE_TIME, STALE_TIME, POINTS } from '../../constants/api';
import { useGetUsersPoints } from '../../apis/users';
import { getCookie } from '../../utils/cookie';

interface IDummy {
  imgSrc: string;
  title: string;
  addPoint: number;
  date: string;
  index: number;
}
const dummy: IDummy[] = [
  {
    imgSrc: '/assets/img/common/coin.svg',
    title: '하루 친구비',
    addPoint: -30,
    date: '2023.03.12',
    index: 0,
  },
  {
    imgSrc: '/assets/img/common/coin.svg',
    title: '한달 과제 달성',
    addPoint: +130,
    date: '2023.03.11',
    index: 1,
  },
  {
    imgSrc: '/assets/img/common/coin.svg',
    title: '주 7회 과제 달성',
    addPoint: +30,
    date: '2023.03.10',
    index: 2,
  },
  {
    imgSrc: '/assets/img/common/coin.svg',
    title: '고미 친구비',
    addPoint: -30,
    date: '2023.03.09',
    index: 3,
  },
  {
    imgSrc: '/assets/img/common/coin.svg',
    title: '고미 친구비',
    addPoint: -30,
    date: '2023.03.08',
    index: 4,
  },
];

const Container = styled.div`
  position: relative;
  display: flex;
  width: 45vw;
  padding: 0 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media all and (max-width: 1500px) {
    width: 45vw;
    padding: 0 70px;
    margin-top: 20px;
  }
  @media all and (max-width: 1150px) {
    padding: 0;
  }
  @media all and (max-width: 960px) {
    width: 60vw;
    margin-top: 20px;
  }
  @media all and (max-width: 700px) {
    width: 85vw;
    margin-top: 20px;
  }
  @media all and (max-width: 580px) {
    margin-top: 0px;
    width: 90vw;
  }
`;
const LeftContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  /* border: 3px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
//
const FilterDiv = styled.div<{ theme: ColorTypes }>`
  position: relative;
  width: 350px;
  height: 50px;
  border-radius: 16px;
  border: 2px solid ${common.colors.disable};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  background: ${props => props.theme.background};
`;
const FilterTitle = styled.span<{ theme: ColorTypes }>`
  position: absolute;
  width: 120px;
  height: 18px;
  color: ${props => props.theme.color};
  font-size: ${common.fontSize.fs16};
  line-height: 18px;
  font-weight: 600;
  text-align: center;
`;
const FilterIcon = styled(Image)`
  position: absolute;
  width: 16px;
  height: 16px;
  right: 30px;
  top: 13px;
`;

const MiddleContainer = styled.div<{ theme: ColorTypes }>`
  position: relative;
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  border-radius: 6px;
  margin-bottom: 60px;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 6px;
    background: ${props => props.theme.primary20};
    /* background-color: white; */
  }
  overflow-x: hidden;
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.main};
    border-radius: 6px;
  }
`;
const DummyEls = styled.div<{ theme: ColorTypes }>`
  width: 99%;
  height: 58px;
  padding: 38px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${props => props.theme.diaryBackground};
    border-radius: 12px;
    color: ${props => props.theme.border};
  }
`;

const DummyImg = styled(Image)`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 10px;
  background: #ffffff;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;
const DummyTitle = styled.span<{ theme: ColorTypes }>`
  position: absolute;
  width: 120px;
  height: 18px;
  left: 80px;
  color: ${props => props.theme.color};
  font-size: ${common.fontSize.fs16};
  line-height: 0px;
  font-weight: 600;
  text-align: left;
  &:hover {
    color: ${props => props.theme.border};
  }
`;
const DummyAddPointPlus = styled.span`
  position: absolute;
  width: 100px;
  height: 18px;
  right: 20px;
  color: ${common.colors.error};
  margin: 10px auto;
  font-size: 16px;
  line-height: 0px;
  font-weight: 600;
  text-align: right;
`;
const DummyAddPointMinus = styled.span`
  position: absolute;
  width: 100px;
  height: 18px;
  right: 20px;
  color: #6e6bff;
  margin: 10px auto;
  font-size: 16px;
  line-height: 0px;
  font-weight: 600;
  text-align: right;
`;
const DummyDate = styled.span`
  position: absolute;
  width: 100px;
  height: 40px;
  margin-top: 35px;
  left: 80px;
  color: #717171;
  font-size: 13px;
  line-height: 35px;
  text-align: left;
`;
const DummySumPoint = styled.span`
  position: absolute;
  width: 70px;
  height: 40px;
  right: 20px;
  color: #717171;
  font-size: 13px;
  margin-top: 35px;
  line-height: 35px;
  text-align: right;
`;

function PointDetail() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  let getTotalPoint = 1600;
  const calcPoint = (point: number) => {
    getTotalPoint += point;

    return getTotalPoint > 1000
      ? `${Math.floor(getTotalPoint / 1000)},${getTotalPoint % 1000}`
      : getTotalPoint;
  };
  const isDark = useAppSelector(selectTheme);
  const currFilterCategoryIdxData =
    useAppSelector(selectShop).currFilterCategoryIdx;
  const openFilterModalData = useAppSelector(selectShop).openFilterModal;
  const filterYearData = useAppSelector(selectShop).filterYear;
  const filterMonthData = useAppSelector(selectShop).filterMonth;
  const img = `/assets/img/common/filter${isDark ? 'Dark' : 'Light'}.svg`;
  const renderRound = () => {
    const renderRoundArr = dummy.map((el: IDummy) => {
      return (
        <DummyEls theme={theme} key={el.index}>
          <DummyImg src={el.imgSrc} width={58} height={58} alt="DummyImg" />
          <DummyTitle theme={theme}>{el.title}</DummyTitle>
          {el.addPoint > 0 ? (
            <DummyAddPointPlus>
              +
              {el.addPoint > 1000
                ? `${Math.floor(el.addPoint / 1000)},${el.addPoint % 1000}`
                : `${el.addPoint} `}
              P
            </DummyAddPointPlus>
          ) : (
            <DummyAddPointMinus>
              {el.addPoint > 1000
                ? `${Math.floor(el.addPoint / 1000)},${el.addPoint % 1000}`
                : `${el.addPoint} `}
              P
            </DummyAddPointMinus>
          )}
          <DummyDate>{el.date}</DummyDate>
          <DummySumPoint>{calcPoint(el.addPoint)} P</DummySumPoint>
        </DummyEls>
      );
    });
    return renderRoundArr;
  };

  const category = 'all';
  const date = '2023-04';
  const { data } = useQuery<
    AxiosResponse<PointResponse>,
    AxiosError<ErrorResponse>,
    PointData
  >(
    [POINTS],
    () => useGetUsersPoints(category, date, getCookie('Authorization')),
    {
      keepPreviousData: true,
      staleTime: STALE_TIME,
      cacheTime: CACHE_TIME,
    },
  );

  return (
    <Container>
      <LeftContainer>
        <FilterDiv
          theme={theme}
          onClick={() => {
            dispatch(setOpenFilterModal(!openFilterModalData));
          }}
        >
          <FilterTitle theme={theme}>
            {filterYearData}.
            {filterMonthData < 10 ? `0${filterMonthData}` : filterMonthData}
            {` ${SHOP_FILTER_CATORIGY_LIST[currFilterCategoryIdxData].title}`}
          </FilterTitle>
          <FilterIcon src={img} width={16} height={16} alt="FilterIcon" />
        </FilterDiv>
      </LeftContainer>
      <MiddleContainer theme={theme}>{renderRound()}</MiddleContainer>
    </Container>
  );
}

export default PointDetail;
