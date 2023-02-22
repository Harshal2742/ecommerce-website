import { useNavigate, useParams } from 'react-router-dom';
import styles from './OrderDetails.module.css';
import ProductDetails from './ProductDetails';
import DeliveryAddress from './DeliveryAddress';
import PricingDetails from './PricingDetails';
import OrderStatus from './OrderStatus';
import Button from '../UI/Button';
import { useState, useEffect } from 'react';

import useHttp from '../../hooks/useHttp'

const OrderDetails = () => {
	// use for fetching order details
	const { orderId } = useParams();
	const navigate = useNavigate();
	const {sendRequest} = useHttp();
	const [order,setOrder] = useState(null);
	
	useEffect(()=>{
		const  dataTransformer = (response) => {
			setOrder(response.data.order);
		}

		const url = `${process.env.REACT_APP_API_URL}/orders/my-orders/${orderId}`;
		const headers = {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		};

		sendRequest({url,headers}, dataTransformer)
		
	},[sendRequest,orderId])

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

	if(!order){
	return <></>
	}

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
					deliveredDate={order.deliveryDate}
					cancelledDate={order.cancelledDate}
				/>
			</div>
			{/* {!order.isCancelled && !order.isDelivered && (
				<div className={styles.ButtonWrapper}>
					<Button clickHandler={onCancelHandler}>Cancel</Button>
				</div>
			)}
			{order.isDelivered && !order.reviewed && (
				<div className={styles.ButtonWrapper}>
					<Button clickHandler={onRateAndReviewHandler}>Rate & Review</Button>
				</div>
			)} */}
		</section>
	);
};

export default OrderDetails;
