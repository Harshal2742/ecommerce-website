import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './DeleteAccount.module.css';
import LabelInput from '../UI/LabelInput';
import Button from '../UI/Button';
import { deleteUser } from '../../store/httpRequests';
import { notificationAction } from '../../store/notification-slice';

const DeleteAccount = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

	const passInputRef = useRef();

	const onDeleteHandler = (event) => {
		event.preventDefault();
		// send http request
		const currentPassword = passInputRef.current.value;
		if (currentPassword.length < 8) {
			dispatch(
				notificationAction.showNotification({
					type: 'Error',
					message: 'Password length must be greater than or equal to 8.',
				})
			);
		}

		dispatch(deleteUser(currentPassword));
		if (!isLoggedIn) {
			navigate('/home', { replace: true });
		}
	};

	return (
		<form className={styles.DeleteAccount} onSubmit={onDeleteHandler}>
			<div className={styles.DeleteAccount__ButtonDiv}>
				<Button type="submit">Delete</Button>
			</div>
			<LabelInput
				label={'Please enter your current password to delete your account.'}
				inputRef={passInputRef}
				inputType={'password'}
				required={true}
			/>
			<p className={styles.DeleteAccount__Warning}>
				Note: This will delete your account permanently.{' '}
			</p>
		</form>
	);
};

export default DeleteAccount;
