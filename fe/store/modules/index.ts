import { combineReducers } from '@reduxjs/toolkit';

import theme from './theme';
import profile from './profile';
import menu from './menu';

const rootReducer = combineReducers({
  theme,
  profile,
  menu,
  // 여기에 추가하세요
});

export default rootReducer;
// export type RootState = ReturnType<typeof rootReducer>;
