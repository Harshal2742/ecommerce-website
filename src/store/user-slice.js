import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    loginHandler(state) {
      localStorage.setItem('isLoggedIn', '1');
      state.isLoggedIn = true;
    },

    logoutHanler(state) {
      localStorage.removeItem('isLoggedIn');
      state.isLoggedIn = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
