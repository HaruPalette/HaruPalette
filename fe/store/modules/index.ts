import { combineReducers } from '@reduxjs/toolkit';

import theme from './theme';

const rootReducer = combineReducers({
  theme,
  // 여기에 추가하세요
});

export default rootReducer;
// export type RootState = ReturnType<typeof rootReducer>;
