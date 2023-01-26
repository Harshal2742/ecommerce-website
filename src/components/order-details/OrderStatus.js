import styles from './OrderStatus.module.css';
import FormateDate from '../../utils/FormateDate';

const OrderStatus = (props) => {
	const orderDate = FormateDate(props.orderDate);
	const deliveryDate = FormateDate(props.deliveryDate);

	let message;

	if (props.isCancelled && props.cancelledDate) {
		message = 'Order cancelled on ';
	} else if (!props.isDelivered) {
		message = 'Delivery expected on ';
	} else {
		message = 'Delivered on ';
	}

	return (
		<div className={styles.OrderStatus}>
			<h3>Order Status</h3>
			<div className={styles.orderDates}>
				<p>{props.orderStatus}</p>
				<p>Order placed on {orderDate}</p>
				<p>
					{message}
					{deliveryDate}
				</p>
			</div>
		</div>
	);
};

export default OrderStatus;
