import styles from './Item.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';
import { useNavigate } from 'react-router-dom';


const Item = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const addToCartHandler = () => {
		dispatch(cartActions.addItem({ ...props.item }));
	};

	return (
		<div className={styles.item}>
			<div className={styles.item__ImagePriceDiv} onClick={() => navigate(`/home/products/${props.item.id}`)}>
				<img src={props.item.image} alt={props.item.title} id="example" />
				<div className={styles.title}>{props.item.title}</div>
				<div>
					<FontAwesomeIcon icon={faIndianRupee} />{' '}
					<span>{props.item.price}</span>
				</div>
			</div>
			<button onClick={addToCartHandler}>Add to cart</button>
		</div>
	);
};

export default Item;
