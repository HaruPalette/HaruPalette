import { combineReducers } from '@reduxjs/toolkit';

import theme from './theme';
import profile from './profile';

const rootReducer = combineReducers({
  theme,
  profile,
  // 여기에 추가하세요
});

export default rootReducer;
// export type RootState = ReturnType<typeof rootReducer>;
