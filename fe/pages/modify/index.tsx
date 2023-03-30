import { useState, useEffect } from 'react';
import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
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

const ModifyPage = styled.div<{ theme: ColorTypes }>`
  width: 100vw;
  height: 100vh;
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
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Title = styled.div<{ theme: ColorTypes }>`
  color: ${props => props.theme.main};
  font-size: ${common.fontSize.fs20};
  font-weight: bold;
`;

function Modify() {
  const [nowSticker, setNowSticker] = useState('empty');
  const [nowScript, setNowScript] = useState('로딩 중 ...');
  const theme = useTheme();
  const date = useDate();
  // const len = useSelector(selectScript).curScriptIndex;

  const scriptArr: string[] = [...useSelector(selectScript).nowScript];
  console.log('리덕스 스크립트', scriptArr);
  useEffect(() => {
    console.log('리덕스 스크립트 렌더링', scriptArr);
    let temp = nowScript;
    if (scriptArr.length > 0) {
      temp = '';
      for (let i = 0; i < scriptArr.length; i++) {
        temp += scriptArr[i];
      }
    }
    setNowScript(temp);
    console.log('리덕스에서 받아온 문자열', temp);
  }, [scriptArr]);

  // axios로 받아올 일기 상세조회
  const diary: DiaryData = {
    diaryId: 1,
    date: `${date.year}-${date.month}-${date.date}`,
    contents: `${nowScript}`,
    weather: 'Clear',
    ename: `${useSelector(selectProfile).chrName}`,
    answer: '',
    image:
      'http://dimg.donga.com/ugc/CDB/WEEKLY/Article/5b/b3/22/85/5bb32285000ed2738de6.jpg',
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
      <JellyList />
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
