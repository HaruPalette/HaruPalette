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
    setImage(state, action) {
      state.image = action.payload;
    },
    setChrName(state, action) {
      state.chrName = action.payload;
    },
    setChrPK(state, action) {
      state.chrPK = action.payload;
    },
  },
});

// 액션 생성함수
export const { setImage, setChrName, setChrPK } = profileSlice.actions;
export const selectProfile = (state: RootState) => state.profile;
// 리듀서
export default profileSlice.reducer;
