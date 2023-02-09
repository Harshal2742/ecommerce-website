import CartItem from "./CartItem";
import styles from "./CartItems.module.css";
import { useSelector } from "react-redux";

const CartItems = (props) => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className={styles.items}>
      {items.map((item) => (
        <CartItem item={item} key={item._id} />
      ))}
    </div>
  );
};

export default CartItems;
