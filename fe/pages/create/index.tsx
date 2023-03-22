import Pulse from '../../components/animation/Pulse';
import HomeButton from '../../components/button/HomeButton';
import WeatherButton from '../../components/button/WeatherButton';

function Create() {
  return (
    <>
      <HomeButton></HomeButton>
      <WeatherButton></WeatherButton>
      <Pulse />
    </>
  );
}

export default Create;
