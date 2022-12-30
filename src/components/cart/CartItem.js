import styles from './CartItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { cartActions } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const increaseQuantityHandler = () => {
    dispatch(cartActions.addItem(props.item));
  };

  const decreaseQuantityHandler = () => {
    dispatch(cartActions.decreaseQuantity(props.item.id));
  };

  const removeItem = () => {
    dispatch(cartActions.removeItem(props.item.id));
  };

  return (
    <div className={styles.main}>
      <div>
        <img
          src={props.item.image}
          alt="cart item"
          className={styles['product-image']}
        />
      </div>

      <div className={styles['product-title']}>
        <p>{props.item.title}</p>
      </div>

      <div className={styles.quantity}>
        <button onClick={decreaseQuantityHandler}>-</button>
        <span>{props.item.quantity}</span>
        <button onClick={increaseQuantityHandler}>+</button>
      </div>
      <div>
        <div className={styles.remove}>
          <button onClick={removeItem}>X</button>
        </div>
        <div className={styles['items-price']}>
          <FontAwesomeIcon icon={faIndianRupee} />
          {props.item.totalPrice}
        </div>
        <div className={styles['per-item-price']}>
          <FontAwesomeIcon
            className={styles['per-item-price']}
            icon={faIndianRupee}
          />
          <span>{props.item.price}</span>
          <span> for each</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
