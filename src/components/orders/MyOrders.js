import styles from './MyOrders.module.css';
import FilterSort from './FilterSort';
import OrderItem from './OrderItem';

const orders = [
	{
		id: 'order-1',
		product: {
			id: 'p1',
			image: 'p1',
			name: 'Men Slim Fit Checkered Spread Collar Casual Shirt',
			price: 400,
		},
		selectedSize: 'X',
		selectedColor: 'red',
		selectedQuantity: 4,
		deliveryAddress: {
			name: 'Raj Patil',
			address: '502 Basti galli,Shedshal, Kolhapur District',
			postalCode: '416105',
			state: 'Maharashtra',
			phoneNumber: ['1234567890', '0987654321'],
		},
		orderDate: new Date(),
		orderStatus: 'Not yet delivered',
		deliveryDate: new Date(),
	},
	{
		id: 'order-2',
		product: {
			id: 'p1',
			image: 'p1',
			name: 'Spread Collar Casual Shirt',
			price: 400,
		},
		selectedSize: 'X',
		selectedColor: 'red',
		selectedQuantity: 4,
		deliveryAddress: {
			name: 'Raj Patil',
			address: '502 Basti galli,Shedshal, Kolhapur District',
			postalCode: '416105',
			state: 'Maharashtra',
			phoneNumber: ['1234567890', '0987654321'],
		},
		orderDate: new Date(),
		orderStatus: 'Not yet delivered',
		deliveryDate: new Date(),
	},
	{
		id: 'order-3',
		product: {
			id: 'p1',
			image: 'p1',
			name: 'Men Slim Fit Checkered Spread Collar Casual Shirt',
			price: 400,
		},
		selectedSize: 'X',
		selectedColor: 'red',
		selectedQuantity: 4,
		deliveryAddress: {
			name: 'Raj Patil',
			address: '502 Basti galli,Shedshal, Kolhapur District',
			postalCode: '416105',
			state: 'Maharashtra',
			phoneNumber: ['1234567890', '0987654321'],
		},
		orderDate: new Date(),
		orderStatus: 'Not yet delivered',
		deliveryDate: new Date(),
	},
	{
		id: 'order-4',
		product: {
			id: 'p1',
			image: 'p1',
			name: 'Men Slim Fit Checkered Spread Collar Casual Shirt',
			price: 400,
		},
		selectedSize: 'X',
		selectedColor: 'red',
		selectedQuantity: 4,
		deliveryAddress: {
			name: 'Raj Patil',
			address: '502 Basti galli,Shedshal, Kolhapur District',
			postalCode: '416105',
			state: 'Maharashtra',
			phoneNumber: ['1234567890', '0987654321'],
		},
		orderDate: new Date(),
		orderStatus: 'Not yet delivered',
		deliveryDate: new Date(),
	},
];

const MyOrders = () => {
	return (
		<section className={styles.MyOrders}>
			<h2>My Orders</h2>
			<div className={styles.MyOrders__Filters}>
				<FilterSort />
			</div>
			<div>
				{orders.map((order, index) => {
					return <OrderItem key={index} order={order} />;
				})}
			</div>
		</section>
	);
};

export default MyOrders;
