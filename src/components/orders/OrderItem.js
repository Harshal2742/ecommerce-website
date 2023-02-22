import styles from './OrderItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import FormateDate from '../../utils/FormateDate';

const OrderItem = (props) => {
	const naviage = useNavigate();
	
	// temporay
	// props.order.deliveryDate = props.order.orderDate;
	let date = FormateDate(new Date(props.order.orderDate.split('T')[0]));

	let message;
	if(props.order.orderStatus === 'On the way'){
		message = 'Delivery expected on'
	}else if(props.order.orderStatus === 'delivered'){
		message = "Delivered on"
	}else if(props.order.orderStatus === 'cancelled'){
		message = "Order cancelled on"
	}
	

	return (
		<div
			className={styles.Item}
			onClick={() => {
				naviage(`/home/my-orders/${props.order._id}`);
			}}
		>
			<div>
				<img
					className={styles.Item__Image}
					src={`${process.env.REACT_APP_API_PRODUCT_IMG}/${props.order.product.image}`}
					alt={props.order.product.title}
				/>
			</div>
			<div className={`${styles.Item__element} ${styles.Item__Title}`}>
				<p>{props.order.product.title}</p>
			</div>
			<div className={styles.Item__element}>
				<p>
					<FontAwesomeIcon icon={faIndianRupee}/>
					{props.order.totalAmount}
				</p>
			</div>
			<div className={styles.Item__element}>
				<p className={styles.Subtitle}>
					<span>status</span>
				</p>
				<p>{props.order.orderStatus}</p>
			</div>
			<div className={`${styles.Item__element} ${styles.Item__Date}`}>
				<p>
					{message}
				</p>
				<p>{date}</p>
			</div>
		</div>
	);
};
export default OrderItem;
