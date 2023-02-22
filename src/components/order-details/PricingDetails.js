import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

import styles from './PricingDetails.module.css';

const PricingDetails = (props) => {



	return (
		<div className={styles.Pricing}>
			<h3>Price Details</h3>
			<div className={styles.PricingWrapper}>
				<p>
					<span>Price</span>
					<span className={styles.Pricing__Content_Amount}>
						<FontAwesomeIcon icon={faIndianRupee} />
						{props.order.product.price}
					</span>
				</p>
				<p>
					<span>Discount</span>
					<span className={styles.Pricing__Content_Amount}>
						- <FontAwesomeIcon icon={faIndianRupee} />
						{props.order.discount}
					</span>
				</p>
				<p>
					<span>Quantity</span>
					<span className={styles.Pricing__Content_Amount}>
						<FontAwesomeIcon icon={faIndianRupee} />
						{props.order.quantity}
					</span>
				</p>
				<p>
					<span>Tax</span>
					<span className={styles.Pricing__Content_Amount}>
						<FontAwesomeIcon icon={faIndianRupee} />
						{props.order.tax}
					</span>
				</p>
				<p>
					<span>Delivery Charges</span>{' '}
					<span className={styles.Pricing__Content_Amount}>
						<FontAwesomeIcon icon={faIndianRupee} />
						{props.order.deliveryCharges}
					</span>
				</p>
			</div>
			<p>
				<span>Total Amount</span>
				<span className={styles.Pricing__Content_Amount}>
					<FontAwesomeIcon icon={faIndianRupee} />
					{props.order.totalAmount}
				</span>
			</p>
		</div>
	);
};

export default PricingDetails;
