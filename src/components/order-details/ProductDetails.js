import styles from './ProductDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = (props) => {
	return (
		<div className={styles.Product}>
			<div className={styles.Product__ImageWrapper}>
				<img
					className={styles.Product__Image}
					src={`${process.env.PUBLIC_URL}/img/products/${props.order.product.image}.jpg`}
					alt={props.order.product.name}
				/>
			</div>
			<div className={styles.Product__Details}>
				<p className={styles.Product__Details_Brand}>
					{props.order.product.brand}
				</p>
				<p className={styles.Product__Details_Name}>
					{props.order.product.name}
				</p>
				<p className={styles.Product__Details_Price}>
					<FontAwesomeIcon icon={faIndianRupee} />
					{props.order.product.price}
				</p>
			</div>
			<div className={styles.Selected}>
				<p>
					<span>Color : </span>
					{props.order.selectedColor}
				</p>
				<p>
					<span>Size : </span>
					{props.order.selectedSize}
				</p>
				<p>
					<span>Quantity : </span>
					{props.order.selectedQuantity}
				</p>
			</div>
		</div>
	);
};

export default ProductDetails;
