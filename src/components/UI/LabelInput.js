import { Fragment, useId } from 'react';
import styles from './LabelInput.module.css';

const LabelInput = (props) => {
	const inputId = useId();

	return (
		<div>
			<label className={styles.Label} htmlFor={inputId}>
				{props.label}
			</label>
			<input
				ref={props.inputRef}
				className={styles.Input}
				type={props.inputType}
				id={inputId}
				defaultValue={props.defaultValue ? props.defaultValue : undefined}
				disabled={props.inputDisabled ? props.inputDisabled : false}
				onWheel={props.onWheelHandler ? props.onWheelHandler : undefined}
				required={props.required || false}
			/>
		</div>
	);
};

export default LabelInput;
