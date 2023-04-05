import { useEffect } from 'react';
import { useAppDispatch } from './reduxHook';
import { changeWeatherSuccess } from '../store/modules/weather';

type Position = {
  coords: {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
  };
  timestamp: number;
};

const useWeather = () => {
  const API_KEY = '29fad2dad33c72a1e610d42a9b29e2ac';
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onGeoOk = (position: Position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          let curWeather = data.weather[0].main;

          if (curWeather === 'Clear') {
            curWeather = 'Clear';
          } else if (
            curWeather === 'Rain' ||
            curWeather === 'Drizzle' ||
            curWeather === 'Thunderstorm'
          ) {
            curWeather = 'Rain';
          } else if (curWeather === 'Snow') {
            curWeather = 'Snow';
          } else {
            curWeather = 'Clouds';
          }
          dispatch(changeWeatherSuccess(curWeather));
        });
    };

    const onGeoError = () => {
      alert("Can't find you.");
    };

    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, []);
};

export default useWeather;
