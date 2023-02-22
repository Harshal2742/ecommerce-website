import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import Button from '../UI/Button';

import styles from './Review.module.css';
import { useEffect, useState } from 'react';
import useHttp from '../../hooks/useHttp';
import { notificationAction } from '../../store/notification-slice';
import { useDispatch } from 'react-redux';

const Review = () => {
	const { reviewId } = useParams();
	const { sendRequest, isError } = useHttp();
	const [product, setProduct] = useState(null);
	const [queryParams] = useSearchParams();
	const [starCount, setStarCount] = useState(0);
	const [reviewText, setReviewText] = useState('');
	const dispatch = useDispatch();

	const dataTransformer = (response) => {
		const review = response.data.review;
		setStarCount(review.rating);
		setReviewText(review.review);
		setProduct(review.product);
	};

	useEffect(() => {
		if (reviewId) {
			const url = `${process.env.REACT_APP_API_URL}/reviews/my-reviews/${reviewId}`;
			const headers = {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			};
			sendRequest({ url, headers }, dataTransformer);
		} else {
			console.log('new review');
			console.log(queryParams.get('productId'));
			console.log(queryParams.get('orderId'));
		}
	}, [reviewId, queryParams, sendRequest]);

	const star = [1, 2, 3, 4, 5];
	const navigate = useNavigate();

	const onClickStarHandler = (event) => {
		setStarCount(+event.currentTarget.dataset.count);
	};

	const formSubmitHander = async (event) => {
		event.preventDefault();

		const url = `${process.env.REACT_APP_API_URL}/reviews/my-reviews/${reviewId}`;
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		};

		const body = {
			rating: starCount,
			review: reviewText,
		};

		await sendRequest({ url, headers, method: 'PATCH', body }, dataTransformer);

		if (!isError) {
			dispatch(
				notificationAction.showNotification({
					type: 'Success',
					message: 'Review updated successfully',
				})
			);
			navigate(-1);
		}
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

	if (!product) {
		return <></>;
	}

	return (
		<section className={styles.Container}>
			<div>
				<h2>Ratings & Reviews</h2>
			</div>
			<div className={styles.Product}>
				<div>
					<img
						className={styles.Product__Image}
						src={`${process.env.REACT_APP_API_PRODUCT_IMG}/${product.image}`}
						alt={product.title}
					/>
				</div>
				<div>
					<p className={styles.Product__Title}>{product.title}</p>
				</div>
			</div>
			<div>
				<form className={styles.Form} onSubmit={formSubmitHander}>
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
						<Button type="submit">Submit</Button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Review;
