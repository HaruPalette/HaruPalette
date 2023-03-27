/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-array-index-key */
import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import Pulse from '../../components/animation/Pulse';
import ScriptTalk from '../../components/animation/ScriptTalk';
import HomeButton from '../../components/button/HomeButton';
import WeatherButton from '../../components/button/WeatherButton';
import Model from '../../components/common/Model';
import RecodeBar from '../../components/create/RecodeBar';
import TalkButton from '../../components/create/TalkButton';
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
  align-items: flex-end;
  justify-content: center;

  padding: 0 10rem;
`;

const CreateHeader = styled.div`
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 2rem;

  width: calc(100vw - 32px);
  padding: 0 1rem;

  z-index: 1;
`;

const TestRecode = styled.ul`
  position: absolute;
  top: 80vh;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;
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
      <Pulse />
      <CreateHeader>
        <HomeButton />
        <WeatherButton />
      </CreateHeader>
      <CreatePageContainer>
        <ScriptTalk />
        <Model />
        {isRecode ? (
          <RecodeBar audioRecorder={audioRecorder} />
        ) : (
          <TalkButton audioRecorder={audioRecorder} />
        )}
        <TestRecode>
          {audioRecorder.recordedChunks.map((chunk, index) => (
            <li key={index}>
              <audio controls src={URL.createObjectURL(chunk)} />
            </li>
          ))}
        </TestRecode>
      </CreatePageContainer>
    </CreatePage>
  );
}

export default Create;
