import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaOpencart } from 'react-icons/fa';

import styles from './Signup.module.css';
import { userActions } from '../../store/user-slice';
import { uiActions } from '../../store/uiAction-slice';
import Button from '../UI/Button';

const Signup = () => {
	const [message, setMessage] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onWheelHandler = (event) => {
		event.target.blur();
	};

	const submitHandler = async (event) => {
		event.preventDefault();

		const enteredFname = event.target[0].value;
		const enteredLname = event.target[1].value;
		const enteredEmail = event.target[2].value;
		// const enteredDOB = event.target[3].value;
		const enteredMobileNo = event.target[4].value;
		const password = event.target[5].value;
		const confirmPassword = event.target[6].value;

		if (enteredFname.length === 0) {
			setMessage('Please enter your first name!');
			return;
		} else if (!/^[A-Za-z]+$/.test(enteredFname)) {
			setMessage('First must contian only contain letters!');
			return;
		}

		if (enteredLname.length === 0) {
			setMessage('Please enter your last name!');
			return;
		} else if (!/^[A-Za-z]+$/.test(enteredLname)) {
			setMessage('Last must contian only contain letters!');
			return;
		}

		if (enteredMobileNo.length !== 10) {
			setMessage('Please enter valid phone number!');
			return;
		}

		if (!enteredEmail.includes('@')) {
			setMessage('Please enter valid email!');
			return;
		}

		if (password.length < 8) {
			setMessage('Password is too short!');
			return;
		} else if (password !== confirmPassword) {
			setMessage('Confirmed password is not same. Please confirm again!');
			return;
		}

		setMessage('');
		event.target.reset();

		dispatch(uiActions.toggleSpinner());
		try {
			const response = await fetch(
				'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBne6wJXtYbV2Gu_7VQ50Ld9srqHEscNJU',
				{
					method: 'POST',
					body: JSON.stringify({
						email: enteredEmail,
						password,
						returnSecureToken: true,
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			if (!response.ok) {
				const data = await response.json();
				console.log(data);
				throw new Error('Sign up failed! Please try later.');
			}

			const data = await response.json();

			const idToken = data.idToken;
			const expirationTime = new Date(
				Date.now() + +data.expiresIn * 1000
			).toString();
			dispatch(userActions.loginHandler({ idToken, expirationTime }));
			navigate('/');
		} catch (err) {
			alert(err.message);
		}

		dispatch(uiActions.toggleSpinner());
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
				<div className={styles.message}>
					<p>{message}</p>
				</div>
				<form className={styles.Form} onSubmit={submitHandler}>
					<div>
						<label htmlFor="fname">First name</label>
						<input type="text" id="fname" required />
					</div>
					<div>
						<label htmlFor="lname">Last Name</label>
						<input type="text" id="lname" required />
					</div>
					<div>
						<label htmlFor="name">E-mail</label>
						<input type="email" id="name" required />
					</div>
					<div>
						<label htmlFor="mobile">Phone</label>
						<input
							type="number"
							id="mobile"
							required
							onWheel={onWheelHandler}
							maxLength="10"
							minLength="10"
						/>
					</div>
					<div>
						<label htmlFor="password">Paaword</label>
						<input type="password" id="password" required />
					</div>
					<div>
						<label htmlFor="confirmPassword">Confirm password</label>
						<input type="password" id="confirmPassword" required />
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
