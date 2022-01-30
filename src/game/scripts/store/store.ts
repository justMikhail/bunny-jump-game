import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const mainMenuSceneSlice = createSlice({
  name: 'mainMenuScene',
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

export const store = configureStore({
  reducer: {
    mainMenuScene: mainMenuSceneSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
