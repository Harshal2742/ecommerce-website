import { configureStore } from '@reduxjs/toolkit';
import uiActionReducer from './uiAction-slice';
import cartReducer from './cart-slice';
import userReducer from './user-slice';
import notificationReducer from './notification-slice';

const store = configureStore({
	reducer: {
		uiAction: uiActionReducer,
		cart: cartReducer,
		user: userReducer,
		notification: notificationReducer,
	},
});

export default store;
