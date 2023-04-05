import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

// state type
export interface WeatherSlice {
  curWeather: string;
}

// 초기 상태 정의
const initialState: WeatherSlice = {
  curWeather: 'Clear',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeWeatherSuccess(state, action) {
      const temp = state;
      temp.curWeather = action.payload;
    },
  },
});

// 액션 생성함수
export const { changeWeatherSuccess } = weatherSlice.actions;
export const selectWeather = (state: RootState) => state.weather;
// 리듀서
export default weatherSlice.reducer;
