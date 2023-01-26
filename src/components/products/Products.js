import styles from './Products.module.css';
import Item from './item/Item';
import Filters from './Filters/Filters';
import { useSelector } from 'react-redux';

const Products = () => {
	const products = useSelector((state) => state.products.availableProducts);
	const productsCount = useSelector(
		(state) => state.products.availableProductsCount
	);
	return (
		<div className={styles.Container}>
			<div className={styles.Filters}>
				<Filters />
			</div>
			<div className={styles.Products}>
				<div>
					<h3>Products</h3>
					<p>{productsCount} product(s) found</p>
				</div>
				<div className={styles.Products__Items}>
					{products.map((item) => (
						<Item item={item} key={item.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
