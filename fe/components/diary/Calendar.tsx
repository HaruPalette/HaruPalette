import styled from '@emotion/styled';
import {
  useDate,
  useNowDate,
  useNowDay,
  usePrevDate,
  usePrevDay,
} from '../../hooks/useDate';
import useTheme from '../../hooks/useTheme';
import { ColorTypes } from '@emotion/react';
import { common } from '../../styles/theme';

interface DateItem {
  type: string;
  data: number;
  diaryId: number | null;
}

function Calendar(props: { year: number; month: number }) {
  const { year, month } = props;
  const theme = useTheme();
  // 이전 달 마지막 날짜
  let prevDate: number = usePrevDate(year, month);
  // 이전 달 마지막 요일 (일: 0 - 토 : 6)
  const prevDay: number = usePrevDay(year, month);
  // 이번 달 마지막 날짜
  const nowDate: number = useNowDate(year, month);
  // 이번 달 마지막 요일
  const nowDay: number = useNowDay(year, month);
  // 이전 달 날짜 배열
  let monthDate: DateItem[] = [];
  console.log(prevDay);
  if (prevDay < 6) {
    for (let i = 0; i <= prevDay; i++) {
      // 객체 추가할 때 일기 객체도 추가 !
      monthDate.unshift({
        type: 'prev',
        data: prevDate,
        diaryId: 2,
      });
      prevDate--;
    }
  }
  // 이번 달 날짜 배열
  for (let i = 1; i <= nowDate; i++) {
    // 여기서 추가할 때 감정 %도 속성으로 추가해서 props로 css에서 받아서 색상 적용
    monthDate.push({ type: 'now', data: i, diaryId: null });
  }
  // 다음 달 날짜 배열
  for (let i = 1; i < 7 - nowDay; i++) {
    monthDate.push({ type: 'next', data: i, diaryId: null });
  }
  return (
    <Container>
      {monthDate.map((item, idx) => {
        if (item.type !== 'now')
          return (
            <OtherDate type="button" key={idx} theme={theme}>
              {item.data}
            </OtherDate>
          );
        else
          return (
            <NowDate
              type="button"
              key={idx}
              theme={theme}
              onClick={() => (window.location.href = `/detail/${item.data}`)}
            >
              {item.data}
            </NowDate>
          );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 26rem;
  text-align: center;

  @media all and (max-width: 480px) {
    transform: scale(0.75);
  }
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
  /* background: ${props => props.theme.primary20}; */
`;

export default Calendar;
