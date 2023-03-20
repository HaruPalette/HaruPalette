import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useWeather from '../../hooks/useWeather';

function WeatherButton() {
  const newWeather = useWeather();
  const [curWeather, setcurWeather] = useState(newWeather);

  const weatherList = {
    Clear: 'vercel.svg',
    Clouds: 'vercel.svg',
    Rain: 'vercel.svg',
    Snow: 'vercel.svg',
  };

  const handleCurWeather = (weather: string) => {
    console.log(newWeather);
    setcurWeather(weather);
    console.log(curWeather);
  };

  useEffect(() => {
    setcurWeather(newWeather);
  }, [newWeather]);

  return (
    <WeatherContainer>
      {Object.entries(weatherList).map((weather, idx) =>
        curWeather === weather[0] ? (
          <>
            <CurWeatherIcon key={idx}>
              <Image src={weather[1]} width={40} height={40} alt={weather[0]} />
              <div>{weather[0]}</div>
            </CurWeatherIcon>
          </>
        ) : (
          <>
            <WeatherIcon key={idx} onClick={() => handleCurWeather(weather[0])}>
              <Image src={weather[1]} width={40} height={40} alt={weather[0]} />
              <div>{weather[0]}</div>
            </WeatherIcon>
          </>
        ),
      )}
    </WeatherContainer>
  );
}

export default WeatherButton;

const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 20rem;
  height: 5rem;

  padding: 0 1rem;

  border: 1px solid '#000';
  border-radius: 50%;
`;

const CurWeatherIcon = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0;
  border: 0;

  background-color: #ff0099;
`;

const WeatherIcon = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0;
  border: 0;

  background-color: #e8bfdc;
`;
