import styles from './Cart.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiAction-slice';
import CartItems from './CartItems';
import { useSelector } from 'react-redux';
import PriceDetails from './PriceDetails';
// import { Fragment } from 'react';

const Cart = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const closeHandler = () => {
    dispatch(uiActions.toggleShowCart());
  };

  return (
    <div className={styles.cart}>
      <div className={styles.head}>
        <h3>Shopping Cart</h3>
        <div className={styles['close-button']}>
          <button type="button" onClick={closeHandler}>
            X
          </button>
        </div>
      </div>

      {!totalQuantity && (
        <h1 className={styles['no-items']}>No items in cart.</h1>
      )}

      {totalQuantity > 0 && (
        <div className={styles.body}>
          <CartItems />
          <PriceDetails />
        </div>
      )}
    </div>
  );
};
export default Cart;
