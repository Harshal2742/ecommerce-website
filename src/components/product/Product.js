import { useParams } from 'react-router-dom';
import styles from './Product.module.css';
import Slider from '../UI/Slider';
import ProductDetails from './ProductDetails';
import RatingAndReview from './RatingAndReview';
import HorizontalScrollingBox from '../UI/HorizontalScrollingBox';
import useHttp from '../../hooks/useHttp';
import { Fragment, useEffect, useState } from 'react';

// const product = {
// 	id: 'p1',
// 	brand: 'Lewel',
// 	title: 'Men Slim Fit Checkered Casual Shirt',
// 	image: 'p1',
// 	images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
// 	selection: {
// 		size: ['L', 'XL', 'XXL'],
// 		color: ['Red', 'Black', 'Green'],
// 	},
// 	discription:
// 		'Surhi presents to you a new range of stylish and cool new shirts yet which are affordable for everyone. This fashionable and stylish Surhi men shirt makes your look cool and attractive. It is perfect for your summer attire.',
// 	price: 349,
// 	avgRating: 4.3,
// 	ratingsQuantity: 1024,
// 	reviewsQuantity: 342,
// };

const Product = () => {
	// request for product
	const [product, setProduct] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);
	const { sendRequest } = useHttp();
	const { productId } = useParams();
	useEffect(() => {
		const dataTransformer = (response) => {
			setProduct(response.data.doc);
			setIsLoaded(true);
		};

		const url = `${process.env.REACT_APP_API_URL}/products/${productId}`;
		sendRequest({ url }, dataTransformer);
	}, [productId, sendRequest]);

	if (!isLoaded) {
		return <></>;
	}

	const imageSlides = product.images.map((image, index) => {
		return (
			<img
				key={index}
				style={{ width: 400, height: 500 }}
				src={`${process.env.REACT_APP_API_PRODUCT_IMG}/${image}`}
				alt="product"
			/>
		);
	});

	return (
		<div className={styles.Product}>
			<div className={styles.Product__ImagesAndDetails}>
				<div className={styles.Product__Images}>
					<Slider slides={imageSlides} timeInterval={2000} />
				</div>
				<div className={styles.Product__Details}>
					<ProductDetails product={product} />
				</div>
			</div>
			<div className={styles.Product__RatingAndReviews}>
				<h4 className={styles.Product__RatingAndReviews_Title}>
					Ratings & Reviews
				</h4>
				<HorizontalScrollingBox>
					{product.reviews.map((review, index) => {
						return <RatingAndReview key={index} review={review} />;
					})}
				</HorizontalScrollingBox>
			</div>
		</div>
	);
};

export default Product;
