import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import { DiaryData } from '../../types/diariesTypes';
import Diary from '../../components/diary/Diary';
import SaveImageButton from '../../components/button/SaveImageButton';
import Header from '../../components/common/Header';
import useTheme from '../../hooks/useTheme';
import JellyList from '../../components/common/JellyList';
import DeleteButton from '../../components/button/DeleteButton';
import Horizontal from '../../components/progressbar/Horizontal';
import { common } from '../../styles/theme';
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

function Detail() {
  const [save, setSave] = useState(false);
  const [share, setShare] = useState(false);

  const ball = useBall();
  const theme = useTheme();

  // axios로 받아올 일기 상세조회
  const diary: DiaryData = {
    diaryId: 1,
    date: '2023-03-12',
    contents:
      '오늘은 팀 사진을 찍었다. 사진을 보았는데 정말 인간지네 같다. 잊지 못할 것 같은 하루다. 오늘은 팀 사진을 찍었다. 사진을 보았는데 정말 인간지네 같다. 잊지 못할 것 같은 하루다. 오늘은 팀 사진을 찍었다. 사진을 보았는데 정말 인간지네 같다. 잊지 못할 것 같은 하루다. ',
    weather: 'Clear',
    ename: 'haru',
    answer: `너는 좋은 일들만 끌어당겨
        그것도 아주 많이! 🧲`,
    image:
      'http://dimg.donga.com/ugc/CDB/WEEKLY/Article/5b/b3/22/85/5bb32285000ed2738de6.jpg',
    stickerCode: 'nice',
    neutral: 60,
    happy: 20,
    surprise: 10,
    anger: 5,
    disgust: 1,
    anxiety: 2,
    sadness: 2,
  };
  const emotion = [
    {
      emotion: '행복',
      icon: '/assets/img/common/happy.svg',
      percent: diary.happy,
      color: '#FFEE94',
    },
    {
      emotion: '슬픔',
      icon: '/assets/img/common/sadness.svg',
      percent: diary.sadness,
      color: '#ADDCFF',
    },
    {
      emotion: '분노',
      icon: '/assets/img/common/anger.svg',
      percent: diary.anger,
      color: '#FF9393',
    },
    {
      emotion: '불안',
      icon: '/assets/img/common/anxiety.svg',
      percent: diary.anxiety,
      color: '#ECC9A0',
    },
    {
      emotion: '중립',
      icon: '/assets/img/common/neutral.svg',
      percent: diary.neutral,
      color: '#DFDFDF',
    },
    {
      emotion: '당황',
      icon: '/assets/img/common/surprise.svg',
      percent: diary.surprise,
      color: '#DDC0E8',
    },
    {
      emotion: '혐오',
      icon: '/assets/img/common/disgust.svg',
      percent: diary.disgust,
      color: '#68B570',
    },
  ];
  useEffect(() => {
    //   이걸로 상세조회 요청 (일기 PK값)
    console.log(window.location.href.split('detail/')[1]);
  }, []);
  return (
    <DetailPage theme={theme}>
      <JellyList ball={ball} />
      <Header />
      <Container>
        <Diary
          diary={diary}
          type="view"
          save={save}
          share={share}
          setSave={setSave}
          setShare={setShare}
        />
        <DetailList>
          <EmotionList>
            {emotion.map(item => {
              return (
                <>
                  <Emotion color={item.color}>
                    <Image src={item.icon} width={40} height={40} alt="icon" />
                    <div>
                      {item.emotion} {item.percent}%
                    </div>
                  </Emotion>
                  <Horizontal percent={item.percent} color={item.color} />
                </>
              );
            })}
          </EmotionList>
          <ButtonList>
            <SaveImageButton setSave={setSave} />
            <DeleteButton />
          </ButtonList>
        </DetailList>
      </Container>
    </DetailPage>
  );
}

export default Detail;
