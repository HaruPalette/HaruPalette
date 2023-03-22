import {
  CommonTypes,
  HaruLight,
  HaruDark,
  ToriLight,
  ToriDark,
  GomiLight,
  GomiDark,
} from '@emotion/react';

export const common: CommonTypes = {
  colors: {
    secondary: '#888888',
    inheritBlack: '#000000',
    inheritWhite: '#ffffff',
    error: '#E76F51',
    warning: '#E9C46A',
    success: '#2A9D8F',
    disable: '#E5E5E5',
    dark: '#0A142E',
  },
  fontSize: {
    fs48: '3rem',
    fs40: '2.5rem',
    fs36: '2.25rem',
    fs32: '2rem',
    fs24: '1.5rem',
    fs20: '1.25rem',
    fs16: '1rem',
    fs12: '0.75rem',
  },
};

export const haruLight: HaruLight = {
  primary20: '#FFA6D6',
  primary40: '#ED62AD',
  primary60: '#C12D7D',
  primary80: '#6B1745',
  main: '#6B1745',
  sub: '#FFA6D6',
  background: '#ffffff',
  border: '#E5E5E5',
  color: '#000000',
  diaryBackground: 'rgba(255,166,214,0.2)',
};

export const haruDark: HaruDark = {
  primary20: '#FFA6D6',
  primary40: '#ED62AD',
  primary60: '#C12D7D',
  primary80: '#6B1745',
  main: '#FFA6D6',
  sub: '#ffffff',
  background: '#0A142E',
  border: '#ffffff',
  color: '#ffffff',
  diaryBackground: 'rgba(10, 20, 46, 0.4)',
};

export const toriLight: ToriLight = {
  primary20: '#D29763',
  primary40: '#CB7428',
  primary60: '#A35F23',
  primary80: '#5D340F',
  main: '#5D340F',
  sub: '#D29763',
  background: '#ffffff',
  border: '#E5E5E5',
  color: '#000000',
  diaryBackground: 'rgba(210, 151, 99, 0.2)',
};
export const toriDark: ToriDark = {
  primary20: '#D29763',
  primary40: '#CB7428',
  primary60: '#A35F23',
  primary80: '#5D340F',
  main: '#D29763',
  sub: '#ffffff',
  background: '#0A142E',
  border: '#ffffff',
  color: '#ffffff',
  diaryBackground: 'rgba(10, 20, 46, 0.4)',
};

export const gomiLight: GomiLight = {
  primary20: '#4FDC55',
  primary40: '#41BA46',
  primary60: '#338C37',
  primary80: '#1F5721',
  main: '#1F5721',
  sub: '#4FDC55',
  background: '#ffffff',
  border: '#E5E5E5',
  color: '#000000',
  diaryBackground: 'rgba(79, 220, 85, 0.2)',
};

export const gomiDark: GomiDark = {
  primary20: '#4FDC55',
  primary40: '#41BA46',
  primary60: '#338C37',
  primary80: '#1F5721',
  main: '#4FDC55',
  sub: '#ffffff',
  background: '#0A142E',
  border: '#ffffff',
  color: '#ffffff',
  diaryBackground: 'rgba(10, 20, 46, 0.4)',
};

export type ColorTheme = typeof haruLight;
