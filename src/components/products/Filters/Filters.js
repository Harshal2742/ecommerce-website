import styles from './Filters.module.css';
import Checkboxes from '../../UI/Checkboxes';

const Filters = () => {
	const genders = ['Men', 'Women', 'Kids'];
	const sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

	const brands = [
		'ADIDAS',
		'PUMA',
		'NIKE',
		'PETER ENGLAND',
		'TOMMY HILFIGER',
		'NAUTICA',
	];

	const customerRatings = ['4★ & above', '3★ & above'];
	const customerRatingsValues = [4, 3];
	const prices = [
		'Rs. 500 and below',
		'Rs. 501 - Rs. 1000',
		'Rs. 1001 - Rs. 2000',
	];
	const pricesValues = ['0-500', '501-1000', '1001-2000', '2001-3000'];

	const colors = [
		'Black',
		'White',
		'Yellow',
		'Red',
		'Blue',
		'Grey',
		'Beige',
		'Brown',
	];

	const onClickHandler = (event) => {
		const name = event.target.name;

		const elements = document.getElementsByName(name);
		const selectedValues = [];

		elements.forEach((element) => {
			if (element.checked) {
				selectedValues.push(element.value);
			}
		});

		// use for sending http request
		console.log(selectedValues);
	};

	return (
		<div className={styles.filter}>
			<h3>Filters</h3>
			<Checkboxes
				name={'gender'}
				onClick={onClickHandler}
				items={genders}
				values={genders}
			/>
			<Checkboxes
				name={'size'}
				onClick={onClickHandler}
				items={sizes}
				values={sizes}
			/>
			<Checkboxes
				name={'brand'}
				onClick={onClickHandler}
				items={brands}
				values={brands}
				vertical={true}
				/>
			<Checkboxes
				name={'customer ratings'}
				onClick={onClickHandler}
				items={customerRatings}
				values={customerRatingsValues}
				vertical={true}
				/>
			<Checkboxes
				name={'price'}
				onClick={onClickHandler}
				items={prices}
				values={pricesValues}
				vertical={true}
				/>
			<Checkboxes
				name={'color'}
				onClick={onClickHandler}
				items={colors}
				values={colors}
				vertical={true}
				/>
		</div>
	);
};

export default Filters;
