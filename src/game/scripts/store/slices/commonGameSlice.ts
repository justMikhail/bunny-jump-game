import { createSlice } from '@reduxjs/toolkit';

export const commonGameSlice = createSlice({
  name: 'commonGameState',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    isPlaying: false,
    isMute: false,
    basicSkin: null,
  },
  reducers: {
    playGame: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isPlaying = true;
    },
    chooseSkin: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.basicSkin = action.payload;
    },
    pauseGame: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isPlaying = false;
    },
    muteSound: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isMute = false;
    },
    unMuteSound: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isMute = true;
    },
  },
});
