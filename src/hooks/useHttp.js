import { useDispatch } from 'react-redux';
import { uiActions } from '../store/uiAction-slice';
import { useCallback, useState } from 'react';
import { notificationAction } from '../store/notification-slice';

const useHttp = () => {
	const dispatch = useDispatch();
	const [isError, setIsError] = useState(null);

	const sendRequest = useCallback(
		async (requestConfig, dataTransformer) => {
			dispatch(uiActions.toggleSpinner());
			try {
				const response = await fetch(requestConfig.url, {
					method: requestConfig.method ? requestConfig.method : 'GET',
					body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
					headers: requestConfig.headers ? requestConfig.headers : {},
				});

				if (!response.ok) {
					const error = await response.json();
					throw new Error(error.message);
				}

				const data = await response.json();
				dataTransformer(data);
				setIsError(false);
			} catch (err) {
				setIsError(true);
				dispatch(
					notificationAction.showNotification({
						type: 'Error',
						message: err.message,
					})
				);
			}
			dispatch(uiActions.toggleSpinner());
		},
		[dispatch]
	);

	return { sendRequest, isError };
};

export default useHttp;
