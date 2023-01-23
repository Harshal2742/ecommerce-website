import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

import styles from './MyRatingAndReview.module.css';
import Button from '../UI/Button';

const MyRatingAndReview = (props) => {
	const star = [1, 2, 3, 4, 5];
	const productInfo = props.review.product;
	const navigate = useNavigate();

	// src={`${process.env.PUBLIC_URL}/img/products/${props.item.image}.jpg`}
	props.review.date = props.review.date
		.toLocaleString('en-IN', {
			month: 'short',
			day: '2-digit',
			year: 'numeric',
			localeMatcher: 'lookup',
		})
		.replaceAll('-', ' ');

	const onEditHandler = () => {
		navigate(`/home/my-ratings-and-reviews/${props.review.id}`);
	};

	const onDeleteHandler = () => {};

	return (
		<div className={styles.Wrapper}>
			<div className={styles.Container}>
				<div className={styles.Product}>
					<img
						className={styles.Product__Image}
						src={`${process.env.PUBLIC_URL}/img/products/${productInfo.image}.jpg`}
						alt={'product'}
					/>
				</div>
				<div className={styles.Review__Detail}>
					<div className={styles.Product__Name}>
						<h4>{productInfo.summary}</h4>
					</div>
					<div>
						<p>
							{star.map((count) => {
								let star = (
									<span key={count}>
										{count <= props.review.rating ? (
											<FontAwesomeIcon icon={filledStar} />
										) : (
											<FontAwesomeIcon icon={emptyStar} />
										)}
									</span>
								);
								return star;
							})}
						</p>
					</div>
					<div className={styles.Review__Review}>
						{props.review.review.length !== 0 ? (
							<p>{props.review.review}</p>
						) : (
							<h3 className={styles.Review__Review_NoReview}>
								No review written.
							</h3>
						)}
					</div>
					<div>
						<p>Posted on {props.review.date}</p>
					</div>
				</div>
			</div>
			<div className={styles.ButtonWrapper}>
				<Button clickHandler={onEditHandler}>Edit</Button>
				<Button clickHandler={onDeleteHandler}>Delete</Button>
			</div>
		</div>
	);
};

export default MyRatingAndReview;
