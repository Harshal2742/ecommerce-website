import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import styles from './FilterSort.module.css';
import { useState } from 'react';

const FilterSort = () => {
	const [showFilterContent, setShowFilterContent] = useState(false);
	const [showSortContent, setShowSortContent] = useState(false);

	const onMouseOverFilterHandler = (event) => {
		setShowFilterContent(true);
	};
	const onMouseOutFilterHandler = (event) => {
		setShowFilterContent(false);
	};

	const onMouseOverSortHandler = (event) => {
		setShowSortContent(true);
	};
	const onMouseOutSortHandler = (event) => {
		setShowSortContent(false);
	};

	return (
		<div className={styles.FilterSort}>
			<div>
				<button
					className={styles.FilterSort__Button}
					onMouseOver={onMouseOverFilterHandler}
					onMouseOut={onMouseOutFilterHandler}
				>
					<FontAwesomeIcon icon={faFilter} /> Filter
				</button>
				{showFilterContent && (
					<div
						className={styles.DropdownContent}
						onMouseOver={onMouseOverFilterHandler}
						onMouseOut={onMouseOutFilterHandler}
					>
            <p>All</p>
						<p>On the way orders</p>
						<p>Delivered orders</p>
						<p>Cancelled orders</p>
					</div>
				)}
			</div>
			<div>
				<button
					className={styles.FilterSort__Button}
					onMouseOver={onMouseOverSortHandler}
					onMouseOut={onMouseOutSortHandler}
				>
					<FontAwesomeIcon icon={faSort} /> Sort
				</button>
				{showSortContent && (
					<div
						className={styles.DropdownContent}
						onMouseOver={onMouseOverSortHandler}
						onMouseOut={onMouseOutSortHandler}
					>
						<p>By price - Low to High</p>
						<p>By price - High to Low</p>
						<p>By date - Oldest first</p>
						<p>By date - Newest first</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default FilterSort;
