import { useNavigate, useParams } from 'react-router-dom';
import styles from './OrderDetails.module.css';
import ProductDetails from './ProductDetails';
import DeliveryAddress from './DeliveryAddress';
import PricingDetails from './PricingDetails';
import OrderStatus from './OrderStatus';
import Button from '../UI/Button';
// import { useState } from 'react';

const order = {
	id: 'order-1',
	product: {
		id: 'p1',
		brand: 'Lewel',
		image: 'p1',
		name: 'Men Slim Fit Checkered Spread Collar Casual Shirt',
		price: 400,
	},
	selectedSize: 'X',
	selectedColor: 'Red',
	selectedQuantity: 4,
	deliveryAddress: {
		name: 'Raj Patil',
		address: '502 Basti galli,Shedshal, Kolhapur District',
		postalCode: '416105',
		state: 'Maharashtra',
		phoneNumber: ['1234567890', '0987654321'],
	},
	orderDate: new Date(Date.now() - 1000 * 60 * 60 * 24),
	orderStatus: 'Not yet delivered',
	deliveryDate: new Date(),
	totalAmount: 1660,
	deliveryCharges: 60,
	tax: 0,
	discount: 0,
	reviewed: false,
	isCancelled: false,
	isDelivered: false,
	cancelledDate: null,
};

const OrderDetails = () => {
	// use for fetching order details
	const { orderId } = useParams();
	const navigate = useNavigate();

	// for rerendering component when clicked on button set order object in state
	const onCancelHandler = () => {
		console.log('cancel request send');
	};

	const onRateAndReviewHandler = () => {
		navigate({
			pathname: '/home/write-review',
			search: `?productId=${order.product.id}&orderId=${order.id}`,
		});
	};

	return (
		<section className={styles.Container}>
			<h2>Order Details</h2>
			<ProductDetails order={order} />
			<div className={styles.Wrapper}>
				<DeliveryAddress deliveryAddress={order.deliveryAddress} />
				<PricingDetails order={order} />
				<OrderStatus
					orderDate={order.orderDate}
					orderStatus={order.orderStatus}
					deliveryDate={order.deliveryDate}
					isDelivered={order.isDelivered}
					isCancelled={order.isCancelled}
					cancelledDate={order.cancelledDate}
				/>
			</div>
			{!order.isCancelled && !order.isDelivered && (
				<div className={styles.ButtonWrapper}>
					<Button clickHandler={onCancelHandler}>Cancel</Button>
				</div>
			)}
			{order.isDelivered && !order.reviewed && (
				<div className={styles.ButtonWrapper}>
					<Button clickHandler={onRateAndReviewHandler}>Rate & Review</Button>
				</div>
			)}
		</section>
	);
};

export default OrderDetails;
