import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import { SHOP_FILTER_CATORIGY_LIST } from '../../constants/nav';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { useDate } from '../../hooks/useDate';
import useTheme from '../../hooks/useTheme';
import { selectTheme } from '../../store/modules/theme';
import Select from '../common/Select';
import {
  selectShop,
  setFilterCategory,
  setFilterMonth,
  setFilterYear,
  setOpenFilterModal,
} from '../../store/modules/shop';
function FilterModal() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isDark = useAppSelector(selectTheme);
  const nowYear = useDate().year;
  const nowMonth = useDate().month;
  const [year, setYear] = useState(nowYear);
  const [month, setMonth] = useState(nowMonth);
  const [categoryIdx, setCategoryIdx] = useState(0);
  // const currFilterCategoryIdx =
  //   useAppSelector(selectShop).currFilterCategoryIdx;
  // const openFilterModal = useAppSelector(selectShop).openFilterModal;
  // console.log(year, month);
  const img = `/assets/img/common/${isDark ? 'xIconWhite' : 'xIconBlack'}.svg`;

  const setFilterAll = (): any => {
    dispatch(setFilterYear(year));
    dispatch(setFilterMonth(month));
    dispatch(setFilterCategory(categoryIdx));
    dispatch(setOpenFilterModal(false));
    alert('필터 설정이 완료되었습니다.');

    // axios 요청해야 함
  };

  return (
    <Container theme={theme}>
      <MainText theme={theme}>보기 옵션</MainText>
      <SelectDiv theme={theme}>
        <Select
          setYear={setYear}
          year={year}
          setMonth={setMonth}
          month={month}
        />
      </SelectDiv>
      <CloseBtn
        src={img}
        width={16}
        height={16}
        alt="FilterIcon"
        onClick={() => {
          dispatch(setOpenFilterModal(false));
        }}
      />
      <MainBar theme={theme}></MainBar>
      {/* <FilterYearDiv theme={theme}>{makingOptions()}</FilterYearDiv> */}
      <GetText theme={theme}>조회</GetText>
      <CategoryText theme={theme}>유형</CategoryText>
      <CategoryButtons theme={theme}>
        {SHOP_FILTER_CATORIGY_LIST.map((item, index) => {
          if (index === categoryIdx) {
            return (
              <CategoryCurrButton
                theme={theme}
                key={item.index}
                onClick={() => setCategoryIdx(item.index)}
              >
                {item.title}
              </CategoryCurrButton>
            );
          } else {
            return (
              <CategoryButton
                theme={theme}
                key={item.index}
                onClick={() => setCategoryIdx(item.index)}
              >
                {item.title}
              </CategoryButton>
            );
          }
        })}
      </CategoryButtons>
      <CategoryConfirmBtn
        theme={theme}
        onClick={() => {
          setFilterAll();
        }}
      >
        확인
      </CategoryConfirmBtn>
    </Container>
  );
}

export default FilterModal;

const Container = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  width: 300px;
  height: 220px;
  margin-top: -170px;
  display: flex;
  border-radius: 16px;
  color: ${props => props.theme.color};
  border: 2px solid ${props => props.theme.color};
  background-color: ${props => props.theme.background};
  text-align: center;
  align-items: center;
  justify-content: center;
  z-index: 12;
`;

const CloseBtn = styled(Image)`
  position: absolute;
  width: 13px;
  height: 13px;
  right: 20px;
  top: 26px;
  cursor: pointer;
`;

const MainBar = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  width: 260px;
  height: 2px;
  left: 20px;
  top: 48px;
  background-color: ${props => props.theme.color};
`;

const MainText = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  width: 70px;
  height: 22px;
  left: 20px;
  top: 20px;
`;

const GetText = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  width: 32px;
  height: 22px;
  left: 30px;
  top: 80px;
  line-height: 22px;
`;

const CategoryText = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  width: 32px;
  height: 22px;
  left: 30px;
  top: 130px;
  line-height: 22px;
`;

const CategoryButtons = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  width: 190px;
  height: 22px;
  left: 80px;
  top: 127px;
  display: flex;
  /* flex-direction: s; */
  justify-content: space-between;
`;

const CategoryCurrButton = styled.div<{ theme: ColorTypes }>`
  width: 50px;
  height: 22px;
  border-radius: 8px;
  line-height: 24px;
  border: 2px solid ${props => props.theme.color};
  cursor: pointer;
  font-size: 14px;
`;

const CategoryButton = styled.div<{ theme: ColorTypes }>`
  width: 50px;
  height: 22px;
  line-height: 24px;
  border-radius: 8px;
  border: 2px solid gray;
  color: gray;
  cursor: pointer;
  font-size: 14px;
`;

const CategoryConfirmBtn = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  width: 260px;
  height: 22px;
  left: 20px;
  bottom: 20px;
  line-height: 24px;
  border-radius: 8px;
  border: 2px solid ${props => props.theme.color};
  cursor: pointer;
  font-size: 14px;
`;

const SelectDiv = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  scale: 0.7;
  top: 55px;
  left: 40px;
  display: flex;
  justify-content: space-between;
  z-index: 4;
`;