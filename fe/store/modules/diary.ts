import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

// state type
export interface diarySlice {
  image: string;
  file: File | null;
}

// 초기 상태 정의
const initialState = {
  image: '',
  file: null,
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    changeImageSuccess(state, action) {
      const temp = state;
      temp.image = action.payload.image;
      temp.file = action.payload.file;
    },
    resetImageSuccess(state) {
      const temp = state;
      temp.image = 'blob:';
      temp.file = null;
    },
  },
});

// 액션 생성함수
export const { changeImageSuccess, resetImageSuccess } = diarySlice.actions;
export const selectDiary = (state: RootState) => state.diary;
// 리듀서
export default diarySlice.reducer;
