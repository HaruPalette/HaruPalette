import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import CreateButton from '../../components/button/CreateButton';
import Header from '../../components/common/Header';
import Select from '../../components/common/Select';
import Calendar from '../../components/diary/Calendar';
import Challenge from '../../components/diary/Challenge';
import Palette from '../../components/diary/Palette';
import { useDate } from '../../hooks/useDate';
import useTheme from '../../hooks/useTheme';
import JellyList from '../../components/common/JellyList';
import { useGetUsersChallenge, useGetUsersRemind } from '../../apis/users';
import { common } from '../../styles/theme';
import {
  CACHE_TIME,
  CHALLENGE,
  DIARIES,
  REMIND,
  STALE_TIME,
} from '../../constants/api';
import useCookie from '../../hooks/useCookie';
import { ErrorResponse } from '../../types/commonTypes';
import { getCookie } from '../../utils/cookie';
import { useGetDiariesCalendars } from '../../apis/diaries';
import { RemindResponse } from '../../types/usersTypes';
import { useBall } from '../../hooks/useBall';

export const DirayPage = styled.div<{ theme: ColorTypes }>`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.background};
`;

const Container = styled.div`
  width: calc(100vw - 320px);
  padding-top: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media all and (max-width: 1450px) {
    margin: 0;
    width: calc(100vw - 32px);
    justify-content: space-between;
    align-items: center;
  }
  @media all and (max-width: 1150px) {
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.div<{ theme: ColorTypes }>`
  font-size: clamp(24px, 5vw, 40px);
  color: ${props => props.theme.main};
  font-weight: bold;
  text-align: center;
  z-index: 1;

  @media all and (max-width: 500px) {
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media all and (max-width: 1450px) {
    justify-content: center;
    align-items: center;
  }
  @media all and (max-width: 1150px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Remind = styled.div<{ theme: ColorTypes }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.main};
  text-decoration: underline;
  font-size: ${common.fontSize.fs24};
  margin-top: 3rem;
  transform: scale(1);

  @media screen and (max-width: 500px) {
    font-size: ${common.fontSize.fs20};
    transform: scale(0.7);
  }
`;

const Section = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  @media screen and (max-width: 1150px) {
    margin-bottom: 5rem;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 5rem;
    width: 100vw;
  }
`;

export const getServerSideProps: GetServerSideProps = async context => {
  const cookieString = context.req.headers.cookie || '';
  const cookies = useCookie(cookieString);
  const token = cookies.Authorization;
  const queryClinet = new QueryClient();
  const date = new Date();
  await Promise.all([
    queryClinet.prefetchQuery([REMIND], () => useGetUsersRemind(token)),
    queryClinet.prefetchQuery([DIARIES], () =>
      useGetDiariesCalendars(
        `${date.getFullYear()}-${
          date.getMonth() + 1 < 10
            ? String(`0${date.getMonth() + 1}`)
            : date.getMonth() + 1
        }`,
        token,
      ),
    ),
    queryClinet.prefetchQuery([CHALLENGE], () => useGetUsersChallenge(token)),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClinet),
    },
  };
};

function Diary() {
  const { data, isLoading } = useQuery<
    AxiosResponse<RemindResponse>,
    AxiosError<ErrorResponse>,
    RemindResponse
  >([REMIND], () => useGetUsersRemind(getCookie('Authorization')), {
    keepPreviousData: true,
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const nowYear = useDate().year;
  const nowMonth = useDate().month;
  const theme = useTheme();
  const [year, setYear] = useState(nowYear);
  const [month, setMonth] = useState(nowMonth);
  const ball = useBall();

  return (
    <DirayPage theme={theme}>
      <Header />
      <JellyList ball={ball} />
      <Container>
        <Title theme={theme}>
          {year}년 {month}월
        </Title>
        <SectionContainer>
          <Section>
            <Select
              setYear={setYear}
              year={year}
              setMonth={setMonth}
              month={month}
            />
            <Calendar year={year} month={month} />
            <Palette />
          </Section>
          <Section>
            <Challenge />
            <CreateButton />
            {!isLoading && Boolean(data) && (
              <Remind theme={theme}>
                <Image
                  src="/assets/img/common/remind.svg"
                  width={40}
                  height={40}
                  alt="remind"
                />
                <div>&nbsp;1년 전 나의 일기를 확인해 보세요 :&#41;</div>
              </Remind>
            )}
          </Section>
        </SectionContainer>
      </Container>
    </DirayPage>
  );
}

export default Diary;
