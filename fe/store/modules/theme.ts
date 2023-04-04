import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

// state type
export interface themeSlice {
  isDark: boolean;
}

// 초기 상태 정의
const initialState = { isDark: false };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      const temp = state;
      temp.isDark = action.payload;
    },
  },
});

// 액션 생성함수
export const { setTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.isDark;
// 리듀서
export default themeSlice.reducer;
