import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user-slice';
import { FaOpencart } from 'react-icons/fa';
import useHttp from '../../hooks/useHttp';
import { notificationAction } from '../../store/notification-slice';
import { fetchCartData } from '../../store/httpRequests';

const Login = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { sendRequest } = useHttp();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const dataTransformer = (response) => {
		const token = response.token;
		const userData = response.data.user;
		dispatch(userActions.loginHandler({ token, userData }));
		dispatch(fetchCartData());
		navigate('/', { replace: true });
	};

	const submitHandler = async (event) => {
		event.preventDefault();

		const enteredEmail = emailRef.current.value;
		const enteredPassword = passwordRef.current.value;

		if (enteredEmail.trim().length === 0 || !enteredEmail.includes('@')) {
			dispatch(
				notificationAction.showNotification({
					type: 'Error',
					message: 'Please enter valid email',
				})
			);
			return;
		}

		if (enteredPassword.trim().length < 8) {
			dispatch(
				notificationAction.showNotification({
					type: 'Error',
					message: 'Please enter valid password',
				})
			);
			return;
		}

		const requestConfig = {
			url: `${process.env.REACT_APP_API_URL}/users/signin`,
			method: 'POST',
			body: {
				email: emailRef.current.value,
				password: passwordRef.current.value,
			},
			headers: {
				'Content-Type': 'application/json',
			},
		};
		sendRequest(requestConfig, dataTransformer);
	};

	return (
		<section className={styles.Container}>
			<h1 className={styles.name}>
				<FaOpencart /> SHOPNOW
			</h1>
			<div className={styles.Card}>
				<h2>Sign In</h2>
				<p className={styles.Message}></p>
				<form className={styles.Form} onSubmit={submitHandler}>
					<div className={styles.field}>
						<FontAwesomeIcon icon={faUser} />
						<input
							ref={emailRef}
							type="email"
							id="username"
							placeholder="Email"
							required
						/>
					</div>
					<div className={styles.field}>
						<FontAwesomeIcon icon={faLock} />
						<input
							ref={passwordRef}
							type="password"
							id="password"
							placeholder="Password"
							required
							minLength={8}
						/>
					</div>
					<div className={`${styles.field} ${styles.forgotPassword}`}>
						<p>Forgot password?</p>
					</div>
					<div className={styles.field}>
						<button type="submit">Sign in</button>
					</div>
					<div>
						<p>
							New here? <Link to="/signup">Sign up</Link>
						</p>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Login;
