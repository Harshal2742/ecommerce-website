import styles from './ProductDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = (props) => {
	const { product, mySelection } = props.order;

	return (
		<div className={styles.Product}>
			<div className={styles.Product__ImageWrapper}>
				<img
					className={styles.Product__Image}
					src={`${process.env.REACT_APP_API_PRODUCT_IMG}/${product.image}`}
					alt={product.title}
				/>
			</div>
			<div className={styles.Product__Details}>
				<p className={styles.Product__Details_Brand}>{product.brand}</p>
				<p className={styles.Product__Details_Name}>{product.title}</p>
				<p className={styles.Product__Details_Price}>
					<FontAwesomeIcon icon={faIndianRupee} />
					{product.price}
				</p>
			</div>
			<div className={styles.Selected}>
				{Object.keys(mySelection).map((key, index) => {
					return (
						<p key={index}>
							<span>{key} : </span>
							{mySelection[key]}
						</p>
					);
				})}
				{/* <p>
					<span>Size : </span>
					{props.order.selectedSize}
				</p> */}
				<p>
					<span>Quantity : </span>
					{props.order.quantity}
				</p>
			</div>
		</div>
	);
};

export default ProductDetails;
