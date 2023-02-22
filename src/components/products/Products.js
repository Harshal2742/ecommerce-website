import styles from './Products.module.css';
import Item from './item/Item';
import Filters from './Filters/Filters';
import { useEffect, useState } from 'react';
import useHttp from '../../hooks/useHttp';
import { useLocation } from 'react-router-dom';

const Products = () => {
	const { search } = useLocation();
	const { sendRequest, isError } = useHttp();
	
	const [products, setProducts] = useState([]);
	const [productsCount, setProductsCount] = useState(0);
	
	useEffect(() => {
		const dataTransformer = (response) => {
			setProducts(response.data.doc);
			setProductsCount(response.result);
		};

		const url = `${process.env.REACT_APP_API_URL}/products${search}`;


		sendRequest({ url }, dataTransformer);
	}, [search, sendRequest, setProducts, setProductsCount]);

	return (
		<div className={styles.Container}>
			<div className={styles.Filters}>
				<Filters onFilter />
			</div>
			<div className={styles.Products}>
				<div>
					<h3>Products</h3>
					<p>{productsCount} product(s) found</p>
				</div>
				<div className={styles.Products__Items}>
					{products.map((item) => (
						<Item item={item} key={item._id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
