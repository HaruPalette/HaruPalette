import { createSlice } from '@reduxjs/toolkit';
import { useDate } from '../../hooks/useDate';
import { RootState } from '..';

// state type
export interface ShopSlice {
  currCompIdx: number;
  currFilterCategoryIdx: number;
  filterYear: number;
  filterMonth: number;
  openFilterModal: boolean;
  currPoint: number;
}

// 초기 상태 정의
const initialState: ShopSlice = {
  currCompIdx: 0,
  currFilterCategoryIdx: 0,
  filterYear: useDate().year,
  filterMonth: useDate().month,
  openFilterModal: false,
  currPoint: 0,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setCompIdx(state, action) {
      const temp = state;
      temp.currCompIdx = action.payload;
    },
    setFilterCategory(state, action) {
      const temp = state;
      temp.currFilterCategoryIdx = action.payload;
    },
    setFilterYear(state, action) {
      const temp = state;
      temp.filterYear = action.payload;
    },
    setFilterMonth(state, action) {
      const temp = state;
      temp.filterMonth = action.payload;
    },
    setOpenFilterModal(state, action) {
      const temp = state;
      temp.openFilterModal = action.payload;
    },
    setCurrPoint(state, action) {
      const temp = state;
      temp.currPoint = action.payload;
    },
  },
});

// 액션 생성함수
export const {
  setCompIdx,
  setFilterCategory,
  setFilterYear,
  setFilterMonth,
  setOpenFilterModal,
  setCurrPoint,
} = shopSlice.actions;
export const selectShop = (state: RootState) => state.shop;
// 리듀서
export default shopSlice.reducer;
