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
  friendShipList: Array<boolean>;
}
interface IUser {
  haru: boolean;
  tori: boolean;
  gomi: boolean;
}

// 초기 상태 정의
const initialState = {
  currCompIdx: 0,
  currFilterCategoryIdx: 0,
  filterYear: useDate().year,
  filterMonth: useDate().month,
  openFilterModal: false,
  friendShipList: [false, false, false],
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
      state.currFilterCategoryIdx = action.payload;
    },
    setFilterYear(state, action) {
      state.filterYear = action.payload;
    },
    setFilterMonth(state, action) {
      state.filterMonth = action.payload;
    },
    setOpenFilterModal(state, action) {
      state.openFilterModal = action.payload;
    },
    setFriendShip(state, action) {
      const data: number = action.payload;
      state.friendShipList[data] = true;
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
  setFriendShip,
} = shopSlice.actions;
export const selectShop = (state: RootState) => state.shop;
// 리듀서
export default shopSlice.reducer;
