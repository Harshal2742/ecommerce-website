import styles from './DeliveryAddress.module.css';
import LabelInput from '../UI/LabelInput';
// import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
import useHttp from '../../hooks/useHttp';

const DeliveryAddress = () => {
	const userData = useSelector((state) => state.user.userData);
	const { sendRequest } = useHttp();

	const navigate = useNavigate();

	const onCancelHandler = () => {
		navigate('/home', { replace: true });
	};

	const dataTransformer = (response) => {
		window.location.replace(response.data.url);
	};

	const onMakePaymentHandler = (event) => {
		event.preventDefault();
		const form = document.getElementById('addressForm');
		const formData = new FormData(form);

		const address = {};
		formData.forEach((value, key) => {
			address[key] = value;
		});
		// navigate('/home/payment')

		const url = `${process.env.REACT_APP_API_URL}/orders/checkout-session`;
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		};

		sendRequest(
			{ url, headers, body: { ...address }, method: 'POST' },
			dataTransformer
		);
	};

	return (
		<section className={styles.Container}>
			<h2>Delivery Address</h2>
			<form id={'addressForm'} className={styles.AddressForm} onSubmit={onMakePaymentHandler}>
				<div className={styles.OuterWrapper}>
					<LabelInput
						label={'First Name'}
						inputType={'text'}
						defaultValue={userData.firstName}
						required={true}
						name={'firstName'}
						width={'50%'}
					/>
					<LabelInput
						label={'Last Name'}
						inputType={'text'}
						defaultValue={userData.lastName}
						required={true}
						name={'lastName'}
						width={'50%'}
					/>
				</div>
				<div className={styles.OuterWrapper}>
					<LabelInput
						label={'State'}
						inputType={'text'}
						required={true}
						name={'state'}
						width={'33%'}
					/>
					<LabelInput
						label={'District'}
						inputType={'text'}
						required={true}
						name={'district'}
						width={'33%'}
					/>
					<LabelInput
						label={'City'}
						inputType={'text'}
						required={true}
						name={'city'}
						width={'33%'}
					/>
				</div>
				<div className={styles.OuterWrapper}>
					<LabelInput
						label={'Postal Code'}
						inputType={'tel'}
						required={true}
						name={'postalCode'}
						width={'20%'}
						maxLength={6}
					/>
					<LabelInput
						label={'House Number'}
						inputType={'tel'}
						required={true}
						name={'houseNumber'}
						width={'20%'}
					/>
					<LabelInput
						label={'Street Address'}
						inputType={'text'}
						required={true}
						name={'streetAddress'}
						width={'60%'}
					/>
				</div>
				<div className={styles.OuterWrapper}>
					<LabelInput
						label={'Phone 1'}
						inputType={'tel'}
						defaultValue={userData.phone}
						required={true}
						name={'phoneNumber1'}
						width={'50%'}
						maxLength={10}
					/>
					<LabelInput
						label={'Phone 2 (optional)'}
						inputType={'tel'}
						name={'phoneNumber2'}
						width={'50%'}
						maxLength={10}
					/>
				</div>
				<div className={styles.OuterWrapper}>
					<Button
						type="reset"
						clickHandler={onCancelHandler}
						style={styles.buttonStyle}
					>
						CANCEL
					</Button>
					<Button type="submit" style={styles.buttonStyle}>
						MAKE PAYMENT
					</Button>
				</div>
			</form>
		</section>
	);
};

export default DeliveryAddress;
