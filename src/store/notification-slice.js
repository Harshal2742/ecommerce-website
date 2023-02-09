import { createSlice } from '@reduxjs/toolkit';

const initialState = { isNotification: false, type: null, message: null };

const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		showNotification(state, action) {
			state.isNotification = true;
			state.type = action.payload.type;
			state.message = action.payload.message;
		},
		hideNotification(state) {
			state.isNotification = false;
			state.type = null;
			state.message = null;
		},
	},
});

export const notificationAction = notificationSlice.actions;

export default notificationSlice.reducer;
