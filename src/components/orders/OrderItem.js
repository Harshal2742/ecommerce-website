import styles from './OrderItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

const OrderItem = (props) => {
	return (
		<div className={styles.Item}>
			<div>
				<img
					className={styles.Item__Image}
					src={process.env.PUBLIC_URL + '/img/products/p1.jpg'}
					alt={props.item.title}
				/>
			</div>
			<div className={`${styles.Item__element} ${styles.Item__Title}`}>
				<p>{props.item.title}</p>
			</div>
			<div className={styles.Item__element}>
				<p>
					<FontAwesomeIcon icon={faIndianRupee}></FontAwesomeIcon>
					{props.item.price}
				</p>
			</div>
			<div className={styles.Item__element}>
				<p>
					<span>status</span>
				</p>
				<p>{props.item.orderStatus}</p>
			</div>
			<div className={`${styles.Item__element} ${styles.Item__Date}`}>
				<p>
					{' '}
					{props.item.date > Date.now()
						? 'Delivery expected on '
						: 'Delivered on '}
				</p>
				<p>
					{`${new Date().toLocaleString('en-IN', {
						day: 'numeric',
						month: 'short',
						year: 'numeric',
					})}`}
				</p>
			</div>
		</div>
	);
};
export default OrderItem;
