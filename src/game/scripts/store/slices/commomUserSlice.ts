import { createSlice } from '@reduxjs/toolkit';

export const commonUserSlice = createSlice({
  name: 'commonUserState',
  initialState: {
    userName: 'stranger',
    userScore: 0,
  },
  reducers: {
    playGame: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.userName = action.payload;
    },
    chooseSkin: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.userScore = action.payload;
    },
  },
});
