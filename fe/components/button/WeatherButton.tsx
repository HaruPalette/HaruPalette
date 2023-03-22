import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { WEATHER_LIST } from '../../constants/weather';
import useTheme from '../../hooks/useTheme';
import useWeather from '../../hooks/useWeather';

function WeatherButton() {
  const theme = useTheme();
  const newWeather = useWeather();
  const [curWeather, setcurWeather] = useState(newWeather);

  const handleCurWeather = (weather: string) => {
    setcurWeather(weather);
  };

  useEffect(() => {
    setcurWeather(newWeather);
  }, [newWeather]);

  return (
    <WeatherContainer theme={theme}>
      {Object.entries(WEATHER_LIST).map((weather, idx) =>
        curWeather === weather[0] ? (
          <>
            <CurWeatherIcon key={idx}>
              <Image src={weather[1]} width={32} height={32} alt={weather[0]} />
            </CurWeatherIcon>
          </>
        ) : (
          <>
            <WeatherIcon key={idx} onClick={() => handleCurWeather(weather[0])}>
              <Image src={weather[1]} width={32} height={32} alt={weather[0]} />
            </WeatherIcon>
          </>
        ),
      )}
    </WeatherContainer>
  );
}

export default WeatherButton;

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

  position: absolute;
  top: 7rem;
  right: 17rem;

  @media all and (max-width: 960px) {
    right: calc(50vw - 8.5rem);
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
`;
