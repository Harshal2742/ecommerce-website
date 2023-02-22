import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import styles from './PriceDetails.module.css';
import { useNavigate } from 'react-router-dom';
import { notificationAction } from '../../store/notification-slice';
import { uiActions } from '../../store/uiAction-slice';

const PriceDetails = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const totalAmount = useSelector((state) => state.cart.totalAmount);
	const totalDiscount = useSelector((state) => state.cart.totalDiscount);
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

	const orderPlaceHander = () => {
		if (!isLoggedIn) {
			dispatch(
				notificationAction.showNotification({
					type: 'Message',
					message: 'Please login to place order.',
				})
			);
			navigate('/login');
			return;
		} else {
			dispatch(uiActions.toggleShowCart());
			navigate('/home/delivery-address');
		}
	};

	return (
		<div className={styles.priceDetails}>
			<h4>Price Details</h4>
			<div className={styles.charges}>
				<div>Price </div>
				<div className={styles.amount}>
					<FontAwesomeIcon icon={faIndianRupee} />
					{totalAmount}
				</div>
			</div>
			<div className={styles.charges}>
				<div>Discount </div>
				<div className={styles.amount}>
					- <FontAwesomeIcon icon={faIndianRupee} /> {totalDiscount}
				</div>
			</div>
			<div className={styles.charges}>
				<div>Tax </div>
				<div className={styles.amount}>
					<FontAwesomeIcon icon={faIndianRupee} /> {0}
				</div>
			</div>
			<div className={styles.charges}>
				<div>Delivery Charges </div>
				<div className={styles.amount}>
					<FontAwesomeIcon icon={faIndianRupee} /> {0}
				</div>
			</div>
			<div className={styles.totalAmount}>
				<div>Total Amount </div>
				<div className={styles.amount}>
					<FontAwesomeIcon icon={faIndianRupee} />
					{totalAmount}
				</div>
			</div>
			<div className={styles.order}>
				<button onClick={orderPlaceHander}>Place Order</button>
			</div>
		</div>
	);
};

export default PriceDetails;
