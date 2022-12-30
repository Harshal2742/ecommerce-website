import styles from './Sizes.module.css';
import { productsActions } from '../../../store/products-slice';
import { useDispatch } from 'react-redux';
import { spinnerActions } from '../../../store/spinner-slice';

const sizeArray = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
let selectedSizes = [];

const Sizes = () => {
  const dispatch = useDispatch();

  const toggleSize = (event) => {
    let sizeClasses = event.currentTarget.className.split(' ');
    if (sizeClasses.length === 1) {
      event.currentTarget.className = styles.size + ' ' + styles.change;
    } else {
      event.currentTarget.className = styles.size;
    }

    console.log(event.currentTarget.textContent);

    const selectedSize = event.currentTarget.textContent;

    dispatch(spinnerActions.setIsLoading());

    if (!selectedSizes.includes(selectedSize)) {
      selectedSizes.push(selectedSize);
    } else {
      selectedSizes = selectedSizes.filter((size) => size !== selectedSize);
    }
    dispatch(productsActions.setFilteredProducts({ selectedSizes }));

    dispatch(spinnerActions.setIsLoading());
  };

  return (
    <div className={styles.main}>
      <p className={styles.title}>Sizes:</p>
      <div className={styles.sizeContainer}>
        {sizeArray.map((size) => (
          <div className={styles.size} onClick={toggleSize} key={size}>
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
