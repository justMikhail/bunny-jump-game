import { configureStore } from '@reduxjs/toolkit';
import { commonGameSlice } from './slices/commonGameSlice';
import { commonUserSlice } from './slices/commomUserSlice';

export const store = configureStore({
  reducer: {
    commonGameData: commonGameSlice.reducer,
    commonUserData: commonUserSlice.reducer,
  },
});
