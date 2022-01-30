import { createSlice } from '@reduxjs/toolkit';

export const commonGameSlice = createSlice({
  name: 'commonGameState',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    isPlaying: false,
  },
  reducers: {
    playGame: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isPlaying = true;
    },
    pauseGame: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isPlaying = false;
    },
  },
});
