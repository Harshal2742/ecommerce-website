import Products from '../components/products/Products';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Profile from '../components/profile/Profile';
import { Fragment } from 'react';
import styles from './Home.module.css'

const Home = () => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	return (
		<Fragment>
			<Navbar />
			<main className={styles.Main}>
				<Routes>
					<Route path="/" element={<Products />} />
					{isLoggedIn && <Route path="/my-profile" element={<Profile />} />}
				</Routes>
			</main>
		</Fragment>
	);
};

export default Home;
