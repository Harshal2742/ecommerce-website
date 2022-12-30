import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import style from "./CartButton.module.css";
import {uiActions} from "../../store/uiAction-slice"
import { useDispatch, useSelector } from "react-redux";

const CartButton = () => {

  const dispatch = useDispatch();

  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const showCartHandler = () => {
    dispatch(uiActions.toggleShowCart());
  }

  return (
    <button className={style.btn} onClick={showCartHandler}>
      <span className={style.count}>{totalQuantity}</span>
      <span className={style.cartIcon} ><FontAwesomeIcon icon={faCartShopping}/></span>
    </button>
  );
};

export default CartButton;
