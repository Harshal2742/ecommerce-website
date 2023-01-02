import styles from './Profile.module.css';
import ProfileInformation from './ProfileInformation';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import { useState } from 'react';

const Profile = () => {
	const [information, setInformation] = useState('ProfileInformation');
	const optionsOnClickHandler = (event) => {
		const prevSelected = document.getElementsByClassName(
			styles.Options__OptionSelected
		)[0];

		prevSelected.classList.remove(styles.Options__OptionSelected);
		prevSelected.classList.add(styles.Profile__Options_Options);
		event.target.classList.add(styles.Options__OptionSelected);
		setInformation(event.target.dataset.value);
	};

	return (
		<div className={styles.Profile}>
			<ul className={styles.Profile__Options}>
				<li
					className={styles.Options__OptionSelected}
					onClick={optionsOnClickHandler}
					data-value="ProfileInformation"
				>
					Profile information
				</li>
				<li
					className={styles.Profile__Options_Options}
					onClick={optionsOnClickHandler}
					data-value="ChangePassword"
				>
					Change password
				</li>
				<li
					className={styles.Profile__Options_Options}
					onClick={optionsOnClickHandler}
					data-value="DeleteAccount"
				>
					Delete account
				</li>
			</ul>

			<div className={styles.Information}>
				{information === 'ProfileInformation' && <ProfileInformation />}
				{information === 'ChangePassword' && <ChangePassword />}
				{information === 'DeleteAccount' && <DeleteAccount />}
			</div>
		</div>
	);
};

export default Profile;
