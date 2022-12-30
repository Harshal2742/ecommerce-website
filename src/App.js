import './App.css';

// import { Fragment } from "react";
import { Provider } from 'react-redux';
import store from './store/store';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import LoadingSpinner from './components/layout/LoadingSpinner';
import { useSelector } from 'react-redux';
import SignupPage from './pages/SignupPage';
import { useEffect } from 'react';
import { userActions } from './store/user-slice';
import { useDispatch } from 'react-redux';

function App() {
	const isLoading = useSelector((state) => state.spinner.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		const loginInformation = localStorage.getItem('isLoggedIn');

		if (loginInformation && loginInformation === '1') {
			dispatch(userActions.setIsLoggedIn(true));
		}
	}, [dispatch]);

	return (
		<Provider store={store}>
			{isLoading && <LoadingSpinner />}
			<Routes>
				<Route path="/" element={<Navigate replace to={'/home'} />} />
				<Route path="/home/*" element={<Home />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/home/*" element={<h1>Page Not Found</h1>} />
			</Routes>
		</Provider>
	);
}

export default App;
