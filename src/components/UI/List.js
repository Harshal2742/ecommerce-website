import styles from './List.module.css';

const List = (props) => {
	const listWrapperStyle = props.listWrapperStyle || styles.ListWrapper;
	const listTitleStyle = props.listTitleStyle || styles.List__Title;
	const listStyle = props.listStyle || styles.List;

	return (
		<div className={listWrapperStyle}>
			<p className={listTitleStyle}>{props.listTitle}</p>
			<ul className={listStyle}>
				{props.listItems.map((color, index) => {
					const classes =
						index === 0
							? `${props.listItemStyle} ${props.listItemSelectedStyle}`
							: `${props.listItemStyle}`;
					return (
						<li key={index} className={classes} onClick={props.OnClickHandler} data-index={index}>
							{color}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default List;
