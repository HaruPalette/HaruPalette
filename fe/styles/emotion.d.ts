import '@emotion/react';

interface Colors {
  secondary: string;
  inheritBlack: string;
  inheritWhite: string;
  error: string;
  warning: string;
  success: string;
  disable: string;
  dark: string;
}

interface FontSize {
  fs48: string;
  fs40: string;
  fs36: string;
  fs32: string;
  fs24: string;
  fs20: string;
  fs16: string;
  fs12: string;
  fs8: string;
}

declare module '@emotion/react' {
  export interface CommonTypes {
    colors: Colors;
    fontSize: FontSize;
  }
  export interface ColorTypes {
    primary20: string;
    primary40: string;
    primary60: string;
    primary80: string;
    main: string;
    sub: string;
    background: string;
    border: string;
    color: string;
    diaryBackground: string;
    shopBackground: string;
  }
}
