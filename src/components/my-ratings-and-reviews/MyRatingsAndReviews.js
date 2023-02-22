import styles from './MyRatingsAndReviews.module.css';
import MyRatingAndReview from './MyRatingAndReview';
import { useEffect, useState } from 'react';
import useHttp from '../../hooks/useHttp';

const MyRatingsAndReviews = () => {
	const [reviews, setReviews] = useState([]);
	const { sendRequest } = useHttp();
	const [reivewCount, setReviewCount] = useState(0);

	useEffect(() => {
		const dataTransformer = (response) => {
			setReviews(response.data.reviews);
			setReviewCount(response.result);
		};
		const url = `${process.env.REACT_APP_API_URL}/reviews/my-reviews`;
		const headers = {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		};

		sendRequest({ url, headers }, dataTransformer);
	}, [sendRequest, reivewCount]);

	const onDeleteHandler = () => {
		setReviewCount((prevCount) => --prevCount);
	};

	return (
		<section className={styles.RatingsAndReview}>
			<h2>My Rating & Review</h2>
			{reviews.length === 0 ? (
				<h1 className={styles.Message}>
					{"No ratings and reviews."}
				</h1>
			) : (
				<div>
					{reviews.map((review, index) => {
						return (
							<MyRatingAndReview
								key={index}
								review={review}
								onDelete={onDeleteHandler}
							></MyRatingAndReview>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default MyRatingsAndReviews;
