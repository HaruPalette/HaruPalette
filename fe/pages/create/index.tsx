import styled from '@emotion/styled';
import Pulse from '../../components/animation/Pulse';
import HaruButton from '../../components/button/HaruButton';
import HomeButton from '../../components/button/HomeButton';
import WeatherButton from '../../components/button/WeatherButton';
import { TALK_BUTTON } from '../../constants/button';

function Create() {
  return (
    <CreatePage>
      <HomeButton></HomeButton>
      <WeatherButton></WeatherButton>
      <Pulse />
      <CreatePageContainer>
        <HaruButton buttonData={TALK_BUTTON} />
      </CreatePageContainer>
    </CreatePage>
  );
}

export default Create;

const CreatePage = styled.div``;

const CreatePageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  padding: 0 10rem;
`;
