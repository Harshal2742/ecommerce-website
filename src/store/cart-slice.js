import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalAmount: 0,
  totalQuantity: 0,
  items: [],
  changed: false,
};

const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;

      state.totalAmount += newItem.price;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    decreaseQuantity(state, action) {
      state.totalQuantity--;
      const removingItemId = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === removingItemId
      );

      state.totalAmount -= existingItem.price;

      existingItem.quantity--;
      existingItem.totalPrice -= existingItem.price;

      if (existingItem.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      }
    },

    removeItem(state, action) {
      const removingItemId = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === removingItemId
      );

      state.totalAmount -= existingItem.totalPrice;
      state.totalQuantity -= existingItem.quantity;

      state.items = state.items.filter((item) => item.id !== existingItem.id);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
