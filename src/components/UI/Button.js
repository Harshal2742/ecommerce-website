import styles from './Button.module.css';

const Button = (props) => {
	const buttonClasses = props.style
		? `${styles.Button} ${props.style}`
		: `${styles.Button}`;
		
	return (
		<button
			className={buttonClasses}
			type={props.type || 'button'}
			onClick={props.clickHandler || undefined}
		>
			{props.children}
		</button>
	);
};

export default Button;
