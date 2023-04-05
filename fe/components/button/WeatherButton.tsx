import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import WEATHER_LIST from '../../constants/weather';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import useWeather from '../../hooks/useWeather';
import {
  changeWeatherSuccess,
  selectWeather,
} from '../../store/modules/weather';

const WeatherContainer = styled.div<{ theme: ColorTypes }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 17rem;
  height: 3rem;

  border: 1px solid ${props => props.theme.border};
  border-radius: 3rem;
  background: ${props => props.theme.background};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);

  z-index: 1;
  @media all and (max-width: 960px) {
    right: calc(50vw - 8.5rem);
  }
  @media all and (max-width: 480px) {
    width: 14rem;
    height: 2rem;
    top: 2rem;
    right: 2rem;
  }
`;

const CurWeatherIcon = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  border: 0;
  margin: 0.5rem 1rem;
`;

const WeatherIcon = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  border: 0;
  margin: 0.5rem 1rem;
  opacity: 0.2;
  will-change: all;
  :hover {
    opacity: 0.4;
  }
`;

const WeatherImage = styled(Image)`
  width: 2rem;
  height: 2rem;

  @media all and (max-width: 480px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

function WeatherButton() {
  const theme = useTheme();
  const curWeatherData = useAppSelector(selectWeather).curWeather;
  const dispatch = useAppDispatch();

  useWeather();
  const handleCurWeather = (weather: string) => {
    dispatch(changeWeatherSuccess(weather));
  };

  return (
    <WeatherContainer theme={theme}>
      {Object.entries(WEATHER_LIST).map(weather =>
        curWeatherData === weather[0] ? (
          <CurWeatherIcon type="button" key={weather[0]}>
            <WeatherImage
              src={weather[1]}
              width={32}
              height={32}
              alt={weather[0]}
            />
          </CurWeatherIcon>
        ) : (
          <WeatherIcon
            type="button"
            key={weather[0]}
            onClick={() => handleCurWeather(weather[0])}
          >
            <WeatherImage
              src={weather[1]}
              width={32}
              height={32}
              alt={weather[0]}
            />
          </WeatherIcon>
        ),
      )}
    </WeatherContainer>
  );
}

export default WeatherButton;
