import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import { DiaryData } from '../../types/diariesTypes';
import Diary from '../../components/diary/Diary';
import KakaoShareButton from '../../components/button/KakaoShareButton';
import SaveImageButton from '../../components/button/SaveImageButton';
import Header from '../../components/common/Header';
import useTheme from '../../hooks/useTheme';
import JellyList from '../../components/common/JellyList';

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
  justify-content: center;
  align-items: center;

  @media all and (max-width: 960px) {
    flex-direction: column;
  }
  @media all and (max-width: 500px) {
    flex-direction: column;
  }
`;

const ButtonList = styled.div`
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  transform: scale(1);

  @media all and (max-width: 960px) {
    height: 10rem;
    margin-bottom: 2rem;
  }

  @media all and (max-width: 500px) {
    transform: scale(0.65);
    margin-top: -150px;
    margin-bottom: 1rem;
  }
`;

function Detail() {
  const [save, setSave] = useState(false);
  const [share, setShare] = useState(false);

  const theme = useTheme();

  // axios로 받아올 일기 상세조회
  const diary: DiaryData = {
    diaryId: 1,
    date: '2023-03-12',
    contents:
      '오늘은 팀 사진을 찍었다. 사진을 보았는데 정말 인간지네 같다. 잊지 못할 것 같은 하루다. 오늘은 팀 사진을 찍었다. 사진을 보았는데 정말 인간지네 같다. 잊지 못할 것 같은 하루다. 오늘은 팀 사진을 찍었다. 사진을 보았는데 정말 인간지네 같다. 잊지 못할 것 같은 하루다.',
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
  useEffect(() => {
    //   이걸로 상세조회 요청 (일기 PK값)
    console.log(window.location.href.split('detail/')[1]);
  }, []);
  return (
    <DetailPage theme={theme}>
      <JellyList />
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
        <ButtonList>
          <SaveImageButton setSave={setSave} />
          <KakaoShareButton setShare={setShare} />
        </ButtonList>
      </Container>
    </DetailPage>
  );
}

export default Detail;
