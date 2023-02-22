import styles from './Notification.module.css';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { notificationAction } from '../../store/notification-slice';

const Notification = () => {
	const dispatch = useDispatch();
	const type = useSelector((state) => state.notification.type);
	const message = useSelector((state) => state.notification.message);

	useEffect(() => {
		setTimeout(() => {
			dispatch(notificationAction.hideNotification());
		}, 3000);
	}, [dispatch]);

	let messageClasses = styles.Message;
	let icon = null;
	if (type === 'Error') {
		icon = <FaExclamationCircle />
		messageClasses = `${styles.Message} ${styles.Message__Error}`;
	} else if (type === 'Success') {
		icon = <FaCheckCircle />
		messageClasses = `${styles.Message} ${styles.Message__Success}`;
	}else{
		messageClasses = `${styles.Message}`
	}



	return (
		<div className={styles.Container}>
			<div className={messageClasses}>
				<span className={styles.Message__Icon}>
					{icon}
				</span>
				{message}
			</div>
		</div>
	);
};

export default Notification;
