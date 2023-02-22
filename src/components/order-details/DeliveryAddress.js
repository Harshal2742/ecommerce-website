import styles from './DeliveryAddress.module.css';

const DeliveryAddress = (props) => {

	const {houseNumber,streetAddress,city,district,postalCode,state} = props.deliveryAddress;
	return (
		<div className={styles.Delivery}>
			<h3>Delivery Address</h3>
			<div>
				<p>
					<span>{`${props.deliveryAddress.firstName} ${props.deliveryAddress.lastName}`}</span>
				</p>
			</div>
			<div>
				<p>{`${houseNumber}, ${streetAddress}, ${city}, ${district} district`}</p>
				<p>{`${postalCode}, ${state}`}</p>
			</div>
			<div>
				<p>
					<span>Phone Number</span>
				</p>
				<p>
					{props.deliveryAddress.phoneNumber1},{' '}
					{props.deliveryAddress.phoneNumber2}
				</p>
			</div>
		</div>
	);
};

export default DeliveryAddress;
