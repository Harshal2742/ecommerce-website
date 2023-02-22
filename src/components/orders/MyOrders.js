import styles from './MyOrders.module.css';
import FilterSort from './FilterSort';
import OrderItem from './OrderItem';
import useHttp from '../../hooks/useHttp';
import { useEffect, useState } from 'react';

const MyOrders = () => {
	const { isError, sendRequest } = useHttp();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const dataTransformer = (response) => {
			setOrders(response.data.orders);
		};

		const url = `${process.env.REACT_APP_API_URL}/orders/my-orders`;
		const headers = {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		};

		sendRequest({ url, headers }, dataTransformer);
	}, [sendRequest]);

	return (
		<section className={styles.MyOrders}>
			<h2>My Orders</h2>
			{orders.length === 0 ? (
											<h1 className={styles.NoOrders}>
											No orders yet.
										</h1>
			) : (
				<>
					<div className={styles.MyOrders__Filters}>
						<FilterSort />
					</div>
					<div>
						{orders.map((order, index) => {
							return <OrderItem key={index} order={order} />;
						})}
					</div>
				</>
			)}
		</section>
	);
};

export default MyOrders;
