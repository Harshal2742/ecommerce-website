import styles from './Item.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
// import { cartActions } from '../../../store/cart-slice';
import { updateCartData } from '../../../store/httpRequests';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Item = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const addToCartHandler = () => {
		const { _id, selection } = props.item;

		const mySelection = {};

		for (const key in selection) {
			mySelection[key] = selection[key][0];
		}

		const item = {
			product: _id,
			mySelection,
		};

		dispatch(updateCartData('increment', item));
	};

	return (
		<div className={styles.item}>
			<div>
				<img
					onClick={() => navigate(`/home/products/${props.item._id}`)}
					className={styles.Item__Image}
					src={`${process.env.REACT_APP_API_PRODUCT_IMG}/${props.item.image}`}
					alt={props.item.title}
					id="example"
				/>
				<div className={styles.Item__Brand}>{props.item.brand}</div>
				<div className={styles.Item__Title}>{props.item.title}</div>
				<div className={styles.Item__PriceCartWrapper}>
					<div className={styles.Item__Price}>
						<FontAwesomeIcon icon={faIndianRupee} />{' '}
						<span>{props.item.price}</span>
					</div>
					<div className={styles.Item__AddToCart} onClick={addToCartHandler}>
						<FaShoppingCart />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
