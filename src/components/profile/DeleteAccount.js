import styles from './DeleteAccount.module.css';
import { userActions } from '../../store/user-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DeleteAccount = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onDeleteHandler = (event) => {
		event.preventDefault();
		// send http request

		dispatch(userActions.logoutHanler());
		navigate('/home');
	};

	return (
		<form className={styles.DeleteAccount} onSubmit={onDeleteHandler}>
			<div className={styles.DeleteAccount__ButtonDiv}>
				<button type="submit" className={styles.DeleteAccount__Button}>
					Delete
				</button>
			</div>
			<div>
				<label
					className={styles.DeleteAccount__Lable}
					htmlFor="currentPassword"
				>
					Note: This will delete your account permanently. Please enter your
					current password to delete your account.
				</label>
				<input
					className={styles.DeleteAccount__Input}
					type="password"
					id="currentPassword"
					required
				/>
			</div>
		</form>
	);
};

export default DeleteAccount;
