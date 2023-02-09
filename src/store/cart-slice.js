import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalAmount: 0,
	totalQuantity: 0,
	totalDiscount: 0,
	items: [],
};

const cartSlice = createSlice({
	name: 'cartItems',
	initialState,
	reducers: {
		setCartData(state, action) {
			state.items = action.payload.items;
			state.totalAmount = action.payload.totalAmount;
			state.totalDiscount = action.payload.totalDiscount;
			state.totalQuantity = action.payload.totalQuantity;
		},

		clearCartData(state) {
			state.totalAmount = 0;
			state.totalQuantity = 0;
			state.totalDiscount = 0;
			state.items = [];
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
