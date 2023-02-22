import styles from './Filters.module.css';
import Checkboxes from '../../UI/Checkboxes';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Filters = () => {
	const [filter, setFilter] = useState({});
	const [searchParams, setSearchParams] = useSearchParams();
	const [isInitial, setIsInitial] = useState(true);

	const genders = ['men', 'women', 'kids'];
	const sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
	const brands = [
		'ADIDAS',
		'PUMA',
		'ROADSTER',
		'KOOK N KEECH',
		'HIGHLANDER',
		'NAUTICA',
	];
	const customerRatings = ['4★ & above', '3★ & above'];
	const customerRatingsValues = [4, 3];
	const prices = [
		'Rs. 500 and below',
		'Rs. 501 - Rs. 1000',
		'Rs. 1001 - Rs. 2000',
	];
	const pricesValues = ['0to500', '501to1000', '1001to2000', '2001to3000'];
	const colors = [
		'black',
		'white',
		'yellow',
		'red',
		'blue',
		'grey',
		'beige',
		'brown',
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

		if (selectedValues.length > 0) {
			setFilter((prevFilter) => {
				const updatedFilter = { ...prevFilter };
				updatedFilter[name] = selectedValues;
				return updatedFilter;
			});
		} else {
			setFilter((prevFilter) => {
				const updatedFilter = { ...prevFilter };
				delete updatedFilter[name];
				return updatedFilter;
			});
		}
	};

	const setSelected = (name, values) => {
		const elements = document.getElementsByName(name);

		elements.forEach((element) => {
			if (values.includes(element.value)) {
				element.checked = true;
			}
		});
	};

	useEffect(() => {
		if (!isInitial) {
			let query = '';
			for (let key in filter) {
				query += `${key}:${filter[key]};`;
			}
			query = query.substring(0, query.length - 1);
			setSearchParams((prevSearchParams) => {
				if (prevSearchParams.has('flt')) {
					prevSearchParams.delete('flt');
				}

				if (query.length > 0) {
					prevSearchParams.set('flt', query);
				}
				return prevSearchParams;
			});
		} else {
			const filter = searchParams.get('flt');
			if (filter) {
				const selectedFields = filter.split(';');
				const filerObj = {};
				selectedFields.forEach((field) => {
					const [name, valuesStr] = field.split(':');
					const values = valuesStr.split(',');
					filerObj[name] = values;
					setSelected(name, values);
				});
				setFilter({ ...filerObj });
			}

			setIsInitial(false);
		}
	}, [filter, setSearchParams, searchParams, isInitial]);

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
				name={'rating'}
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
