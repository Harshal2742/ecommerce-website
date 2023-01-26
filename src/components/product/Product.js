import { useParams } from 'react-router-dom';
import styles from './Product.module.css';
import DivSlider from '../UI/DivSlider';
import ProductDetails from './ProductDetails';
import RatingAndReview from './RatingAndReview';
import HorizontalScrollingBox from '../UI/HorizontalScrollingBox';

const item = {
	id: 'p1',
	brand: 'Lewel',
	name: 'Men Slim Fit Checkered Casual Shirt',
	image: 'p1',
	images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
	availableSizes: ['L', 'XL', 'XXL'],
	availableColor: ['Red', 'Black', 'Green'],
	discription:
		'Surhi presents to you a new range of stylish and cool new shirts yet which are affordable for everyone. This fashionable and stylish Surhi men shirt makes your look cool and attractive. It is perfect for your summer attire.',
	price: 349,
	avgRating: 4.3,
	ratingsQuantity: 1024,
	reviewsQuantity: 342,
};

const usersRatingsAndReviews = [
	{
		name: 'Raj Patil',
		image: 'default',
		rating: 4,
		review: `Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.`,
		date: new Date(),
	},
	{
		name: 'Kiran Patil',
		image: 'default',
		rating: 4,
		review: `Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.`,
		date: new Date(),
	},
	{
		name: 'Kishor Rajput',
		image: 'default',
		rating: 2,
		review: `Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.`,
		date: new Date(),
	},
	{
		name: 'Shree Koli',
		image: 'default',
		rating: 5,
		review: `Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.`,
		date: new Date(),
	},
	{
		name: 'Jaysh Nikumber',
		image: 'default',
		rating: 1,
		review: `Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.`,
		date: new Date(),
	},
	{
		name: 'Jaysh Nikumber',
		image: 'default',
		rating: 5,
		review: `Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.`,
		date: new Date(),
	},
	{
		name: 'Jaysh Nikumber',
		image: 'default',
		rating: 3,
		review: `Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.`,
		date: new Date(),
	},
	{
		name: 'Jaysh Nikumber',
		image: 'default',
		rating: 3,
		review: `Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.`,
		date: new Date(),
	},
	{
		name: 'Jaysh Nikumber',
		image: 'default',
		rating: 3,
		review: `Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.`,
		date: new Date(),
	},
];

const Product = () => {
	// request for product
	const { productId } = useParams();

	const images = item.images.map((url) => {
		return (
			<img
				style={{ width: 400, height: 500 }}
				src={`${process.env.PUBLIC_URL}/img/products/${url}.jpg`}
				alt="product"
			/>
		);
	});

	return (
		<div className={styles.Product}>
			<div className={styles.Product__ImagesAndDetails}>
				<div className={styles.Product__Images}>
					<DivSlider
						elements={images}
						timeInterval={2500}
					/>
				</div>
				<div className={styles.Product__Details}>
					<ProductDetails item={item} />
				</div>
			</div>
			<div className={styles.Product__RatingAndReviews}>
				<h4 className={styles.Product__RatingAndReviews_Title}>
					Ratings & Reviews
				</h4>
				<HorizontalScrollingBox>
					{usersRatingsAndReviews.map((user, index) => {
						return <RatingAndReview key={index} user={user} />;
					})}
				</HorizontalScrollingBox>
			</div>
		</div>
	);
};

export default Product;
