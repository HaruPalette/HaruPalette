import { ButtonData } from '../types/commonTypes';

export const CHOOSE_BUTTON: ButtonData = {
  width: 3,
  height: 2,
  context: '선택하기',
  fs: 1,
  image: '',
};

export const START_BUTTON: ButtonData = {
  width: 10,
  height: 3,
  fs: 0,
  context: '시작하기',
  image: '',
};

export const TALK_BUTTON: ButtonData = {
  width: 10,
  height: 3,
  context: '대화하기',
  fs: 1.5,
  image: `assets/img/common/mic.svg`,
};

export const STOP_BUTTON: ButtonData = {
  width: 5,
  height: 3,
  context: '종료하기',
  fs: 2,
  image: '',
};

export const WRITE_BUTTON: ButtonData = {
  width: 10,
  height: 4,
  context: '일기작성하러가기',
  fs: 3,
  image: '',
};
