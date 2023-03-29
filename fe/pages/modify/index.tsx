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

function Modify() {
  const theme = useTheme();
  const date = useDate();
  const len = useSelector(selectScript).curScriptIndex;

  const scriptArr: string[] = [];
  let script = '로딩 중 ...';
  if (scriptArr.length > 0 && scriptArr.length < len) {
    script = '';
    for (let i = 0; i < scriptArr.length; i++) {
      script += scriptArr[i];
    }
  }
  console.log(script);

  // axios로 받아올 일기 상세조회
  const diary: DiaryData = {
    diaryId: 1,
    date: `${date.year}-${date.month}-${date.date}`,
    contents: `${script}`,
    weather: 'Clear',
    ename: `${useSelector(selectProfile).chrName}`,
    answer: '',
    image:
      'http://dimg.donga.com/ugc/CDB/WEEKLY/Article/5b/b3/22/85/5bb32285000ed2738de6.jpg',
    stickerCode: 'ampty',
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
        <Diary
          diary={diary}
          type="modify"
          save={false}
          share={false}
          setSave={null}
          setShare={null}
        />
        <ScriptList />
        <Sticker />
      </Container>
    </ModifyPage>
  );
}

export default Modify;
