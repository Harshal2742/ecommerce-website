import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import FormateDate from '../../utils/FormateDate';
import { useDispatch } from 'react-redux';

import styles from './MyRatingAndReview.module.css';
import Button from '../UI/Button';
import useHttp from '../../hooks/useHttp';
import { notificationAction } from '../../store/notification-slice';

const MyRatingAndReview = (props) => {
	const star = [1, 2, 3, 4, 5];
	const { product } = props.review;
	const navigate = useNavigate();
	const { sendRequest, isError } = useHttp();
	const dispatch = useDispatch();

	let createdAt = props.review.createdAt.split('T')[0];
	createdAt = FormateDate(new Date(createdAt));

	const onEditHandler = () => {
		navigate(`/home/my-ratings-and-reviews/${props.review._id}`);
	};

	const onDeleteHandler = async () => {
		const dataTransformer = (response) => {};

		const url = `${process.env.REACT_APP_API_URL}/reviews/my-reviews/${props.review._id}`;
		const headers = {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		};

		await sendRequest({ url, headers, method: 'DELETE' }, dataTransformer);
		dispatch(
			notificationAction.showNotification({
				type: 'Success',
				message: 'Review deleted successfully',
			})
		);
		if (!isError) {
			props.onDelete();
		}
	};

	return (
		<div className={styles.Wrapper}>
			<div className={styles.Container}>
				<div className={styles.Product}>
					<img
						className={styles.Product__Image}
						src={`${process.env.REACT_APP_API_PRODUCT_IMG}/${product.image}`}
						alt={product.title}
					/>
				</div>
				<div className={styles.Review__Detail}>
					<div className={styles.Product__Name}>
						<h4>{product.title}</h4>
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
						<p>Posted on {createdAt}</p>
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
