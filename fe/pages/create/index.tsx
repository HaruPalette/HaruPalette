import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import Pulse from '../../components/animation/Pulse';
import ScriptTalk from '../../components/animation/ScriptTalk';
import CherryBlossom from '../../components/animation/CherryBlossom';
import Cloud from '../../components/animation/Cloud';
import Rain from '../../components/animation/Rain';
import Snow from '../../components/animation/Snow';
import HomeButton from '../../components/button/HomeButton';
import WeatherButton from '../../components/button/WeatherButton';
import Model from '../../components/common/ModelCreate';
import RecodeBar from '../../components/create/RecodeBar';
import TalkButton from '../../components/create/TalkButton';
import { SCRIPT } from '../../constants/script';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import useAudioRecorder from '../../hooks/useAudioRecorder';
import useTheme from '../../hooks/useTheme';
import { selectProfile } from '../../store/modules/profile';
import {
  resetScriptIndexSuccess,
  selectScript,
} from '../../store/modules/script';
import {
  changeWeatherSuccess,
  selectWeather,
} from '../../store/modules/weather';
import useWeather from '../../hooks/useWeather';
import { ErrorResponse } from '../../types/commonTypes';
import { usePostDiariesScript } from '../../apis/diaries';
import { changeLinkSuccess } from '../../store/modules/menu';

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
  padding: 2rem;
`;

const CreateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100vw - 320px);
  position: relative;

  @media screen and (max-width: 960px) {
    width: calc(100vw - 32px);
  }
  padding: 0 1rem;

  z-index: 1;
`;

const ModelContainer = styled.div`
  scale: 0.8;
  height: 50vh;
`;

function Create() {
  const theme = useTheme();
  // const curSrciptIndex = useAppSelector(selectScript).curScriptIndex;
  const currCharName = useAppSelector(selectProfile).chrName;
  const isRecode = useAppSelector(selectScript).isRecoding;
  const reduxWeather = useAppSelector(selectWeather).curWeather;
  const weather = useWeather();
  const dispatch = useAppDispatch();

  const audioRecorder = useAudioRecorder();

  const mutation = useMutation<AxiosResponse<any>, AxiosError<ErrorResponse>>(
    [SCRIPT],
    usePostDiariesScript(),
  );

  useEffect(() => {
    mutation.mutate();
  }, []);

  useEffect(() => {
    dispatch(changeWeatherSuccess(weather));
  }, [weather]);

  useEffect(() => {
    dispatch(resetScriptIndexSuccess());
    navigator.mediaDevices.getUserMedia({ audio: true });
    return () => {
      audioRecorder.forceQuit();
    };
  }, []);

  useEffect(() => {
    dispatch(changeLinkSuccess('/create'));
  }, []);

  return (
    <CreatePage theme={theme}>
      {reduxWeather === 'Clear' && <CherryBlossom />}
      {reduxWeather === 'Clouds' && <Cloud />}
      {reduxWeather === 'Rain' && <Rain />}
      {reduxWeather === 'Snow' && <Snow />}
      <Pulse />
      <CreatePageContainer>
        <CreateHeader>
          <HomeButton />
          <WeatherButton />
        </CreateHeader>
        <ScriptTalk talkData={SCRIPT} type="create" />
        <ModelContainer>
          <Model data={currCharName} />
        </ModelContainer>
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
