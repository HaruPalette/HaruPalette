/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-array-index-key */
import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import Pulse from '../../components/animation/Pulse';
import ScriptTalk from '../../components/animation/ScriptTalk';
import Rain from '../../components/animation/Rain';
import HomeButton from '../../components/button/HomeButton';
import WeatherButton from '../../components/button/WeatherButton';
import Model from '../../components/common/Model';
import RecodeBar from '../../components/create/RecodeBar';
import TalkButton from '../../components/create/TalkButton';
import { SCRIPT } from '../../constants/script';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import useAudioRecorder from '../../hooks/useAudioRecorder';
import useTheme from '../../hooks/useTheme';
import {
  resetScriptIndexSuccess,
  selectScript,
} from '../../store/modules/script';

const CreatePage = styled.div<{ theme: ColorTypes }>`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.background};
`;

const CreatePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  z-index: 1;
  padding: 2rem 0;
`;

const CreateHeader = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;

  width: calc(100vw - 32px);
  padding: 0 1rem;

  z-index: 1;
`;

function Create() {
  const theme = useTheme();
  // const curSrciptIndex = useAppSelector(selectScript).curScriptIndex;
  const isRecode = useAppSelector(selectScript).isRecoding;
  const dispatch = useAppDispatch();

  const audioRecorder = useAudioRecorder();

  useEffect(() => {
    dispatch(resetScriptIndexSuccess());
  }, []);

  return (
    <CreatePage theme={theme}>
      <Rain />
      <Pulse />
      <CreatePageContainer>
        <CreateHeader>
          <HomeButton />
          <WeatherButton />
        </CreateHeader>
        <ScriptTalk script={SCRIPT} />
        <Model />
        {isRecode ? (
          <RecodeBar audioRecorder={audioRecorder} />
        ) : (
          <TalkButton audioRecorder={audioRecorder} />
        )}
      </CreatePageContainer>
    </CreatePage>
  );
}

export default Create;
