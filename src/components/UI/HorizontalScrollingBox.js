import styles from './HorizontalScrollingBox.module.css';

const HorizontalScrollingBox = (props) => {
	let isDown = false;
	let startX;
	let scrollLeft;

	const onMouseDownHandler = (event) => {
		isDown = true;
		const box = document.querySelector(`.${styles.box}`);

		// calculate current x co-ordinate on box (here offsetLeft is minused because removing margin of box )
		startX = event.pageX - box.offsetLeft;

		// current scroll position
		scrollLeft = box.scrollLeft;
	};

	const onMouseLeaveHandler = (event) => {
		isDown = false;
	};

	const onMouseUpHandler = (event) => {
		isDown = false;
	};

	const onMouseMoveHandler = (event) => {
		// exit function if mouse is not down
		if (!isDown) {
			return;
		}
		event.preventDefault();

		const box = document.querySelector(`.${styles.box}`);

		// calculate x co-ordinate
		const x = event.pageX - box.offsetLeft;

		// calculate distance moved form initial x co-ordinate
		const moved = x - startX;

		// update the scrollLeft of box (this will scroll the box)
		box.scrollLeft = scrollLeft - moved;
	};

	return (
		<div
			className={styles.box}
			onMouseDown={onMouseDownHandler}
			onMouseLeave={onMouseLeaveHandler}
			onMouseUp={onMouseUpHandler}
			onMouseMove={onMouseMoveHandler}
		>
			{props.children}
		</div>
	);
};

export default HorizontalScrollingBox;
