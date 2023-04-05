import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

// state type
export interface menuSlice {
  isActive: boolean;
  link: string;
}

// 초기 상태 정의
const initialState: menuSlice = {
  isActive: false,
  link: '/',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    menuOpenSuccess(state) {
      const temp = state;
      temp.isActive = true;
    },
    menuCloseSuccess(state) {
      const temp = state;
      temp.isActive = false;
    },
    changeLinkSuccess(state, actions) {
      const temp = state;
      temp.link = actions.payload;
      temp.isActive = false;
    },
  },
});

// 액션 생성함수
export const { menuOpenSuccess, menuCloseSuccess, changeLinkSuccess } =
  menuSlice.actions;
export const selectMenu = (state: RootState) => state.menu;
// 리듀서
export default menuSlice.reducer;
