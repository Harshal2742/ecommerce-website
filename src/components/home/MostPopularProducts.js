import styles from './MostPopularProducts.module.css';

const products = [
	{
		category: 'Casual Shirt',
		image: 'p1',
	},
	{
		category: 'Casual Shirt',
		image: 'p1',
	},
	{
		category: 'Casual Shirt',
		image: 'p1',
	},
	{
		category: 'Casual Shirt',
		image: 'p1',
	},
	{
		category: 'Casual Shirt',
		image: 'p1',
	},
	{
		category: 'Casual Shirt',
		image: 'p1',
	},
	{
		category: 'Casual Shirt',
		image: 'p1',
	},
	{
		category: 'Casual Shirt',
		image: 'p1',
	},
];

const MostPopularProducts = () => {
	return (
		<section className={styles.Container}>
			<h2>Most popular products</h2>
			<div className={styles.Products}>
				{products.map((product,index) => {
					return (
						<div key={index} className={styles.Product}>
							<div>
								<img
									className={styles.Product__Image}
									src={`${process.env.PUBLIC_URL}/img/products/${product.image}.jpg`}
									alt={product.category}
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
