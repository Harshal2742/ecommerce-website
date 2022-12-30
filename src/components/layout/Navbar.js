import { Fragment } from 'react';
import MainHeader from './MainHeader';
import Cart from '../cart/Cart';
import Backdrop from './Backdrop';
import { useSelector } from 'react-redux';
import Menu from '../menu/Menu';

const Navbar = () => {
  const showCart = useSelector((state) => state.uiAction.showCart);
  return (
    <Fragment>
      <MainHeader />
      <Menu />
      {showCart && <Cart />}
      {showCart && <Backdrop />}
    </Fragment>
  );
};

export default Navbar;
