import styles from './Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';

const Product = (props) => {
	const dispatch = useDispatch();

	const addToCartHandler = () => {
		dispatch(cartActions.addItem({ ...props.item }));
	};

	return (
		<div className={styles.item}>
			<img src={props.item.image} alt={props.item.title} id="example" />
			<div className={styles.title}>{props.item.title}</div>
			<div>
				<FontAwesomeIcon icon={faIndianRupee} /> <span>{props.item.price}</span>
			</div>
			<button onClick={addToCartHandler}>Add to cart</button>
		</div>
	);
};

export default Product;
