import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { useGetUsersChallenge } from '../../apis/users';
import { CACHE_TIME, CHALLENGE, STALE_TIME } from '../../constants/api';
import { useDate, useNowDate } from '../../hooks/useDate';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';
import { ErrorResponse } from '../../types/commonTypes';
import { ChallengeData } from '../../types/usersTypes';
import { getCookie } from '../../utils/cookie';
import Horizontal from '../progressbar/Horizontal';

const ChallengeStyles = styled.div`
  width: 100%;
  transform: scale(1);
  margin-bottom: 3rem;

  @media screen and (max-width: 500px) {
    transform: scale(0.75);
    margin-top: -2rem;
  }
`;

const Title = styled.div<{ theme: ColorTypes }>`
  font-size: ${common.fontSize.fs20};
  color: ${props => props.theme.main};
  font-weight: bold;
`;

const CountStyles = styled.div<{ theme: ColorTypes }>`
  font-size: ${common.fontSize.fs20};
  color: ${props => props.theme.main};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;
  transition: all 0s;
`;

function Challenge() {
  const theme = useTheme();
  const nowDate: number = useNowDate(useDate().year, useDate().month);
  const { data } = useQuery<
    AxiosResponse<ChallengeData>,
    AxiosError<ErrorResponse>,
    ChallengeData
  >([CHALLENGE], () => useGetUsersChallenge(getCookie('Authorization')), {
    keepPreviousData: true,
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  return (
    <>
      <ChallengeStyles>
        <Title theme={theme}>이번 주 도전 과제</Title>
        <Horizontal
          percent={Math.floor(((data?.weekCnt ? data.weekCnt : 0) / 7) * 100)}
          color={theme.primary20}
        />
        <CountStyles theme={theme}>
          <div>{data?.weekCnt}회</div>
          <div>7회</div>
        </CountStyles>
      </ChallengeStyles>
      <ChallengeStyles>
        <Title theme={theme}>이번 달 도전 과제</Title>
        <Horizontal
          percent={Math.floor(
            ((data?.monthCnt ? data.monthCnt : 0) / nowDate) * 100,
          )}
          color={theme.primary20}
        />
        <CountStyles theme={theme}>
          <div>{data?.monthCnt}회</div>
          <div>{nowDate}회</div>
        </CountStyles>
      </ChallengeStyles>
    </>
  );
}

export default Challenge;
