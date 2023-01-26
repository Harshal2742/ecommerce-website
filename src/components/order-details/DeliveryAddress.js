import styles from './DeliveryAddress.module.css';

const DeliveryAddress = (props) => {
	return (
		<div className={styles.Delivery}>
			<h3>Delivery Address</h3>
			<div>
				<p>
					<span>{props.deliveryAddress.name}</span>
				</p>
			</div>
			<div>
				<p>{props.deliveryAddress.address}</p>
				<p>{`${props.deliveryAddress.postalCode},${props.deliveryAddress.state}`}</p>
			</div>
			<div>
				<p>
					<span>Phone Number</span>
				</p>
				<p>
					{props.deliveryAddress.phoneNumber[0]},{' '}
					{props.deliveryAddress.phoneNumber[1]}
				</p>
			</div>
		</div>
	);
};

export default DeliveryAddress;
