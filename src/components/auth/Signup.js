import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaOpencart } from 'react-icons/fa';

import styles from './Signup.module.css';
import { userActions } from '../../store/user-slice';
import Button from '../UI/Button';
import { notificationAction } from '../../store/notification-slice';
import useHttp from '../../hooks/useHttp';
import { fetchCartData } from '../../store/httpRequests';

const Signup = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { sendRequest, isError } = useHttp();

	const onWheelHandler = (event) => {
		event.target.blur();
	};

	const dataTransformer = (response) => {
		const token = response.token;
		const userData = response.data.user;
		dispatch(userActions.loginHandler({ token, userData }));
		dispatch(fetchCartData());
		navigate('/', { replace: true });
	};

	const submitHandler = async (event) => {
		event.preventDefault();

		const firstName = event.target[0].value.trim();
		const lastName = event.target[1].value.trim();
		const email = event.target[2].value.trim();
		const phone = event.target[3].value.trim();
		const password = event.target[4].value.trim();
		const passwordConfirm = event.target[5].value.trim();

		if (!/^[A-Za-z]+$/.test(firstName)) {
			dispatch(
				notificationAction.showNotification({
					type: 'Error',
					message: 'First must contian only contain letters!',
				})
			);
			return;
		}

		if (!/^[A-Za-z]+$/.test(lastName)) {
			dispatch(
				notificationAction.showNotification({
					type: 'Error',
					message: 'Last must contian only contain letters!',
				})
			);
			return;
		}

		if (password !== passwordConfirm) {
			dispatch(
				notificationAction.showNotification({
					type: 'Error',
					message: 'Confirmed password is not same. Please confirm again!',
				})
			);
			return;
		}

		const body = {
			firstName,
			lastName,
			email,
			phone,
			password,
			passwordConfirm,
		};
		const url = `${process.env.REACT_APP_API_URL}/users/signup`;

		const headers = {
			'Content-Type': 'application/json',
		};

		await sendRequest({ method: 'POST', url, headers, body },dataTransformer);
		if(!isError){
			event.target.reset();
		}
	};

	return (
		<section className={styles.conatiner}>
			<h1 className={styles.name}>
				<FaOpencart /> SHOPNOW
			</h1>
			<div className={styles.card}>
				<div>
					<h2>Sign Up</h2>
				</div>
				<form className={styles.Form} id="signUpForm" onSubmit={submitHandler}>
					<div>
						<label htmlFor="firstName">First name</label>
						<input type="text" id="firstName" required />
					</div>
					<div>
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" required />
					</div>
					<div>
						<label htmlFor="email">E-mail</label>
						<input type="email" id="email" required />
					</div>
					<div>
						<label htmlFor="phone">Phone</label>
						<input
							type="tel"
							id="phone"
							required
							maxLength="10"
							minLength="10"
						/>
					</div>
					<div>
						<label htmlFor="password">Paaword</label>
						<input type="password" id="password" required minLength={8} />
					</div>
					<div>
						<label htmlFor="passwordConfirm">Confirm password</label>
						<input
							type="password"
							id="passwordConfirm"
							required
							minLength={8}
						/>
					</div>
					<div>
						<div className={styles.ButtonWrapper}>
							<Button type={'submit'}>Submit</Button>
							<Button type={'reset'}>Clear</Button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Signup;
