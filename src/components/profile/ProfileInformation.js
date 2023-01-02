import { useState } from 'react';
import styles from './ProfileInformation.module.css';

const ProfileInformation = () => {
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
				<button
					className={styles.ProfileInformation__Button}
					onClick={editSaveHandler}
				>
					Edit
				</button>
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
				<div>
					<label className={styles.ProfileInformation_Label} htmlFor="name">
						First Name
					</label>
					<input
						type="text"
						defaultValue={user.firstName}
						disabled={isInputDisabled}
					/>
				</div>
				<div>
					<label className={styles.ProfileInformation_Label} htmlFor="lname">
						Last Name
					</label>
					<input
						type="text"
						id="lname"
						defaultValue={user.lastName}
						disabled={isInputDisabled}
					/>
				</div>
			</div>
			<div>
				<label className={styles.ProfileInformation_Label} htmlFor="email">
					E-mail
				</label>
				<input
					type="email"
					defaultValue={user.email}
					id="email"
					disabled={isInputDisabled}
				/>
			</div>
			<div>
				<label className={styles.ProfileInformation_Label} htmlFor="dob">
					Date of Birth
				</label>
				<input
					type="date"
					defaultValue={user.dateOfBirth}
					id="email"
					disabled={isInputDisabled}
				/>
			</div>
			<div>
				<label className={styles.ProfileInformation_Label} htmlFor="phone">
					Phone
				</label>
				<input
					type="number"
					defaultValue={user.phone}
					id="phone"
					disabled={isInputDisabled}
					onWheel={onWheelHandler}
				/>
			</div>
		</form>
	);
};

export default ProfileInformation;
