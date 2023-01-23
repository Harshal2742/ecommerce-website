import styles from './ProductDetails.module.css';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee, faStar } from '@fortawesome/free-solid-svg-icons';

import List from '../UI/List';
import { cartActions } from '../../store/cart-slice';
import { Fragment } from 'react';

const ProductDetails = (props) => {
	const dispatch = useDispatch();

	const addToCartHandler = () => {
		dispatch(cartActions.addItem({ ...props.item }));
	};

	const colorOnClickHandler = (event) => {
		// select previous selected color
		const prevSelectedColor = document.getElementsByClassName(
			styles.Colours__Color_Selected
		);

		// remove List__item_Selected class from previous selected
		prevSelectedColor[0].classList.remove(styles.Colours__Color_Selected);

		// Add List__item_Selected to current clicked element
		event.target.className = `${styles.Colours__Color} ${styles.Colours__Color_Selected}`;
		console.log(event.target.textContent);
	};

	const sizeOnClickHandler = (event) => {
		// select previous selected size
		const prevSelectedColor = document.getElementsByClassName(
			styles.Sizes__Size_Selected
		);

		// remove List__item_Selected class from previous selected
		prevSelectedColor[0].classList.remove(styles.Sizes__Size_Selected);

		// Add List__item_Selected to current clicked element
		event.target.className = `${styles.Sizes__Size} ${styles.Sizes__Size_Selected}`;
		console.log(event.target.textContent);
	};

	return (
		<Fragment>
			<div>
				<p className={styles.Details__Company}>
					{props.item.brand.toUpperCase()}
				</p>
			</div>
			<div>
				<p className={styles.Details__Title}>{props.item.title}</p>
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
			<div>
				<List
					listItemSelectedStyle={styles.Colours__Color_Selected}
					listItemStyle={styles.Colours__Color}
					listTitle={'Select color'}
					listItems={props.item.availableColor}
					OnClickHandler={colorOnClickHandler}
				/>
			</div>
			<div>
				<List
					listItemStyle={styles.Sizes__Size}
					listItemSelectedStyle={styles.Sizes__Size_Selected}
					listTitle={'Select size'}
					listItems={props.item.availableSizes}
					OnClickHandler={sizeOnClickHandler}
				/>
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
