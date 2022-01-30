import { configureStore } from '@reduxjs/toolkit';
import { commonGameSlice } from './slices/commonGameSlice';

export const store = configureStore({
  reducer: {
    commonGameState: commonGameSlice.reducer,
  },
});
