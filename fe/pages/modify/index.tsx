import { useState, useEffect } from 'react';
import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import JellyList from '../../components/common/JellyList';
import Diary from '../../components/diary/Diary';
import ScriptList from '../../components/modify/ScriptList';
import useTheme from '../../hooks/useTheme';
import { DiaryData } from '../../types/diariesTypes';
import { useDate } from '../../hooks/useDate';
import { selectProfile } from '../../store/modules/profile';
import { selectScript } from '../../store/modules/script';
import Sticker from '../../components/modify/Sticker';
import { common } from '../../styles/theme';
import { useAppSelector } from '../../hooks/reduxHook';
import { useBall } from '../../hooks/useBall';
import useImage from '../../hooks/useImage';

const ModifyPage = styled.div<{ theme: ColorTypes }>`
  width: 100vw;
  background: ${props => props.theme.background};
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: auto;

  @media all and (max-width: 1450px) {
    height: auto;
    flex-direction: column;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: scale(1);

  @media all and (max-width: 1450px) {
    margin: 2rem;
  }
  @media all and (max-width: 500px) {
    margin: 0;
  }
`;

const Title = styled.div<{ theme: ColorTypes }>`
  color: ${props => props.theme.main};
  font-size: ${common.fontSize.fs20};
  font-weight: bold;
  transform: scale(1);

  @media all and (max-width: 500px) {
    transform: scale(0.65);
    margin: 2rem;
  }
`;

function Modify() {
  const [nowSticker, setNowSticker] = useState('empty');
  const [nowScript, setNowScript] = useState('로딩 중 ...');
  const theme = useTheme();
  const date = useDate();
  const ball = useBall();

  const scriptArr: string[] = [...useAppSelector(selectScript).nowScript];
  const chr = useAppSelector(selectProfile).chrName;
  const image = useImage();

  useEffect(() => {
    let temp = nowScript;
    if (scriptArr.length > 0) {
      temp = '';
      for (let i = 0; i < scriptArr.length; i++) {
        temp += scriptArr[i];
      }
    }
    setNowScript(temp);
  }, [scriptArr]);

  // axios로 받아올 일기 상세조회
  const diary: DiaryData = {
    diaryId: 1,
    date: `${date.year}-${date.month}-${date.date}`,
    contents: `${nowScript}`,
    weather: 'Clear',
    friendEname: chr,
    answer: '',
    image,
    stickerCode: `${nowSticker}`,
    neutral: 60,
    happy: 20,
    surprise: 10,
    anger: 5,
    disgust: 1,
    anxiety: 2,
    sadness: 2,
  };

  return (
    <ModifyPage theme={theme}>
      <JellyList ball={ball} />
      <Container>
        <Section>
          <Title theme={theme}>일기장 미리보기</Title>
          <Diary
            diary={diary}
            type="modify"
            save={false}
            share={false}
            setSave={null}
            setShare={null}
            stickerCode={nowSticker}
          />
        </Section>
        <Section>
          <Title theme={theme}>잘못된 내용이 있다면 수정해주세요 !</Title>
          <ScriptList />
        </Section>
        <Section>
          <Title theme={theme}>
            원하는 스티커를 골라 일기장을 꾸며보세요 !
          </Title>
          <Sticker setNowSticker={setNowSticker} nowSticker={nowSticker} />
        </Section>
      </Container>
    </ModifyPage>
  );
}

export default Modify;
