import styles from './MostPopularProducts.module.css';
import useHttp from '../../hooks/useHttp';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MostPopularProducts = () => {
	const { isError, sendRequest } = useHttp();
	const [products, setProdducts] = useState([]);
	const navigate = useNavigate();
	
	useEffect(() => {
		const dataTransformer = (response) => {
			setProdducts(response.data.products)
		};
		
		const url = `${process.env.REACT_APP_API_URL}/products/most/popular`;
		
		sendRequest({ url }, dataTransformer);
	}, [sendRequest]);
	
		const onClickHandler = (queryParams, event) => {
			const query = new URLSearchParams(queryParams)
			navigate({
				pathname:'/home/products',
				search:query.toString()
			});
		};
	
	return (
		<section className={styles.Container}>
			<h2>Most popular products</h2>
			<div className={styles.Products}>
				{products.map((product, index) => {
					return (
						<div key={index} className={styles.Product}>
							<div>
								<img
									className={styles.Product__Image}
									src={`${process.env.REACT_APP_API_PRODUCT_IMG}/${product.image}`}
									alt={product.category}
									onClick={onClickHandler.bind(this,`?flt=category:${product.category}`)}
								/>
							</div>
							<div>
								<h4>{product.category}</h4>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default MostPopularProducts;
