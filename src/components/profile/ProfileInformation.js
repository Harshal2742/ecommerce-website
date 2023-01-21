import { useRef, useState } from 'react';
import Button from '../UI/Button';
import LabelInput from '../UI/LabelInput';
import styles from './ProfileInformation.module.css';

const ProfileInformation = () => {
	const firstNameInputRef = useRef();
	const lastNameInputRef = useRef();
	const emailInputRef = useRef();
	const phoneInputRef = useRef();
	const birthInputRef = useRef();
	const [isInputDisabled, setIsInputDisabled] = useState(true);
	const user = {
		firstName: 'Harshal',
		lastName: 'Takade',
		email: 'harshaltakade1234@gmail.com',
		dateOfBirth: '2002-04-27',
		phone: '8412836171',
	};

	user.fullName = user.firstName + ' ' + user.lastName;

	const editSaveHandler = (event) => {
		event.preventDefault();

		if (event.target.textContent === 'Edit') {
			event.target.textContent = 'Save';
			setIsInputDisabled(false);
		} else {
			// send http patch request
			event.target.textContent = 'Edit';
			setIsInputDisabled(true);
		}
	};

	const onWheelHandler = (event) => {
		event.target.blur();
	};

	return (
		<form className={styles.ProfileInformation}>
			<div className={styles.ProfileInformation__ButtonDiv}>
				<Button clickHandler={editSaveHandler}>Edit</Button>
			</div>
			<div>
				<img
					className={styles.ProfileInformation__UserImage}
					src={process.env.PUBLIC_URL + '/img/users/default.jpg'}
					alt={user.fullName}
				/>

				<input
					className={styles.UserImage__Input}
					type="file"
					id="user-image"
					disabled={isInputDisabled}
				/>
				<label className={styles.UserImage__Label} htmlFor="user-image">
					Choose photo
				</label>
			</div>
			<div className={styles.ProfileInformation__name}>
				<LabelInput
					label={'First Name'}
					inputRef={firstNameInputRef}
					inputType={'text'}
					defaultValue={user.firstName}
					inputDisabled={isInputDisabled}
				/>
				<LabelInput
					label={'Last Name'}
					inputRef={lastNameInputRef}
					inputType={'text'}
					defaultValue={user.lastName}
					inputDisabled={isInputDisabled}
				/>
			</div>
			<LabelInput
				label={'E-mail'}
				inputRef={emailInputRef}
				inputType={'email'}
				defaultValue={user.email}
				inputDisabled={isInputDisabled}
			/>
			<LabelInput
				label={'Date of Birth'}
				inputRef={birthInputRef}
				inputType={'date'}
				defaultValue={user.dateOfBirth}
				inputDisabled={isInputDisabled}
			/>
			<LabelInput
				label={'Phone'}
				inputRef={phoneInputRef}
				inputType={'number'}
				defaultValue={user.phone}
				inputDisabled={isInputDisabled}
				onWheelHandler={onWheelHandler}
			/>
		</form>
	);
};

export default ProfileInformation;
