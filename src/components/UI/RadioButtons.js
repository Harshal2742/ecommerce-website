import styles from './RadioButtons.module.css';

const RadioButtons = (props) => {
	return (
		<div className={styles.ButtonContainer}>
			{props.buttonValues.map((value, index) => {
				return (
					<div className={styles.Button} key={index}>
						{index === 0 ? (
							<input
								type={'radio'}
								name={props.name}
								id={value}
								value={value}
								defaultChecked
								onClick={props.onButtonClick || undefined}
							/>
						) : (
							<input
								type={'radio'}
								name={props.name}
								id={index}
								value={value}
								onClick={props.onButtonClick || undefined}
							/>
						)}
						<label htmlFor={value}>{props.buttonText[index]}</label>
					</div>
				);
			})}
		</div>
	);
};

export default RadioButtons;
