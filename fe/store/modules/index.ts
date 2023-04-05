import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import theme from './theme';
import profile from './profile';
import menu from './menu';
import shop from './shop';
import script from './script';
import weather from './weather';
import snackbar from './snackbar';

const rootReducer = combineReducers({
  theme,
  profile,
  menu,
  shop,
  script,
  weather,
  snackbar,
  // 여기에 추가하세요
});

const persistConfig = {
  key: 'root',
  storage,
  whiteList: [
    'theme',
    'profile',
    'menu',
    'shop',
    'script',
    'weather',
    'snackbar',
  ],
};

const persistReducers = persistReducer(persistConfig, rootReducer);

export default persistReducers;
// export type RootState = ReturnType<typeof rootReducer>;
