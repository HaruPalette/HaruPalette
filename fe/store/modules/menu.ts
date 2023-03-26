import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

// state type
export interface menuSlice {
  isActive: boolean;
}

// 초기 상태 정의
const initialState = {
  isActive: false,
  link: '/',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    menuOpenSuccess(state) {
      state.isActive = true;
    },

    changeLinkSuccess(state, actions) {
      state.link = actions.payload;
      state.isActive = false;
    },
  },
});

// 액션 생성함수
export const { menuOpenSuccess, changeLinkSuccess } = menuSlice.actions;
export const selectMenu = (state: RootState) => state.menu;
// 리듀서
export default menuSlice.reducer;
