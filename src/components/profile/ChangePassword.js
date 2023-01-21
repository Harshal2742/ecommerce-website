import { useRef } from 'react';
import Button from '../UI/Button';
import LabelInput from '../UI/LabelInput';
import styles from './ChangePassword.module.css';

const ChangePassword = () => {
	const currPassRef = useRef();
	const newPassRef = useRef();
	const confPassRef = useRef();

	const passwordChangeHandler = (event) => {
		event.preventDefault();
		// send http request
		console.log(currPassRef.current.value);
		console.log(newPassRef.current.value);
		console.log(confPassRef.current.value);
		
		event.target.reset();

	};

	return (
		<form className={styles.ChangePassword} onSubmit={passwordChangeHandler}>
			<div className={styles.ChangePassword__ButtonDiv}>
				<Button>Save</Button>
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
