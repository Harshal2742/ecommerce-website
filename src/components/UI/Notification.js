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

	if (type === 'Error') {
		messageClasses = `${styles.Message} ${styles.Message__Error}`;
	} else if (type === 'Success') {
		messageClasses = `${styles.Message} ${styles.Message__Success}`;
	}

	return (
		<div className={styles.Container}>
			<div className={messageClasses}>
				<span className={styles.Message__Icon}>
					{type === 'Success' ? <FaCheckCircle /> : <FaExclamationCircle />}
				</span>
				{message}
			</div>
		</div>
	);
};

export default Notification;
