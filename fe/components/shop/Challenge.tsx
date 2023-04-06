import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import Round, { DiaryProps } from '../progressbar/Round';
import { useNowDate, useDate } from '../../hooks/useDate';
import { ErrorResponse } from '../../types/commonTypes';
import { getCookie } from '../../utils/cookie';
import { CACHE_TIME, STALE_TIME, CHALLENGE } from '../../constants/api';
import { useGetUsersChallenge } from '../../apis/users';
import { ChallengeData } from '../../types/usersTypes';

const Container = styled.div`
  position: relative;
  width: 45vw;
  height: 520px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media all and (min-width: 1411px) {
    margin-top: 20px;
    width: 45vw;
    padding: 0px 50px;
  }
  @media all and (max-width: 1410px) {
    margin-top: 20px;
    width: 45vw;
  }
  @media all and (max-width: 1220px) {
    margin-top: 20px;
    width: 45vw;
  }
  @media all and (max-width: 1150px) {
    margin-top: 20px;
    width: 50vw;
  }
  @media all and (max-width: 1000px) {
    margin-bottom: 100px;
    margin-top: 110px;
    width: 60vw;
  }
  @media all and (max-width: 840px) {
    width: 70vw;
  }
  @media all and (max-width: 700px) {
    width: 80vw;
  }

  @media all and (max-width: 620px) {
    width: 90vw;
  }
  @media all and (max-width: 560px) {
    width: 100vw;
    margin-top: 50px;
  }
  @media all and (max-width: 460px) {
    width: 100vw;
    height: auto;
    // justify-content: center;
  }
`;

function Challenge() {
  const { data } = useQuery<
    AxiosResponse<ChallengeData>,
    AxiosError<ErrorResponse>,
    ChallengeData
  >([CHALLENGE], () => useGetUsersChallenge(getCookie('Authorization')), {
    keepPreviousData: true,
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const diaryData: DiaryProps[] = [];
  diaryData[0] = {
    currCnt: data?.weekCnt ? data.weekCnt : 0,
    allCnt: 3,
    desc: data?.challengeList[0].contents
      ? data?.challengeList[0].contents
      : '주 3번 작성',
    color: 'primary20',
  };
  diaryData[1] = {
    currCnt: data?.weekCnt ? data.weekCnt : 0,
    allCnt: 5,
    desc: data?.challengeList[1].contents
      ? data?.challengeList[1].contents
      : '주 5번 작성',
    color: 'primary40',
  };
  diaryData[2] = {
    currCnt: data?.weekCnt ? data.weekCnt : 0,
    allCnt: 7,
    desc: data?.challengeList[2].contents
      ? data?.challengeList[2].contents
      : '주 7번 작성',
    color: 'primary60',
  };
  diaryData[3] = {
    currCnt: data?.monthCnt ? data.monthCnt : 0,
    allCnt: useNowDate(useDate().year, useDate().month),
    desc: data?.challengeList[3].contents
      ? data?.challengeList[3].contents
      : '연속 한달 작성',
    color: 'primary80',
  };

  const renderRound = () => {
    const renderRoundArr = diaryData.map((el: DiaryProps) => {
      return <Round key={el.desc} data={el} />;
    });
    return renderRoundArr;
  };

  return <Container>{renderRound()}</Container>;
}

export default Challenge;
