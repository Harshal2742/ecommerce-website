import styles from './MyRatingsAndReviews.module.css';
import MyRatingAndReview from './MyRatingAndReview';

const reviews = [
	{
		id: 'r1',
		rating: 1,
		date: new Date(),
		review: '',
		product: {
			id: 'p1',
			image: 'p1',
			title: 'Casual Shirt',
			availableSizes: ['L', 'XL', 'XXL'],
			availableColor: ['red', 'black', 'green'],
			summary: 'Men Slim Fit Checkered Spread Collar Casual Shirt',
		},
	},
	{
		id: 'r2',
		rating: 5,
		review: ` Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it. Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it. Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.
    Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it. Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it. Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.`,
		date: new Date(),
		product: {
			id: 'p1',
			image: 'p1',
			title: 'Casual Shirt',
			availableSizes: ['L', 'XL', 'XXL'],
			availableColor: ['red', 'black', 'green'],
			summary: 'Men Slim Fit Checkered Spread Collar Casual Shirt',
		},
	},
	{
		id: 'r3',
		rating: 3,
		review: `Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.`,
		date: new Date(),
		product: {
			id: 'p1',
			image: 'p1',
			title: 'Casual Shirt',
			availableSizes: ['L', 'XL', 'XXL'],
			availableColor: ['red', 'black', 'green'],
			summary: 'Men Slim Fit Checkered Spread Collar Casual Shirt',
		},
	},
	{
		id: 'r4',
		review: '',
		rating: 3,
		date: new Date(),
		product: {
			id: 'p1',
			image: 'p1',
			title: 'Casual Shirt',
			availableSizes: ['L', 'XL', 'XXL'],
			availableColor: ['red', 'black', 'green'],
			summary: 'Men Slim Fit Checkered Spread Collar Casual Shirt',
		},
	},
	{
		id: 'r5',
		rating: 3,
		review: `Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.`,
		date: new Date(),
		product: {
			id: 'p1',
			image: 'p1',
			title: 'Casual Shirt',
			availableSizes: ['L', 'XL', 'XXL'],
			availableColor: ['red', 'black', 'green'],
			summary: 'Men Slim Fit Checkered Spread Collar Casual Shirt',
		},
	},
];

const MyRatingsAndReviews = () => {
	return (
		<section className={styles.RatingsAndReview}>
			<h2>My Rating & Review</h2>
			<div>
				{reviews.map((review, index) => {
					return (
						<MyRatingAndReview key={index} review={review}></MyRatingAndReview>
					);
				})}
			</div>
		</section>
	);
};

export default MyRatingsAndReviews;
