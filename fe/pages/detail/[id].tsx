import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { DiariesResponse, DiaryData } from '../../types/diariesTypes';
import Diary from '../../components/diary/Diary';
import SaveImageButton from '../../components/button/SaveImageButton';
import Header from '../../components/common/Header';
import useTheme from '../../hooks/useTheme';
import JellyList from '../../components/common/JellyList';
import DeleteButton from '../../components/button/DeleteButton';
import Horizontal from '../../components/progressbar/Horizontal';
import { common } from '../../styles/theme';
import useCookie from '../../hooks/useCookie';
import { CACHE_TIME, DIARIES, STALE_TIME } from '../../constants/api';
import { useGetDiaries } from '../../apis/diaries';
import { ErrorResponse } from '../../types/commonTypes';
import { getCookie } from '../../utils/cookie';
import { useBall } from '../../hooks/useBall';

const DetailPage = styled.div<{ theme: ColorTypes }>`
  width: 100vw;
  height: auto;
  background: ${props => props.theme.background};
`;

const Container = styled.div`
  width: 100vw;
  height: auto;
  padding-top: 5.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 2rem;

  @media all and (max-width: 960px) {
    flex-direction: column;
  }
  @media all and (max-width: 500px) {
    flex-direction: column;
  }
`;
const DetailList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  transform: scale(1);

  @media all and (max-width: 960px) {
    margin-bottom: 2rem;
  }

  @media all and (max-width: 500px) {
    transform: scale(0.65);
    margin-top: -150px;
    margin-bottom: 1rem;
  }
`;
const EmotionList = styled.div`
  width: 100%;
`;

const EmotionItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Emotion = styled.div<{ color: string }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 0.5rem 0;
  color: ${props => props.color};
  font-size: ${common.fontSize.fs20};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1.5rem;

  transform: scale(1);

  @media all and (max-width: 500px) {
    transform: scale(0.65);
  }
`;

export const getServerSideProps: GetServerSideProps = async context => {
  const { diaryId } = context.query;
  const cookieString = context.req.headers.cookie || '';
  const cookies = useCookie(cookieString);
  const token = cookies.Authorization;
  const queryClinet = new QueryClient();
  await Promise.all([
    queryClinet.prefetchQuery([DIARIES], () =>
      useGetDiaries(Number(diaryId), token),
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClinet),
    },
  };
};

function Detail() {
  const [save, setSave] = useState(false);
  const [share, setShare] = useState(false);
  const diaryId = window.location.href.split('detail/')[1];
  const ball = useBall();
  const theme = useTheme();

  const { data } = useQuery<
    AxiosResponse<DiariesResponse>,
    AxiosError<ErrorResponse>,
    DiaryData
  >(
    [DIARIES],
    () => useGetDiaries(Number(diaryId), getCookie('Authorization')),
    {
      keepPreviousData: true,
      staleTime: STALE_TIME,
      cacheTime: CACHE_TIME,
    },
  );

  const emotion = [
    {
      emotion: '행복',
      icon: '/assets/img/common/happy.svg',
      percent: data?.happy,
      color: '#FFEE94',
    },
    {
      emotion: '슬픔',
      icon: '/assets/img/common/sadness.svg',
      percent: data?.sadness,
      color: '#ADDCFF',
    },
    {
      emotion: '분노',
      icon: '/assets/img/common/anger.svg',
      percent: data?.anger,
      color: '#FF9393',
    },
    {
      emotion: '불안',
      icon: '/assets/img/common/anxiety.svg',
      percent: data?.anxiety,
      color: '#ECC9A0',
    },
    {
      emotion: '중립',
      icon: '/assets/img/common/neutral.svg',
      percent: data?.neutral,
      color: '#DFDFDF',
    },
    {
      emotion: '당황',
      icon: '/assets/img/common/surprise.svg',
      percent: data?.surprise,
      color: '#DDC0E8',
    },
    {
      emotion: '혐오',
      icon: '/assets/img/common/disgust.svg',
      percent: data?.disgust,
      color: '#68B570',
    },
  ];

  return (
    <DetailPage theme={theme}>
      <JellyList ball={ball} />
      <Header />
      <Container>
        <Diary
          diary={data}
          type="view"
          save={save}
          share={share}
          setSave={setSave}
          setShare={setShare}
          stickerCode={null}
        />
        <DetailList>
          <EmotionList>
            {emotion.map(item => {
              return (
                <EmotionItem key={item.emotion}>
                  <Emotion color={item.color}>
                    <Image src={item.icon} width={40} height={40} alt="icon" />
                    <div>
                      {item.emotion} {item.percent}%
                    </div>
                  </Emotion>
                  <Horizontal
                    percent={item.percent ? item.percent : 0}
                    color={item.color}
                  />
                </EmotionItem>
              );
            })}
          </EmotionList>
          <ButtonList>
            <SaveImageButton setSave={setSave} />
            <DeleteButton date={data?.date} diaryId={Number(diaryId)} />
          </ButtonList>
        </DetailList>
      </Container>
    </DetailPage>
  );
}

export default Detail;
