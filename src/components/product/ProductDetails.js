import styles from './ProductDetails.module.css';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee, faStar } from '@fortawesome/free-solid-svg-icons';

import { cartActions } from '../../store/cart-slice';
import { Fragment } from 'react';

const ProductDetails = (props) => {
	const dispatch = useDispatch();

	const addToCartHandler = () => {
		const colors = document.getElementsByName('color');
		let selectedColor;
		colors.forEach((color) => {
			if (color.checked) {
				selectedColor = color.value;
			}
		});
		console.log(selectedColor);

		const sizes = document.getElementsByName('size');
		let selectedSize;
		sizes.forEach((size) => {
			if (size.checked) {
				selectedSize = size.value;
			}
		});
		console.log(selectedSize);
		
		dispatch(cartActions.addItem({ ...props.item }));
	};

	

	return (
		<Fragment>
			<div>
				<p className={styles.Details__Company}>
					{props.item.brand.toUpperCase()}
				</p>
			</div>
			<div>
				<p className={styles.Details__Title}>{props.item.name}</p>
			</div>
			<div className={styles.Details__PriceIconWrapper}>
				<FontAwesomeIcon icon={faIndianRupee} />
				{props.item.price}
			</div>
			<div>
				<div className={styles.Details__AvgRating}>
					<FontAwesomeIcon icon={faStar} />
					<span>{props.item.avgRating}</span>
				</div>
				<div className={styles.Details__RatingQuatity}>
					{`${props.item.ratingsQuantity} ratings and ${props.item.reviewsQuantity} reviews`}
				</div>
			</div>
			<div className={styles.Colors}>
				<h4>Color</h4>
				<div className={styles.RadioButtonWrapper}>
					{props.item.availableColor.map((color, index) => {
						return (
							<Fragment key={index}>
								{index === 0 ? (
									<input
										type="radio"
										id={color}
										name="color"
										value={color}
										defaultChecked
									/>
								) : (
									<input type="radio" id={color} name="color" value={color} />
								)}
								<label htmlFor={color}>{color}</label>
							</Fragment>
						);
					})}
				</div>
			</div>
			<div className={styles.Sizes}>
				<h4>Size</h4>
				<div className={styles.RadioButtonWrapper}>
					{props.item.availableSizes.map((size, index) => {
						return (
							<Fragment key={index}>
								{index === 0 ? (
									<input
										type="radio"
										id={size}
										name="size"
										value={size}
										defaultChecked
									/>
								) : (
									<input type="radio" id={size} name="size" value={size} />
								)}
								<label htmlFor={size}>{size}</label>
							</Fragment>
						);
					})}
				</div>
			</div>
			<div>
				
			</div>
			<div>
				<button className={styles.Button} onClick={addToCartHandler}>
					Add to cart
				</button>
			</div>
			<div className={styles.Product__Description}>
				<h4>Discription</h4>
				<div className={styles.Product__Description_Text}>
					<p>{props.item.discription}</p>
				</div>
			</div>
		</Fragment>
	);
};

export default ProductDetails;
