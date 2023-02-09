import styles from './CartItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { updateCartData } from '../../store/httpRequests';

const CartItem = (props) => {
	const dispatch = useDispatch();
	const { product, mySelection } = props.item;

	const increaseQuantityHandler = () => {
		dispatch(updateCartData('increment', { product: product._id }));
	};

	const decreaseQuantityHandler = () => {
		dispatch(updateCartData('decrement', { product: product._id }));
	};

	const removeItem = () => {
		dispatch(updateCartData('remove', { product: product._id }));
	};
	let selection = '';
	for (const key in mySelection) {
		selection += `${key} : ${mySelection[key]} | `;
	}
  selection = selection.slice(0,selection.length - 3);

	return (
		<div className={styles.main}>
			<div>
				<img
					src={`${process.env.REACT_APP_API_PRODUCT_IMG}/${product.image}`}
					alt={product.title}
					className={styles['product-image']}
				/>
			</div>
			<div className={styles.Item__Details}>
				<div className={styles['product-title']}>
					<p>{product.title}</p>
				</div>
				<div className={styles.Selection}>{selection}</div>
				<div className={styles.PriceQuantityWrapper}>
					<div className={styles.quantity}>
						<button onClick={decreaseQuantityHandler}>-</button>
						<span>{props.item.quantity}</span>
						<button onClick={increaseQuantityHandler}>+</button>
					</div>
					<div className={styles['per-item-price']}>
						<FontAwesomeIcon
							className={styles['per-item-price']}
							icon={faIndianRupee}
						/>
						<span>{product.price}</span>
						<span> for each</span>
					</div>
				</div>
			</div>
			<div className={styles.remove}>
				<button onClick={removeItem}>X</button>
			</div>
		</div>
	);
};

export default CartItem;
