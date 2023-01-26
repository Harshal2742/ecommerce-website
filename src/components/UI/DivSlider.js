import styles from './DivSlider.module.css';
import { useEffect, useState } from 'react';
import List from './List';

const DivSlider = (props) => {
	const noOfElement = props.elements.length;
	const timeInterval = props.timeInterval;

	const [currentDivIndex, setCurrentDivIndex] = useState(0);

	const onBulletClickHandler = (event) => {
		const selectedIndex = event.target.dataset.index;
		const prevSelectedBullet = document.getElementsByClassName(
			styles.Bullets__Bullet_Selected
		);
		prevSelectedBullet[0].classList.remove(styles.Bullets__Bullet_Selected);
		event.target.className = `${styles.Bullets__Bullet} ${styles.Bullets__Bullet_Selected}`;
		setCurrentDivIndex(+selectedIndex);
	};

	const Bullets = [];

	for (let i = 0; i < noOfElement; i++) {
		Bullets.push(<span></span>);
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			// console.log(imageCount);
			setCurrentDivIndex((prevIndex) => {
				const prevSelected = document.querySelectorAll(
					`[data-index='${prevIndex}']`
				);

				const currentSelectedBullet = document.querySelectorAll(
					`[data-index='${(prevIndex + 1) % noOfElement}']`
				);

				// remove Bullets__Bullet_Selected class from previous selected element
				prevSelected[0].classList.remove(styles.Bullets__Bullet_Selected);

				// add Bullets__Bullet_Selected class to currentSelected element;
				currentSelectedBullet[0].classList.add(styles.Bullets__Bullet_Selected);

				return (prevIndex + 1) % noOfElement;
			});
		}, timeInterval);

		return () => {
			clearInterval(intervalId);
		};
	}, [noOfElement, currentDivIndex, timeInterval]); // must add currentImageIndex as dependency because after clicking
	// on bullet currentImageIndex will change and hence we have to clearInterval and run effect again
	return (
		<div>
			<div>{props.elements[currentDivIndex]}</div>
			<div className={styles.Wrapper__Bullets}>
				<List
					listWrapperStyle={styles.Wrapper__Bullets}
					listItemStyle={styles.Bullets__Bullet}
					listItemSelectedStyle={styles.Bullets__Bullet_Selected}
					listStyle={styles.Bullets}
					listTitle={''}
					listItems={Bullets}
					OnClickHandler={onBulletClickHandler}
					firstSelected={true}
				/>
			</div>
		</div>
	);
};

export default DivSlider;
