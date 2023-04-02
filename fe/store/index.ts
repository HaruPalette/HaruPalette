import { configureStore } from '@reduxjs/toolkit';
import persistReducers from './modules';

const store = configureStore({
  reducer: persistReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
