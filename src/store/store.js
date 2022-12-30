import { configureStore } from '@reduxjs/toolkit';
import uiActionReducer from './uiAction-slice';
import cartReducer from './cart-slice';
import productsReducer from './products-slice';
import spinnerReducer from './spinner-slice';
import userReducer from './user-slice';

const store = configureStore({
  reducer: {
    uiAction:uiActionReducer,
    cart: cartReducer,
    products: productsReducer,
    spinner: spinnerReducer,
    user: userReducer,
  },
});

export default store;
