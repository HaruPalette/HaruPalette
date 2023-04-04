import { weatherTypes } from '@emotion/react';

export const weatherLight: weatherTypes = {
  clear:
    'linear-gradient(to bottom, rgba(0, 169, 217, 0.7) 0%, rgba(220, 248, 255, 1) 70%, rgba(255, 217, 220, 0.9) 100%);',
  clouds:
    'linear-gradient(to bottom, rgba(0, 169, 217, 0.7) 0%, rgba(0, 169, 217, 0.2) 90%);',
  rain: 'linear-gradient(to bottom, rgba(0, 74, 120, 0.8) 0%, rgba(0, 169, 217, 0.2) 95%, rgba(150, 50, 0, 0.7) 100%);',

  snow: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(220, 248, 255, 1) 5%, rgba(0, 169, 217, 0.8) 70%);',
};

export const weatherDark: weatherTypes = {
  clear:
    'linear-gradient(to bottom, rgba(10, 20, 46, 1) 0%, rgba(10, 20, 46, 0.7) 80%, rgba(200, 167, 160, 0.9) 100%);',
  clouds:
    "url('/assets/img/weather/stars.png'), linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 70%, rgba(173, 168, 168, 0.7) 90%);",
  rain: 'linear-gradient(to bottom, #222b33, #12171b);',
  snow: 'linear-gradient(to top, rgba(255, 255, 255, 0.7) 0%, rgba(0, 0, 0, 0.5) 5%, rgba(0, 0, 0, 0.9) 70%);',
};
