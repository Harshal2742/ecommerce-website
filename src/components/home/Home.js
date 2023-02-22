import styles from './Home.module.css';
import Slider from '../UI/Slider';
import NewCollection from './NewCollection';
import MostPopularProducts from './MostPopularProducts';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const images = [
		// 'slider-image-1.jpg',
		// 'slider-image-2.jpg',
		// 'slider-image-3.jpg',
		'slider-image-4.jpg',
		// 'slider-image-5.jpg',
		'slider-image-6.jpg',
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

	const imageOnClickHandler = (queryParams, event) => {
		const query = new URLSearchParams(queryParams)
		navigate({
			pathname:'/home/products',
			search:query.toString()
		});
	};

	const imageSlides = images.map((image, index) => {
		return (
			<div key={index}>
				<img
					src={`${process.env.PUBLIC_URL}/img/home/${image}`}
					alt={'slider'}
					style={{ width: '95vw', height: '30rem' }}
				/>
			</div>
		);
	});

	// console.log(imageSlides[0]);

	return (
		<section className={styles.Home}>
			<div>
				<Slider slides={imageSlides} timeInterval={3000} />
			</div>
			<div>
				<NewCollection />
			</div>
			<div className={styles.Section2}>
				{sectionTowImages.map((imageData, index) => {
					return (
						<div
							key={index}
							className={styles.Section2__Element}
							onClick={imageOnClickHandler.bind(
								this,
								`?flt=gender:${imageData.text.toLowerCase()}`
							)}
						>
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
