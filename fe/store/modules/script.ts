import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

// state type
export interface ScriptSlice {
  isRecoding: boolean;
  curScriptIndex: number;
}

// 초기 상태 정의
const initialState = {
  isRecoding: false,
  curScriptIndex: 0,
};

const scriptSlice = createSlice({
  name: 'script',
  initialState,
  reducers: {
    /** 일기 작성 페이지에 처음 진입 시 script index 초기화 */
    resetScriptIndexSuccess(state) {
      const temp = state;
      temp.curScriptIndex = 0;
    },
    /** 대화하기 버튼을 통해 녹음 시작 */
    startRecodingSuccess(state) {
      const temp = state;
      temp.isRecoding = true;
    },
    /** 녹음을  */
    recodingSuccess(state) {
      const temp = state;
      temp.isRecoding = false;
      temp.curScriptIndex += 1;
    },
  },
});

// 액션 생성함수
export const {
  resetScriptIndexSuccess,
  startRecodingSuccess,
  recodingSuccess,
} = scriptSlice.actions;
export const selectScript = (state: RootState) => state.script;
// 리듀서
export default scriptSlice.reducer;
