import styled from '@emotion/styled';
import Image from 'next/image';
import { ColorTypes } from '@emotion/react';
import useTheme from '../../hooks/useTheme';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { selectTheme } from '../../store/modules/theme';
import { selectShop, setOpenFilterModal } from '../../store/modules/shop';
import { SHOP_FILTER_CATORIGY_LIST } from '../../constants/nav';
import { common } from '../../styles/theme';

export interface PointProps {
  point: number;
  date: string;
  content: string;
  type: string;
}
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

const DummyImgDiv = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 10px;
  background: #ffffff;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DummyImg = styled(Image)<{ theme: ColorTypes }>`
  width: 40px;
  height: 40px;
  /* background: ${props => props.theme.primary20}; */
  /* box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25); */
  /* border-radius: 30px; */
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
    /* color: ${props => props.theme.border}; */
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

function PointDetail(props: { data: any }) {
  const { data } = props;
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isDark = useAppSelector(selectTheme);
  const currFilterCategoryIdxData =
    useAppSelector(selectShop).currFilterCategoryIdx;
  const openFilterModalData = useAppSelector(selectShop).openFilterModal;
  const filterYearData = useAppSelector(selectShop).filterYear;
  const filterMonthData = useAppSelector(selectShop).filterMonth;
  let getTotalPoint = data.currentPoint;
  console.log(getTotalPoint);
  const img = `/assets/img/common/filter${isDark ? 'Dark' : 'Light'}.svg`;
  const pData: any = data?.pointList;

  // console.log(pData);

  const tmp = (point: number) => {
    if (point / 1000 > 0) return `00${point % 1000}`;
    if (point / 100 > 0) return `0${point}`;
    return `00${point}`;
  };
  const calcPoint = (point: number) => {
    getTotalPoint += point;

    return getTotalPoint >= 1000
      ? `${Math.floor(getTotalPoint / 1000)},${tmp(getTotalPoint)}`
      : getTotalPoint;
  };

  const renderRound = () => {
    let idx = -1;
    const renderRoundArr = pData?.map((el: any) => {
      idx += 1;
      let imgSrc;
      if (el.type === 'haru' || el.type === 'gomi' || el.type === 'tori')
        imgSrc = `/assets/img/${el.type}/2d.svg`;
      else imgSrc = `/assets/img/common/${el.type}.svg`;

      return (
        <DummyEls theme={theme} key={idx}>
          <DummyImgDiv theme={theme}>
            <DummyImg
              theme={theme}
              src={imgSrc}
              width={58}
              height={58}
              alt="DummyImg"
            />
          </DummyImgDiv>
          <DummyTitle theme={theme}>{el.contents}</DummyTitle>
          {el.point > 0 ? (
            <DummyAddPointPlus>
              +
              {el.point > 1000
                ? `${Math.floor(el.point / 1000)},${el.point % 1000}`
                : `${el.point} `}
              P
            </DummyAddPointPlus>
          ) : (
            <DummyAddPointMinus>
              {el.point > 1000
                ? `${Math.floor(el.point / 1000)},${el.point % 1000}`
                : `${el.point} `}
              P
            </DummyAddPointMinus>
          )}
          <DummyDate>{el.date}</DummyDate>
          <DummySumPoint>{calcPoint(el.point)} P</DummySumPoint>
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
