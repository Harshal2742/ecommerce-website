import styles from './RatingAndReview.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const RatingAndReview = (props) => {
	const star = [1, 2, 3, 4, 5];

	// formate the date
	props.user.date = props.user.date
		.toLocaleString('en-IN', {
			month: 'short',
			day: '2-digit',
			year: 'numeric',
			localeMatcher: 'lookup',
		})
		.replaceAll('-', ' ');

	return (
		<div className={styles.Contianer}>
			<div className={styles.ImageNameWrapper}>
				<div className={styles.ImageWrapper}>
					<img
						className={styles.User__Image}
						src={`${process.env.PUBLIC_URL}/img/users/${props.user.image}.jpg`}
						alt="user"
					/>
				</div>
				<div>
					<p className={styles.User__Name}>{props.user.name}</p>
					<p>
						{star.map((count) => {
							let star = (
								<span key={count}>
									{count <= props.user.rating ? (
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
			</div>
			<div className={styles.User__Review}>
				<p>{props.user.review}</p>
			</div>
			<div className={styles.User__RatingAndReview_Date}>
				<p>{props.user.date}</p>
			</div>
		</div>
	);
};

export default RatingAndReview;
