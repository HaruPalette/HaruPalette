import styled from '@emotion/styled';
import Image from 'next/image';
import { ColorTypes } from '@emotion/react';
import useTheme from '../../hooks/useTheme';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { selectTheme } from '../../store/modules/theme';
import { selectShop, setOpenFilterModal } from '../../store/modules/shop';
import { SHOP_FILTER_CATORIGY_LIST } from '../../constants/nav';
import { common } from '../../styles/theme';

interface IDummy {
  imgSrc: string;
  title: string;
  addPoint: number;
  date: string;
}
const dummy: IDummy[] = [
  {
    imgSrc: '/assets/img/common/coin.svg',
    title: '하루 친구비',
    addPoint: -30,
    date: '2023.03.12',
  },
  {
    imgSrc: '/assets/img/common/coin.svg',
    title: '한달 과제 달성',
    addPoint: +130,
    date: '2023.03.11',
  },
  {
    imgSrc: '/assets/img/common/coin.svg',
    title: '주 7회 과제 달성',
    addPoint: +30,
    date: '2023.03.10',
  },
  {
    imgSrc: '/assets/img/common/coin.svg',
    title: '고미 친구비',
    addPoint: -30,
    date: '2023.03.09',
  },
  {
    imgSrc: '/assets/img/common/coin.svg',
    title: '고미 친구비',
    addPoint: -30,
    date: '2023.03.09',
  },
];
function PointDetail() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  let getTotalPoint = 1600;
  const calcPoint = (point: number) => {
    getTotalPoint += point;

    return getTotalPoint > 1000
      ? Math.floor(getTotalPoint / 1000) + ',' + (getTotalPoint % 1000)
      : getTotalPoint;
  };
  const isDark = useAppSelector(selectTheme);
  const currFilterCategoryIdx =
    useAppSelector(selectShop).currFilterCategoryIdx;
  const openFilterModal = useAppSelector(selectShop).openFilterModal;
  const filterYear = useAppSelector(selectShop).filterYear;
  const filterMonth = useAppSelector(selectShop).filterMonth;
  const img = `/assets/img/common/filter${isDark ? 'Dark' : 'Light'}.svg`;
  const renderRound = () => {
    const renderRoundArr = dummy.map((el: IDummy, index: number) => {
      return (
        <DummyEls key={index}>
          <DummyImg src={el.imgSrc} width={58} height={58} alt="DummyImg" />
          <DummyTitle theme={theme}>{el.title}</DummyTitle>
          {el.addPoint > 0 ? (
            <DummyAddPointPlus>
              +
              {el.addPoint > 1000
                ? Math.floor(el.addPoint / 1000) + ',' + (el.addPoint % 1000)
                : el.addPoint + ' '}
              P
            </DummyAddPointPlus>
          ) : (
            <DummyAddPointMinus>
              {el.addPoint > 1000
                ? Math.floor(el.addPoint / 1000) + ',' + (el.addPoint % 1000)
                : el.addPoint + ' '}
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

  return (
    <Container>
      <LeftContainer>
        <FilterDiv
          theme={theme}
          onClick={() => {
            dispatch(setOpenFilterModal(!openFilterModal));
          }}
        >
          <FilterTitle theme={theme}>
            {filterYear}.{filterMonth < 10 ? '0' + filterMonth : filterMonth}
            {' ' + SHOP_FILTER_CATORIGY_LIST[currFilterCategoryIdx].title}
          </FilterTitle>
          <FilterIcon src={img} width={16} height={16} alt="FilterIcon" />
        </FilterDiv>
      </LeftContainer>
      <MiddleContainer theme={theme}>{renderRound()}</MiddleContainer>
      <RightContainer />
    </Container>
  );
}

export default PointDetail;
const Container = styled.div`
  display: flex;
  width: 80vw;
  bottom: 0px;
  justify-content: space-between;
  align-items: center;
`;
const LeftContainer = styled.div`
  width: 320px;
  height: 290px;
  /* border: 3px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightContainer = styled.div`
  width: 320px;
  height: 290px;
  /* border: 3px solid red; */
`;
const FilterDiv = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  width: 200px;
  height: 48px;
  display: flex;
  border-radius: 16px;
  color: black;
  border: 2px solid ${common.colors.disable};
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
`;
const FilterTitle = styled.span<{ theme: ColorTypes }>`
  position: absolute;
  width: 120px;
  height: 18px;
  left: 35px;
  color: ${props => props.theme.color};
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  text-align: left;
`;
const FilterIcon = styled(Image)`
  position: absolute;
  width: 16px;
  height: 16px;
  right: 30px;
  top: 15px;
`;

const MiddleContainer = styled.div<{ theme: ColorTypes }>`
  position: relative;
  width: 350px;
  height: 290px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  overflow-y: scroll;
  border-radius: 6px;
  background-color: ${props => props.theme.background};
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 6px;
    background: ${props => props.theme.background};
    /* background-color: white; */
  }
  overflow-x: hidden;
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.main};
    border-radius: 6px;
  }
`;
const DummyEls = styled.div`
  width: 330px;
  height: 58px;
  padding: 38px;
  display: flex;
  align-items: center;
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
  font-size: 16px;
  line-height: 0px;
  font-weight: 600;
  text-align: left;
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
