import styles from './ChangePassword.module.css';

const ChangePassword = () => {

  const passwordChangeHandler = (event) => {
    event.preventDefault();
    event.target.reset();

    // send http request
  }

	return (
		<form className={styles.ChangePassword} onSubmit={passwordChangeHandler}>
			<div className={styles.ChangePassword__ButtonDiv}>
				<button type='submit' className={styles.ChangePassword__Button}>Save</button>
			</div>
			<div>
				<label htmlFor="currentPassword">Enter current password</label>
				<input type="password" id="currentPassword" required />
			</div>
			<div>
				<label htmlFor="newPassword">Enter new password</label>
				<input type="password" id="newPassword" required />
			</div>
			<div>
				<label htmlFor="confirmPassword">Confirm new password</label>
				<input type="password" id="confirmPassword" required />
			</div>
		</form>
	);
};

export default ChangePassword;
