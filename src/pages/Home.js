import Products from '../components/products/Products';
import Product from '../components/product/Product';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Profile from '../components/profile/Profile';
import MyOrders from '../components/orders/MyOrders';
import { Fragment } from 'react';
import styles from './Home.module.css';

const Home = () => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	return (
		<Fragment>
			<Navbar />
			<main className={styles.Main}>
				<Routes>
					<Route path="/" element={<Products />} />
					{isLoggedIn && <Route path="/my-profile" element={<Profile />} />}
					{isLoggedIn && <Route path="/my-orders" element={<MyOrders />} />}
					{isLoggedIn && <Route path="/products/:productId" element={<Product />} />}
					<Route path='/*' element={<p>Page not found.</p>} />
				</Routes>
			</main>
		</Fragment>
	);
};

export default Home;
