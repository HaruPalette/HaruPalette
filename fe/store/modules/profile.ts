import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

// state type
export interface profileSlice {
  image: string;
  chrName: string;
  chrPK: number;
}

// 초기 상태 정의
const initialState = {
  image: '',
  chrName: 'haru',
  chrPK: 1,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      const temp = state;
      temp.image = action.payload.image;
      temp.chrName = action.payload.chrName;
      temp.chrPK = action.payload.chrPK;
    },
    logoutSuccess(state) {
      state.image = '';
      state.chrName = 'haru';
      state.chrPK = 1;
    },
  },
});

// 액션 생성함수
export const { loginSuccess } = profileSlice.actions;
export const selectProfile = (state: RootState) => state.profile;
// 리듀서
export default profileSlice.reducer;
