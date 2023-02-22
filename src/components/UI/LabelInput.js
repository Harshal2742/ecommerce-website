import { Fragment, useId } from 'react';
import styles from './LabelInput.module.css';

const LabelInput = (props) => {
	const inputId = useId();

	const width = props.width || '25rem';

	return (
		<div
			className={`${styles.Container} ${props.wrapperStyle}`}
			style={{ width: props.width || '25rem' }}
		>
			<label className={styles.Label} htmlFor={inputId}>
				{props.label}
			</label>
			<input
				ref={props.inputRef}
				className={styles.Input}
				type={props.inputType}
				id={inputId}
				name={props.name || undefined}
				defaultValue={props.defaultValue ? props.defaultValue : undefined}
				disabled={props.inputDisabled ? props.inputDisabled : false}
				onWheel={props.onWheelHandler ? props.onWheelHandler : undefined}
				required={props.required || false}
				pattern={props.pattern || undefined}
				maxLength={props.maxLength || undefined}
			/>
		</div>
	);
};

export default LabelInput;
