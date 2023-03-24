import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

// state type
export interface ShopSlice {
  currCompIdx: number;
}

// 초기 상태 정의
const initialState = {
  currCompIdx: 0,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setCompIdx(state, action) {
      state.currCompIdx = action.payload;
    },
  },
});

// 액션 생성함수
export const { setCompIdx } = shopSlice.actions;
export const selectShop = (state: RootState) => state.shop;
// 리듀서
export default shopSlice.reducer;
