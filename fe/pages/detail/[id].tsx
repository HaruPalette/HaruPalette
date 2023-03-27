import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { DiaryData } from '../../types/diariesTypes';
import Diary from '../../components/diary/Diary';
import KakaoShareButton from '../../components/button/KakaoShareButton';
import SaveImageButton from '../../components/button/SaveImageButton';
import Header from '../../components/common/Header';

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 5rem);
  padding: 5rem 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const ButtonList = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

function Detail() {
  const [save, setSave] = useState(false);
  const [share, setShare] = useState(false);

  // axios로 받아올 일기 상세조회
  const diary: DiaryData = {
    diaryId: 1,
    date: '2023-03-12',
    contents:
      '오늘은 팀 사진을 찍었다. 사진을 보았는데 정말 인간지네 같다. 잊지 못할 것 같은 하루다.',
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
    <>
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
    </>
  );
}

export default Detail;
