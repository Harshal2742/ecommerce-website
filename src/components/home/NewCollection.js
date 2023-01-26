import styles from './NewCollection.module.css';
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom';

const NewCollections = () => {

	const navigate = useNavigate();

  const onExploreHandler = () =>{
    // console.log('Explore now');
			navigate('/home/products');
  }

	return (
		<div className={styles.NewCollection}>
			<div className={styles.NewCollection__Images}>
				<img
					className={styles.NewCollection__Image_1}
					src={`${process.env.PUBLIC_URL}/img/home/new-collection-1.jpg`}
					alt="new collection"
				/>
				<img
					className={styles.NewCollection__Image_2}
					src={`${process.env.PUBLIC_URL}/img/home/new-collection-2.jpg`}
					alt="new collection"
				/>
			</div>
			<div className={styles.NewCollection__Information}>
				<h2 className={styles.Information__Title}>Explore our new collection</h2>
				<p className={styles.Information__Text}>
					Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras
					porttitor condimentum orci suscipit. Leo maecenas in tristique,
					himenaeos elementum placerat. Taciti rutrum nostra, eget cursus velit
					ultricies. Quam molestie tellus himenaeos cubilia congue vivamus
					ultricies. Interdum praesent ut penatibus fames eros ad consectetur
					sed.
				</p>
        <div className={styles.Button}>
          <Button clickHandler={onExploreHandler}>Explore now</Button>
        </div>
			</div>
		</div>
	);
};

export default NewCollections;
