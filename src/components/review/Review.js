import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import Button from '../UI/Button';

import styles from './Review.module.css';
import { useEffect, useState } from 'react';

const review = {
	id: 'r2',
	rating: 5,
	review: ` Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it. Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it. Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.
  Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it. Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it. Wow nice shirt at this price...i am satisfied with this shirt..if you're 20+ age then you have to go with M size... perfect size and length..just worth it.`,
	date: new Date(),
	product: {
		id: 'p1',
		image: 'p1',
		category: 'Casual Shirt',
		availableSizes: ['L', 'XL', 'XXL'],
		availableColor: ['red', 'black', 'green'],
		name: 'Men Slim Fit Checkered Spread Collar Casual Shirt',
	},
};
let product = review.product;

const Review = () => {
	const { reviewId } = useParams();

	const [queryParams] = useSearchParams();

	const [starCount, setStarCount] = useState(0);
	const [reviewText, setReviewText] = useState('');

	useEffect(() => {
		if (reviewId) {
			setStarCount(review.rating);
			setReviewText(review.review);
		} else {
			console.log('new review');
			console.log(queryParams.get('productId'));
			console.log(queryParams.get('orderId'));
		}
	}, [reviewId, queryParams]);

	const star = [1, 2, 3, 4, 5];
	const navigate = useNavigate();

	const onClickStarHandler = (event) => {
		setStarCount(+event.currentTarget.dataset.count);
	};

	const formSubmitHander = (event) => {
		event.preventDefault();

		// send http request
		console.log(reviewText);
		console.log(starCount);
		navigate(-1);
	};

	const rating = (
		<p>
			{star.map((count) => {
				let star = (
					<span
						key={count}
						className={styles.Rating__Stars_Star}
						data-count={count}
						onClick={onClickStarHandler}
					>
						{count <= starCount ? (
							<FontAwesomeIcon icon={filledStar} />
						) : (
							<FontAwesomeIcon icon={emptyStar} />
						)}
					</span>
				);
				return star;
			})}
		</p>
	);

	return (
		<section className={styles.Container}>
			<div>
				<h2>Ratings & Reviews</h2>
			</div>
			<div className={styles.Product}>
				<div>
					<img
						className={styles.Product__Image}
						src={`${process.env.PUBLIC_URL}/img/products/${product.image}.jpg`}
						alt={product.name}
					/>
				</div>
				<div>
					<p className={styles.Product__Title}>{product.name}</p>
				</div>
			</div>
			<div>
				<form onSubmit={formSubmitHander}>
					<div className={styles.Rating}>
						<h3>Rate this product</h3>
						<div className={styles.Rating__Stars}>{rating}</div>
					</div>
					<div className={styles.Review}>
						<h3>Review this product</h3>
						<textarea
							value={reviewText}
							onChange={(e) => setReviewText(e.target.value)}
						></textarea>
					</div>
					<div className={styles.ButtonWrapper}>
						<Button>Submit</Button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Review;
