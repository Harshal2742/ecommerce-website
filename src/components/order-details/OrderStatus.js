import styles from './OrderStatus.module.css';
import FormateDate from '../../utils/FormateDate';

const OrderStatus = (props) => {
	const orderDate = FormateDate(new Date(props.orderDate.split('T')[0]));


	const date = FormateDate(new Date());

	let message;
	if (props.orderStatus === 'On the way') {
		message = 'Delivery expected on ';
	} else if (props.orderStatus === 'delivered') {
		message = 'Delivered on ';
	} else if (props.orderStatus === 'cancelled') {
		message = 'Order cancelled on ';
	}

	return (
		<div className={styles.OrderStatus}>
			<h3>Order Status</h3>
			<div className={styles.orderDates}>
				<p>{props.orderStatus}</p>
				<p>Order placed on {orderDate}</p>
				<p>
					{message}
					{date}
				</p>
			</div>
		</div>
	);
};

export default OrderStatus;
