import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLoading: false };

const spinnerSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const spinnerActions = spinnerSlice.actions;

export default spinnerSlice.reducer;
