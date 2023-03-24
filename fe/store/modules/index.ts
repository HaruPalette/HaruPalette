import { combineReducers } from '@reduxjs/toolkit';

import theme from './theme';
import profile from './profile';
import menu from './menu';
import shop from './shop';

const rootReducer = combineReducers({
  theme,
  profile,
  menu,
  shop,
  // 여기에 추가하세요
});

export default rootReducer;
// export type RootState = ReturnType<typeof rootReducer>;
