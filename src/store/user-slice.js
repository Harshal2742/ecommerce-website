import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoggedIn: false,
	userData: null,
};

const userSlice = createSlice({
	name: 'userData',
	initialState,
	reducers: {
		setIsLoggedIn(state, action) {
			state.isLoggedIn = action.payload;
		},

		loginHandler(state, action) {
			const token = action.payload.token;
			localStorage.setItem('token', token);
			state.userData = action.payload.userData;
			state.isLoggedIn = true;
		},

		logoutHanler(state) {
			localStorage.removeItem('token');
			state.userData = null;
			state.isLoggedIn = false;
		},

		setUserData(state, action) {
			state.userData = action.payload;
		},
	},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
