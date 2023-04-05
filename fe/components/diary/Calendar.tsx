import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useEffect, Dispatch, SetStateAction } from 'react';
import {
  useNowDate,
  useNowDay,
  usePrevDate,
  usePrevDay,
  useDate,
} from '../../hooks/useDate';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';
import { ErrorResponse } from '../../types/commonTypes';
import { CACHE_TIME, DIARIES, STALE_TIME } from '../../constants/api';
import { useGetDiariesCalendars } from '../../apis/diaries';
import { getCookie } from '../../utils/cookie';
import { CalendarData } from '../../types/diariesTypes';

interface DateItem {
  type: string;
  data: number;
  diaryId: number | null;
  happy: number | null;
}

const Container = styled.div`
  width: 100%;
  min-height: 32rem;
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

const NowDate = styled.button<{ theme: ColorTypes; happy: number | null }>`
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
  color: ${props => props.theme.color};
  font-size: ${common.fontSize.fs24};
  text-align: center;
  border-radius: 4rem;
  background: ${props =>
    `rgba(${props.theme.happy}, ${props.happy ? props.happy / 100 : 0})`};

  @media screen and (max-width: 500px) {
    width: 10vw;
    height: 10vw;
  }
`;

function Calendar(props: {
  year: number;
  month: number;
  setToday: Dispatch<SetStateAction<boolean>>;
  setDiaryId: Dispatch<SetStateAction<number>>;
}) {
  const { year, month, setToday, setDiaryId } = props;
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
        happy: null,
      });
      prevDate -= 1;
    }
  }
  data?.sort((a, b) => a.date.localeCompare(b.date));

  let left = 0;
  // 이번 달 날짜 배열
  for (let i = 1; i <= nowDate; i++) {
    // 여기서 추가할 때 감정 %도 속성으로 추가해서 props로 css에서 받아서 색상 적용
    if (data && data.length > left) {
      const temp = data[left].date.split('-');
      if (Number(temp[2]) === i) {
        if (i === useDate().date) {
          setToday(true);
          setDiaryId(data[left].diaryId);
        }
        monthDate.push({
          type: 'now',
          data: i,
          diaryId: data[left].diaryId,
          happy: data[left].happy < 20 ? 20 : data[left].happy,
        });
        left += 1;
      } else
        monthDate.push({ type: 'now', data: i, diaryId: null, happy: null });
      continue;
    }
    monthDate.push({ type: 'now', data: i, diaryId: null, happy: null });
  }
  // 다음 달 날짜 배열
  for (let i = 1; i < 7 - nowDay; i++) {
    monthDate.push({ type: 'next', data: i, diaryId: null, happy: null });
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
