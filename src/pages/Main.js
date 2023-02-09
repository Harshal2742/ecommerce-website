import styles from './Main.module.css';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from '../components/layout/Navbar';
import Home from '../components/home/Home';
import Profile from '../components/profile/Profile';
import MyOrders from '../components/orders/MyOrders';
import Product from '../components/product/Product';
import Products from '../components/products/Products';
import MyRatingsAndReviews from '../components/my-ratings-and-reviews/MyRatingsAndReviews';
import Review from '../components/review/Review';
import OrderDetails from '../components/order-details/OrderDetails';
import Footer from '../components/layout/Footer';

const Main = () => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	return (
		<Fragment>
			<Navbar />
			<main className={styles.Main}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
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
					{isLoggedIn && <Route path="/write-review" element={<Review />} />}
					{isLoggedIn && (
						<Route path="/my-orders/:orderId" element={<OrderDetails />} />
					)}
					<Route path="/*" element={<p>Page not found</p>} />
				</Routes>
			</main>
			<Footer />
		</Fragment>
	);
};

export default Main;
