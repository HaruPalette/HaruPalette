import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import Pulse from '../../components/animation/Pulse';
import HaruButton from '../../components/button/HaruButton';
import HomeButton from '../../components/button/HomeButton';
import WeatherButton from '../../components/button/WeatherButton';
import Model from '../../components/common/Model';
import { TALK_BUTTON } from '../../constants/button';
import useTheme from '../../hooks/useTheme';

function Create() {
  const [step, setStep] = useState<number>(0);
  const theme = useTheme();

  return (
    <CreatePage theme={theme}>
      <HomeButton></HomeButton>
      <WeatherButton></WeatherButton>
      <Pulse />
      <CreatePageContainer>
        <Model />
        <HaruButton buttonData={TALK_BUTTON} />
      </CreatePageContainer>
    </CreatePage>
  );
}

export default Create;

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
