import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

// state type
export interface profileSlice {
  image: string;
  chrName: string;
  mainChrName: string;
  chrPK: number;
  isLogin: boolean;
}

// 초기 상태 정의
const initialState: profileSlice = {
  image: '',
  chrName: 'haru',
  mainChrName: 'haru',
  chrPK: 1,
  isLogin: false,
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
    },
    logoutSuccess(state) {
      const temp = state;
      temp.image = '';
      temp.chrName = 'haru';
      temp.chrPK = 1;
      temp.isLogin = false;
    },
    setCharName(state, action) {
      const temp = state;
      temp.chrName = action.payload;
    },
    changeMainChar(state, action) {
      const temp = state;
      temp.mainChrName = action.payload;
    },
  },
});

// 액션 생성함수
export const { logoutSuccess, loginSuccess, setCharName, changeMainChar } =
  profileSlice.actions;
export const selectProfile = (state: RootState) => state.profile;
// 리듀서
export default profileSlice.reducer;
