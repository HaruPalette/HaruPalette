import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

// state type
export interface snackbarSlice {
  message: string;
  isActive: boolean;
}

// 초기 상태 정의
const initialState = {
  message: '',
  isActive: false,
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    openSnackBarSuccess(state, action) {
      // console.log(action);
      const temp = state;
      temp.message = action.payload;
      temp.isActive = true;
    },
    closeSnackBarSuccess(state) {
      const temp = state;
      temp.isActive = false;
    },
  },
});

// 액션 생성함수
export const { openSnackBarSuccess, closeSnackBarSuccess } =
  snackbarSlice.actions;
export const selectSnackbar = (state: RootState) => state.snackbar;
// 리듀서
export default snackbarSlice.reducer;
