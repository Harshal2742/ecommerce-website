import { useRef } from 'react';
import Button from '../UI/Button';
import LabelInput from '../UI/LabelInput';
import styles from './ChangePassword.module.css';
import { notificationAction } from '../../store/notification-slice';
import { useDispatch } from 'react-redux';
import { updatePassword } from '../../store/httpRequests';

const ChangePassword = () => {
	const currPassRef = useRef();
	const newPassRef = useRef();
	const confPassRef = useRef();
	const dispatch = useDispatch();

	const passwordChangeHandler = (event) => {
		event.preventDefault();
		// send http request
		const currentPassword = currPassRef.current.value;
		const password = newPassRef.current.value;
		const passwordConfirm = confPassRef.current.value;

		if (
			currentPassword.length < 8 ||
			password.length < 8 ||
			passwordConfirm.length < 8
		) {
			dispatch(
				notificationAction.showNotification({
					type: 'Error',
					message: 'Password length must be greater than or equal to 8.',
				})
			);

			return;
		}

		if (password !== passwordConfirm) {
			dispatch(
				notificationAction.showNotification({
					type: 'Error',
					message: 'Password are not same! Please confirm password again.',
				})
			);

			return;
		}

		dispatch(updatePassword({ currentPassword, password, passwordConfirm }));

		event.target.reset();
	};

	return (
		<form className={styles.ChangePassword} onSubmit={passwordChangeHandler}>
			<div className={styles.ChangePassword__ButtonDiv}>
				<Button type={'submit'}>Save</Button>
			</div>

			<LabelInput
				label={'Enter current password'}
				inputRef={currPassRef}
				inputType={'password'}
				required={true}
			/>
			<LabelInput
				label={'Enter new password'}
				inputRef={newPassRef}
				inputType={'password'}
				required={true}
			/>
			<LabelInput
				label={'Confirm new password'}
				inputRef={confPassRef}
				inputType={'password'}
				required={true}
			/>
		</form>
	);
};

export default ChangePassword;
