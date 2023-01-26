import styles from './Home.module.css';
import DivSlider from '../UI/DivSlider';
import NewCollection from './NewCollection';
import MostPopularProducts from './MostPopularProducts';

const Home = () => {
	const sliderImages = [
		'slider-image-1',
		'slider-image-2',
		'slider-image-3',
		'slider-image-4',
		'slider-image-5',
		'slider-image-6',
	];

	const sectionTowImages = [
		{
			image: 'section-2-image-6',
			text: 'KIDS',
		},
		{
			image: 'section-2-image-7',
			text: 'MEN',
		},
		{
			image: 'section-2-image-5',
			text: 'WOMEN',
		},
	];

	const sliderDivs = sliderImages.map((path) => {
		return (
			<div>
				<img
					style={{ height: '30rem', width: '100%' }}
					src={`${process.env.PUBLIC_URL}/img/home/${path}.jpg`}
					alt="slider"
				></img>
			</div>
		);
	});

	return (
		<section className={styles.Home}>
			<div>
				<DivSlider elements={sliderDivs} timeInterval={3000} />
			</div>
			<div>
				<NewCollection />
			</div>
			<div className={styles.Section2}>
				{sectionTowImages.map((imageData, index) => {
					return (
						<div key={index} className={styles.Section2__Element}>
							<img
								src={`${process.env.PUBLIC_URL}/img/home/${imageData.image}.jpg`}
								alt="product"
							/>
							<h2 className={styles.Section2__Element_Text}>
								{imageData.text}
							</h2>
						</div>
					);
				})}
			</div>
			<div>
				<MostPopularProducts />
			</div>
		</section>
	);
};

export default Home;
