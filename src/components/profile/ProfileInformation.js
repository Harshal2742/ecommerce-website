import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './ProfileInformation.module.css';
import Button from '../UI/Button';
import LabelInput from '../UI/LabelInput';
import { sendUserData } from '../../store/httpRequests';

const ProfileInformation = () => {
	const dispatch = useDispatch();
	const firstNameInputRef = useRef();
	const lastNameInputRef = useRef();
	const emailInputRef = useRef();
	const phoneInputRef = useRef();
	const birthInputRef = useRef();
	const [isInputDisabled, setIsInputDisabled] = useState(true);
	const [buttonText, setButtonText] = useState('Edit');
	const userData = useSelector((state) => state.user.userData);

	const onSubmitHandler = (event) => {
		event.preventDefault();

		if (buttonText === 'Edit') {
			setButtonText('Save');
			setIsInputDisabled(false);
		} else {
			const form = document.getElementById('form');
			const formData = new FormData(form);

			dispatch(sendUserData(formData));
			setButtonText('Edit');
			setIsInputDisabled(true);
		}
	};

	const onWheelHandler = (event) => {
		event.target.blur();
	};

	return (
		<form
			id="form"
			className={styles.ProfileInformation}
			onSubmit={onSubmitHandler}
		>
			<div className={styles.ProfileInformation__ButtonDiv}>
				<Button type={'submit'}>{buttonText}</Button>
			</div>
			<div>
				<img
					className={styles.ProfileInformation__UserImage}
					src={`${process.env.REACT_APP_API_USER_IMG}/${userData.photo}`}
					alt={userData.firstName}
				/>

				<input
					className={styles.UserImage__Input}
					type="file"
					name="photo"
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
					defaultValue={userData.firstName}
					inputDisabled={isInputDisabled}
					required={true}
					name={'firstName'}
				/>
				<LabelInput
					label={'Last Name'}
					inputRef={lastNameInputRef}
					inputType={'text'}
					defaultValue={userData.lastName}
					inputDisabled={isInputDisabled}
					required={true}
					name={'lastName'}
				/>
			</div>
			<LabelInput
				label={'E-mail'}
				inputRef={emailInputRef}
				inputType={'email'}
				defaultValue={userData.email}
				inputDisabled={isInputDisabled}
				required={true}
				name={'email'}
			/>
			<LabelInput
				label={'Date of Birth'}
				inputRef={birthInputRef}
				inputType={'date'}
				defaultValue={userData.dateOfBirth ? userData.dateOfBirth.split('T')[0] : null}
				inputDisabled={isInputDisabled}
				name={'dateOfBirth'}
			/>
			<LabelInput
				label={'Phone'}
				inputRef={phoneInputRef}
				inputType={'number'}
				defaultValue={userData.phone}
				inputDisabled={isInputDisabled}
				onWheelHandler={onWheelHandler}
				required={true}
				name={'phone'}
			/>
		</form>
	);
};

export default ProfileInformation;
