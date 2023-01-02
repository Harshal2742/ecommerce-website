import { useState } from 'react';
import styles from './Signup.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/user-slice';
import { spinnerActions } from '../store/spinner-slice';

const Signup = () => {
	const [message, setMessage] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onWheelHandler = (event) => {
		event.target.blur();
	};

	const submitHandler = (event) => {
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

		dispatch(spinnerActions.setIsLoading());
		dispatch(userActions.loginHandler());
		dispatch(spinnerActions.setIsLoading());
		navigate('/');
	};

	return (
		<div className={styles.card}>
			<div>
				<h2>Sign Up</h2>
			</div>
			<div className={styles.message}>
				<p>{message}</p>
			</div>
			<form onSubmit={submitHandler}>
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
					<label htmlFor="dob">Date of Birth</label>
					<input type="date" id="dob" required />
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
					<button type="submit">Submit</button>
					<button type="reset">Clear</button>
				</div>
			</form>
		</div>
	);
};

export default Signup;
