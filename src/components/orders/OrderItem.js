import styles from './OrderItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import FormateDate from '../../utils/FormateDate';

const OrderItem = (props) => {
	const naviage = useNavigate();
	
	props.order.deliveryDate = FormateDate(props.order.deliveryDate);

	return (
		<div
			className={styles.Item}
			onClick={() => {
				naviage(`/home/my-orders/${props.order.id}`);
			}}
		>
			<div>
				<img
					className={styles.Item__Image}
					src={process.env.PUBLIC_URL + '/img/products/p1.jpg'}
					alt={props.order.name}
				/>
			</div>
			<div className={`${styles.Item__element} ${styles.Item__Title}`}>
				<p>{props.order.product.name}</p>
			</div>
			<div className={styles.Item__element}>
				<p>
					<FontAwesomeIcon icon={faIndianRupee}></FontAwesomeIcon>
					{props.order.product.price * props.order.selectedQuantity}
				</p>
			</div>
			<div className={styles.Item__element}>
				<p>
					<span>status</span>
				</p>
				<p>{props.order.orderStatus}</p>
			</div>
			<div className={`${styles.Item__element} ${styles.Item__Date}`}>
				<p>
					{props.order.deliveryDate > Date.now()
						? 'Delivery expected on '
						: 'Delivered on '}
				</p>
				<p>{props.order.deliveryDate}</p>
			</div>
		</div>
	);
};
export default OrderItem;
