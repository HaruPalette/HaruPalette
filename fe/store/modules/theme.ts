import { HYDRATE } from 'next-redux-wrapper';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

// state type
export interface themeSlice {
  theme: string;
}

// 초기 상태 정의
const initialState = { theme: 'light' };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },

  //   페이지 이동 시 상태 초기화가 필요한 경우 추가해야 함
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        //   ...action.payload.theme;
      };
    },
  },
});

// 액션 생성함수
export const { setTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.theme;
// 리듀서
export default themeSlice.reducer;
