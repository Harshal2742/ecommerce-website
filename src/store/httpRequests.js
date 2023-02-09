import sendRequest from '../utils/sendRequest';

import { uiActions } from './uiAction-slice';
import { userActions } from './user-slice';
import { notificationAction } from './notification-slice';
import { cartActions } from './cart-slice';

export const fetchUserData = () => {
	return async (dispatch) => {
		dispatch(uiActions.toggleSpinner());
		try {
			const url = `${process.env.REACT_APP_API_URL}/users/me`;
			const headers = {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			};
			const data = await sendRequest({ url, headers });

			dispatch(userActions.setUserData(data.doc));
			dispatch(userActions.setIsLoggedIn(true));
		} catch (err) {
			dispatch(
				notificationAction.showNotification({
					type: 'Error',
					message: err.message,
				})
			);
		}
		dispatch(uiActions.toggleSpinner());
	};
};

export const sendUserData = (userData) => {
	return async (dispatch) => {
		dispatch(uiActions.toggleSpinner());
		try {
			const url = `${process.env.REACT_APP_API_URL}/users/update-me`;

			// must not set 'Content-Type': 'application/json' because formData is multipart/form-data
			const headers = {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			};

			const data = await sendRequest({
				url,
				headers,
				body: userData,
				method: 'PATCH',
			});

			dispatch(userActions.setUserData(data.user));
			dispatch(
				notificationAction.showNotification({
					type: 'Success',
					message: 'Profile updated successfully',
				})
			);
		} catch (err) {
			dispatch(
				notificationAction.showNotification({
					type: 'Error',
					message: err.message,
				})
			);
		}
		dispatch(uiActions.toggleSpinner());
	};
};

export const updatePassword = (passwordData) => {
	return async (dispatch) => {
		dispatch(uiActions.toggleSpinner());
		try {
			const url = `${process.env.REACT_APP_API_URL}/users/update-my-password`;

			const headers = {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			};

			const data = await sendRequest({
				url,
				headers,
				body: JSON.stringify(passwordData),
				method: 'PATCH',
			});

			dispatch(userActions.setUserData(data.user));
			dispatch(
				notificationAction.showNotification({
					type: 'Success',
					message: 'Password updated successfully',
				})
			);
		} catch (err) {
			dispatch(
				notificationAction.showNotification({
					type: 'Error',
					message: err.message,
				})
			);
		}
		dispatch(uiActions.toggleSpinner());
	};
};

export const deleteUser = (currentPassword) => {
	return async (dispatch) => {
		dispatch(uiActions.toggleSpinner());
		try {
			const url = `${process.env.REACT_APP_API_URL}/users/delete-me`;

			const headers = {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			};

			await sendRequest({
				url,
				headers,
				body: JSON.stringify({ currentPassword }),
				method: 'DELETE',
			});

			dispatch(userActions.logoutHanler());
			dispatch(
				notificationAction.showNotification({
					type: 'Success',
					message: 'Account deleted successfully',
				})
			);
		} catch (err) {
			dispatch(
				notificationAction.showNotification({
					type: 'Error',
					message: err.message,
				})
			);
		}
		dispatch(uiActions.toggleSpinner());
	};
};

export const fetchCartData = () => {
	return async (dispatch) => {
		dispatch(uiActions.toggleSpinner());
		try {
			const url = `${process.env.REACT_APP_API_URL}/carts/my-cart`;

			const headers = {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			};

			const data = await sendRequest({ url, headers });

			dispatch(cartActions.setCartData(data.cart));
		} catch (err) {
			dispatch(
				notificationAction.showNotification({
					type: 'Error',
					message: err.message,
				})
			);
		}
		dispatch(uiActions.toggleSpinner());
	};
};

export const updateCartData = (action, item) => {
	return async (dispatch) => {
		dispatch(uiActions.toggleSpinner());
		try {
			const url = `${process.env.REACT_APP_API_URL}/carts/my-cart`;

			const headers = {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			};

			const body = JSON.stringify({
				action,
				item,
			});

			const data = await sendRequest({ url, headers, method: 'PATCH', body });

			dispatch(cartActions.setCartData(data.cart));
		} catch (err) {
			dispatch(
				notificationAction.showNotification({
					type: 'Error',
					message: err.message,
				})
			);
		}
		dispatch(uiActions.toggleSpinner());
	};
};
