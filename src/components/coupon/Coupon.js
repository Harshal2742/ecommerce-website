import styles from './Coupon.module.css';

const Coupon = () => {
	return (
		<section className={styles.Container}>
			<h2>Coupons</h2>
			<h1 className={styles.Message}>{'No coupons found'}</h1>
		</section>
	);
};

export default Coupon;
