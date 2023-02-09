import styles from './RatingAndReview.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import FormateDate from "../../utils/FormateDate"

const RatingAndReview = (props) => {
	const star = [1, 2, 3, 4, 5];

	if(!props.review.user){
		return null
	}

	let createdAt = props.review.createdAt;
	createdAt = createdAt.split("T")[0]
	createdAt = FormateDate(new Date(createdAt));


	return (
		<div className={styles.Contianer}>
			<div className={styles.ImageNameWrapper}>
				<div className={styles.ImageWrapper}>
					<img
						className={styles.User__Image}
						src={`${process.env.REACT_APP_API_USER_IMG}/${props.review.user.photo}`}
						alt="user"
					/>
				</div>
				<div>
					<p className={styles.User__Name}>{`${props.review.user.firstName} ${props.review.user.lastName}`}</p>
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
			</div>
			<div className={styles.User__Review}>
				<p>{props.review.review}</p>
			</div>
			<div className={styles.User__RatingAndReview_Date}>
				<p>{createdAt}</p>
			</div>
		</div>
	);
};

export default RatingAndReview;
