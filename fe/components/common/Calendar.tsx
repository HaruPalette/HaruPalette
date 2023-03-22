import styled from '@emotion/styled';
import { useDate } from '../../hooks/useDate';
import useTheme from '../../hooks/useTheme';
import { ColorTypes } from '@emotion/react';
import { common } from '../../styles/theme';

function Calendar() {
  const theme = useTheme();
  // 이전 달 마지막 날짜
  let prevDate = new Date(useDate().year, useDate().month - 1, 0).getDate();
  // 이전 달 마지막 요일 (일: 0 - 토 : 7)
  const prevDay = new Date(useDate().year, useDate().month - 1, 0).getDay();
  // 이번 달 마지막 날짜
  const nowDate = new Date(useDate().year, useDate().month, 0).getDate();
  // 이번 달 마지막 요일
  const nowDay = new Date(useDate().year, useDate().month, 0).getDay();
  console.log(prevDay);
  // 이전 달 날짜 배열
  let monthDate = [];
  for (let i = 0; i <= prevDay; i++) {
    monthDate.unshift({ type: 'prev', data: prevDate });
    prevDate--;
  }
  // 이번 달 날짜 배열
  for (let i = 1; i <= nowDate; i++) {
    // 여기서 추가할 때 감정 %도 속성으로 추가해서 props로 css에서 받아서 색상 적용
    monthDate.push({ type: 'now', data: i });
  }
  // 다음 달 날짜 배열
  for (let i = 1; i < 7 - nowDay; i++) {
    monthDate.push({ type: 'next', data: i });
  }
  return (
    <Container>
      {monthDate.map((item, idx) => {
        if (item.type !== 'now')
          return (
            <OtherDate key={idx} theme={theme}>
              {item.data}
            </OtherDate>
          );
        else
          return (
            <NowDate key={idx} theme={theme}>
              {item.data}
            </NowDate>
          );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 35.5rem;
  height: 26rem;
  /* background: black; */
`;

const OtherDate = styled.button<{ theme: ColorTypes }>`
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
  color: #b1abab;
  font-size: ${common.fontSize.fs24};
  text-align: center;
`;

const NowDate = styled.button<{ theme: ColorTypes }>`
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
  color: ${props => props.theme.color};
  font-size: ${common.fontSize.fs24};
  text-align: center;
  border-radius: 4rem;
  background: ${props => props.theme.primary20};
`;

export default Calendar;
