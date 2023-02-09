import './App.css';

// import { Fragment } from "react";
import { Provider } from 'react-redux';
import store from './store/store';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LoadingSpinner from './components/layout/LoadingSpinner';
import { useSelector } from 'react-redux';
import SignupPage from './pages/SignupPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData, fetchCartData } from './store/httpRequests';
import Main from './pages/Main';
import Notification from './components/UI/Notification';

function App() {
	const isLoading = useSelector((state) => state.uiAction.isLoading);
	const isNotification = useSelector(
		(state) => state.notification.isNotification
	);
	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			dispatch(fetchUserData());
			dispatch(fetchCartData());
		}
	}, [dispatch]);

	return (
		<Provider store={store}>
			{isLoading && <LoadingSpinner />}
			{isNotification && <Notification />}
			<Routes>
				<Route path="/" element={<Navigate to="/home" replace />} />
				<Route path="/home/*" element={<Main />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/*" element={<p>Page not found.</p>} />
			</Routes>
		</Provider>
	);
}

export default App;
