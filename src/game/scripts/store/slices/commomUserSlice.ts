import { createSlice } from '@reduxjs/toolkit';

export const commonUserSlice = createSlice({
  name: 'commonUserState',
  initialState: {
    userName: 'stranger',
    userScore: 0,
    currentUserSkin: null,
  },
  reducers: {
    setUserName: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.userName = action.payload;
    },
    setCurrentSkin: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.currentUserSkin = action.payload;
    },
  },
});
