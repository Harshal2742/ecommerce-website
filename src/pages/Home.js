import styles from './Home.module.css';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/layout/Navbar';
import Profile from '../components/profile/Profile';
import MyOrders from '../components/orders/MyOrders';
import Product from '../components/product/Product';
import Products from '../components/products/Products';
import MyRatingsAndReviews from '../components/myratingsandreviews/MyRatingsAndReviews';
import Review from '../components/review/Review';

const Home = () => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	return (
		<Fragment>
			<Navbar />
			<main className={styles.Main}>
				<Routes>
					<Route path="/" element={<Products />} />
					<Route path="/products/:productId" element={<Product />} />
					{isLoggedIn && <Route path="/my-profile" element={<Profile />} />}
					{isLoggedIn && <Route path="/my-orders" element={<MyOrders />} />}
					{isLoggedIn && (
						<Route
							path="/my-ratings-and-reviews"
							element={<MyRatingsAndReviews />}
						/>
					)}
					{isLoggedIn && (
						<Route
							path="/my-ratings-and-reviews/:reviewId"
							element={<Review />}
						/>
					)}
					<Route path="/*" element={<p>Page not found.</p>} />
				</Routes>
			</main>
		</Fragment>
	);
};

export default Home;
