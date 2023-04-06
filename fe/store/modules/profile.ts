import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

// state type
export interface profileSlice {
  image: string;
  chrName: string;
  mainChrName: string;
  chrPK: number;
  isLogin: boolean;
  isToday: boolean;
  isPlay: boolean;
}

// 초기 상태 정의
const initialState: profileSlice = {
  image: '',
  chrName: 'haru',
  mainChrName: 'haru',
  chrPK: 1,
  isLogin: false,
  isToday: false,
  isPlay: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      const temp = state;
      temp.image = action.payload.image;
      temp.chrName = action.payload.friendEname;
      temp.chrPK = action.payload.friendId;
      temp.isLogin = true;
      temp.isToday = action.payload.isToday;
    },
    logoutSuccess(state) {
      const temp = state;
      temp.image = '';
      temp.chrName = 'haru';
      temp.chrPK = 1;
      temp.isLogin = false;
      temp.isToday = false;
      temp.isPlay = false;
    },
    setCharName(state, action) {
      const temp = state;
      temp.chrName = action.payload;
    },
    setCharPK(state, action) {
      const temp = state;
      temp.chrPK = action.payload;
    },
    changeMainChar(state, action) {
      const temp = state;
      temp.mainChrName = action.payload;
    },
    setIsToday(state, action) {
      const temp = state;
      temp.isToday = action.payload;
    },
    setIsPlay(state, action) {
      const temp = state;
      temp.isPlay = action.payload;
    },
  },
});

// 액션 생성함수
export const {
  logoutSuccess,
  loginSuccess,
  setCharName,
  setCharPK,
  changeMainChar,
  setIsToday,
  setIsPlay,
} = profileSlice.actions;
export const selectProfile = (state: RootState) => state.profile;
// 리듀서
export default profileSlice.reducer;
