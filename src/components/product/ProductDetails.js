import styles from './ProductDetails.module.css';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee, faStar } from '@fortawesome/free-solid-svg-icons';
import { updateCartData } from '../../store/httpRequests';
import { Fragment } from 'react';

const ProductDetails = (props) => {
	const dispatch = useDispatch();

	const productSelections = Object.keys(props.product.selection);

	const addToCartHandler = () => {
		const mySelection = {};
		for (const selection of productSelections) {
			const selectionItems = document.getElementsByName(selection);

			let selectedItem;
			selectionItems.forEach((color) => {
				if (color.checked) {
					selectedItem = color.value;
				}
			});
			mySelection[selection] = selectedItem;
		}

		const item = {
			product: props.product._id,
			mySelection,
		};
		dispatch(updateCartData('increment', item));
	};

	return (
		<div className={styles.Container}>
			<div>
				<div>
					<p className={styles.Details__Company}>{props.product.brand}</p>
				</div>
				<div>
					<p className={styles.Details__Title}>{props.product.title}</p>
				</div>
			</div>
			<div className={styles.Details__Price}>
				<FontAwesomeIcon icon={faIndianRupee} />
				{props.product.price}
			</div>
			<div>
				<div className={styles.Details__AvgRating}>
					<FontAwesomeIcon icon={faStar} />
					<span>{props.product.avgRating}</span>
				</div>
				<div className={styles.Details__RatingQuatity}>
					{`${props.product.ratingsQuantity} ratings and ${props.product.reviewsQuantity} reviews`}
				</div>
			</div>
			<div>
				{productSelections.map((selection, index1) => {
					return (
						<div key={index1} className={styles.Selection}>
							<h4>{selection}</h4>
							<div className={styles.RadioButtonWrapper}>
								{props.product.selection[selection].map((item, index) => {
									return (
										<Fragment key={index}>
											{index === 0 ? (
												<input
													type="radio"
													id={item}
													name={selection}
													value={item}
													defaultChecked
												/>
											) : (
												<input
													type="radio"
													id={item}
													name={selection}
													value={item}
												/>
											)}
											<label htmlFor={item}>{item}</label>
										</Fragment>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
			<div>
				<button className={styles.Button} onClick={addToCartHandler}>
					Add to cart
				</button>
			</div>
			<div className={styles.Product__Description}>
				<h4>Discription</h4>
				<div className={styles.Product__Description_Text}>
					<p>{props.product.discription}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
