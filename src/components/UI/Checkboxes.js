import styles from './Checkboxes.module.css';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

const Checkboxes = (props) => {
	const verticalStyle = props.vertical ? { flexDirection: 'column' } : {};

	return (
		<div>
			<h4>{capitalizeFirstLetter(props.name)}</h4>
			<div className={styles.Checkboxes} style={verticalStyle}>
				{props.items.map((item, index) => {
					return (
						<div key={index} className={styles.Checkboxes__Box}>
							<input
								type="checkbox"
								id={item}
								name={props.name.toLowerCase()}
								value={props.values[index]}
								onClick={props.onClick}
							/>
							<label htmlFor={item}>{item}</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Checkboxes;
