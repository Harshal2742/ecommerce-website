import styles from './DeleteAccount.module.css';
import { userActions } from '../../store/user-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LabelInput from '../UI/LabelInput';
import { useRef } from 'react';
import Button from '../UI/Button';

const DeleteAccount = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const passInputRef = useRef();

	const onDeleteHandler = (event) => {
		event.preventDefault();
		// send http request

		dispatch(userActions.logoutHanler());
		navigate('/home');
	};

	return (
		<form className={styles.DeleteAccount} onSubmit={onDeleteHandler}>
			<div className={styles.DeleteAccount__ButtonDiv}>
				<Button>Delete</Button>
			</div>
			<LabelInput
				label={'Please enter your current password to delete your account.'}
				inputRef={passInputRef}
				inputType={'password'}
				required={true}
			/>
			<p className={styles.DeleteAccount__Warning}>Note: This will delete your account permanently. </p>
		</form>
	);
};

export default DeleteAccount;
