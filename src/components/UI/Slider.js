import styles from './Slider.module.css';
import { Fragment, useEffect, useState } from 'react';
import RadioButtons from './RadioButtons';
import { FaCircle } from 'react-icons/fa';

const ImageSlider = (props) => {
	const [current, setCurrent] = useState(0);


	// if(!props.slides){
	// 	return;
	// }

	const length = props.slides.length;
	const timeInterval = props.timeInterval;

	const buttonValues = props.slides.map((slide, index) => {
		return index;
	});

	const buttonText = props.slides.map((slide,index) => {
		return <FaCircle key={index} />;
	});

	const onClickButtonHandler = () => {
		const buttons = document.getElementsByName('imageButton');
		buttons.forEach((button) => {
			if (button.checked) {
				setCurrent(+button.value);
			}
		});
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			const nextIndex = (current + 1) % length;
			setCurrent((current + 1) % length);
			const buttons = document.getElementsByName('imageButton');
			buttons.forEach((button) => {
				if (+button.value === nextIndex) {
					button.checked = true;
				}
			});
		}, timeInterval);

		return () => {
			clearInterval(intervalId);
		};
	}, [current, length, timeInterval]);

	return (
		<div className={styles.Container}>
			<div className={styles.Slides}>
				{props.slides.map((slide, index) => {
					return (
						<div
							key={index}
							className={index === current ? styles.Slide_Active : styles.Slide}
						>
							{slide}
						</div>
					);
				})}
			</div>
			<div className={styles.ButtonContainer}>
				<RadioButtons
					name={'imageButton'}
					buttonValues={buttonValues}
					buttonText={buttonText}
					onButtonClick={onClickButtonHandler}
				/>
			</div>
		</div>
	);
};

export default ImageSlider;
