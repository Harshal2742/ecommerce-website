import styles from './MyOrders.module.css';
import FilterSort from './FilterSort';
import OrderItem from './OrderItem';

const order = [
	{
		orderId: 'order-1',
		id: 'p1',
		image:
			'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
		title: 'Black T-Shirt',
		availableSizes: ['L', 'XL', 'XXL'],
		price: 400,
		orderStatus: 'Delivered',
		date: Date.now(),
	},
	{
		orderId: 'order-1',
		id: 'p1',
		image:
			'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
		title: 'Black T-Shirt',
		availableSizes: ['L', 'XL', 'XXL'],
		price: 400,
		orderStatus: 'Cancelled',
		date: Date.now(),
	},
	{
		orderId: 'order-1',
		id: 'p1',
		image:
			'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
		title: 'Black T-Shirt',
		availableSizes: ['L', 'XL', 'XXL'],
		price: 400,
		orderStatus: 'Not yet delivered',
		date: new Date().getUTCFullYear(),
	},
];

const item = {
	orderId: 'order-1',
	id: 'p1',
	image:
		'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
	title: 'Black T-Shirt',
	availableSizes: ['L', 'XL', 'XXL'],
	price: 400,
	orderStatus: 'Not yet delivered',
	date: new Date().toISOString(),
};

const MyOrders = () => {
	return (
		<section className={styles.MyOrders}>
			<h2>My Orders</h2>
			<div className={styles.MyOrders__Filters}>
				<FilterSort />
			</div>
			<div>
				<OrderItem item={item} />
				<OrderItem item={item} />
				<OrderItem item={item} />
				<OrderItem item={item} />
				<OrderItem item={item} />
				<OrderItem item={item} />
				<OrderItem item={item} />
				<OrderItem item={item} />
				<OrderItem item={item} />
				<OrderItem item={item} />
			</div>
		</section>
	);
};

export default MyOrders;
