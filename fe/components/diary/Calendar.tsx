import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import {
  useNowDate,
  useNowDay,
  usePrevDate,
  usePrevDay,
} from '../../hooks/useDate';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';
import { ErrorResponse } from '../../types/commonTypes';
import { CACHE_TIME, DIARIES, STALE_TIME } from '../../constants/api';
import { useGetDiariesCalendars } from '../../apis/diaries';
import { getCookie } from '../../utils/cookie';
import { CalendarData } from '../../types/diariesTypes';
import { useEffect } from 'react';

interface DateItem {
  type: string;
  data: number;
  diaryId: number | null;
  happy: number;
}

const Container = styled.div`
  width: 100%;
  min-height: 26rem;
  text-align: center;

  @media screen and (max-width: 500px) {
    transform: scale(0.75);
    margin-top: -2rem;
    min-height: 16rem;
  }
`;

const OtherDate = styled.button<{ theme: ColorTypes }>`
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
  color: #b1abab;
  font-size: ${common.fontSize.fs24};
  text-align: center;
  @media screen and (max-width: 500px) {
    width: 10vw;
    height: 10vw;
  }
`;

const NowDate = styled.button<{ theme: ColorTypes; happy: number }>`
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
  color: ${props => props.theme.color};
  font-size: ${common.fontSize.fs24};
  text-align: center;
  border-radius: 4rem;

  @media screen and (max-width: 500px) {
    width: 10vw;
    height: 10vw;
  }

  :before {
    background: ${props => props.theme.primary60};
    opacity: ${props => (props.happy < 20 ? 20 : props.happy)};
  }
`;

function Calendar(props: { year: number; month: number }) {
  const { year, month } = props;
  const query = useQuery<CalendarData[], AxiosError<ErrorResponse>>(
    [DIARIES],
    () =>
      useGetDiariesCalendars(
        `${year}-${month < 10 ? String(`0${month}`) : month}`,
        getCookie('Authorization'),
      ),
    {
      keepPreviousData: true,
      staleTime: STALE_TIME,
      cacheTime: CACHE_TIME,
    },
  );
  const { data } = query;
  console.log(data);

  useEffect(() => {
    query.refetch();
  }, [month, year]);

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
  const monthDate: DateItem[] = [];
  if (prevDay < 6) {
    for (let i = 0; i <= prevDay; i++) {
      // 객체 추가할 때 일기 객체도 추가 !
      monthDate.unshift({
        type: 'prev',
        data: prevDate,
        diaryId: null,
        happy: 0,
      });
      prevDate -= 1;
    }
  }
  let left = 0;
  // 이번 달 날짜 배열
  for (let i = 1; i <= nowDate; i++) {
    // 여기서 추가할 때 감정 %도 속성으로 추가해서 props로 css에서 받아서 색상 적용
    if (data && data.length > left) {
      const temp = data[left].date.split('-');
      if (Number(temp[2]) === i) {
        monthDate.push({
          type: 'now',
          data: i,
          diaryId: data[left].diaryId,
          happy: data[left].happy,
        });
        left += 1;
      } else monthDate.push({ type: 'now', data: i, diaryId: null, happy: 0 });
      continue;
    }
    monthDate.push({ type: 'now', data: i, diaryId: null, happy: 0 });
  }
  // 다음 달 날짜 배열
  for (let i = 1; i < 7 - nowDay; i++) {
    monthDate.push({ type: 'next', data: i, diaryId: null, happy: 0 });
  }
  return (
    <Container>
      {monthDate.map(item => {
        if (item.type !== 'now')
          return (
            <OtherDate type="button" key={item.data + 50} theme={theme}>
              {item.data}
            </OtherDate>
          );
        return (
          <NowDate
            type="button"
            key={item.data}
            theme={theme}
            happy={item.happy}
            onClick={() => {
              if (item.diaryId)
                window.location.href = `/detail/${item.diaryId}`;
            }}
          >
            {item.data}
          </NowDate>
        );
      })}
    </Container>
  );
}

export default Calendar;
