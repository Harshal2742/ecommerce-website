import { createSlice } from '@reduxjs/toolkit';

const initialState = { showCart: false, showMenu: false,isLoading: false  };

const uiSlice = createSlice({
  name: 'cartVisible',
  initialState,
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
    toggleShowMenu(state){
      state.showMenu = !state.showMenu;
    },
    toggleSpinner(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
