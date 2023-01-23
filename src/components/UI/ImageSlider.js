import styles from './ImageSlider.module.css';
import { useEffect, useState } from 'react';
import List from './List';

const ImageSlider = (props) => {
	const imageCount = props.images.length;

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const onBulletClickHandler = (event) => {
		const selectedIndex = event.target.dataset.index;
		const prevSelectedBullet = document.getElementsByClassName(
			styles.Bullets__Bullet_Selected
		);
		prevSelectedBullet[0].classList.remove(styles.Bullets__Bullet_Selected);
		event.target.className = `${styles.Bullets__Bullet} ${styles.Bullets__Bullet_Selected}`;
		setCurrentImageIndex(+selectedIndex);
	};

	const Bullets = [];

	for (let i = 0; i < imageCount; i++) {
		Bullets.push(<span></span>);
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			// console.log(imageCount);
			setCurrentImageIndex((prevIndex) => {
				const prevSelected = document.querySelectorAll(
					`[data-index='${prevIndex}']`
				);

				const currentSelectedBullet = document.querySelectorAll(
					`[data-index='${(prevIndex + 1) % imageCount}']`
				);

				// remove Bullets__Bullet_Selected class from previous selected element
				prevSelected[0].classList.remove(styles.Bullets__Bullet_Selected);

				// add Bullets__Bullet_Selected class to currentSelected element;
				currentSelectedBullet[0].classList.add(styles.Bullets__Bullet_Selected);

				return (prevIndex + 1) % imageCount;
			});
		}, 2500);

		return () => {
			clearInterval(intervalId);
		};
	}, [imageCount, currentImageIndex]); // must add currentImageIndex as dependency because after clicking
	// on bullet currentImageIndex will change and hence we have to clearInterval and run effect again

	return (
		<div>
			<div>
				<img
					style={{ width: props.width, height: props.height }}
					src={`${process.env.PUBLIC_URL}/img/products/${props.images[currentImageIndex]}.jpg`}
					alt="product"
				/>
			</div>
			<div className={styles.Wrapper__Bullets}>
				<List
					listWrapperStyle={styles.Wrapper__Bullets}
					listItemStyle={styles.Bullets__Bullet}
					listItemSelectedStyle={styles.Bullets__Bullet_Selected}
					listStyle={styles.Bullets}
					listTitle={''}
					listItems={Bullets}
					OnClickHandler={onBulletClickHandler}
				/>
			</div>
		</div>
	);
};

export default ImageSlider;
