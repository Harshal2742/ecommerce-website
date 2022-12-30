import styles from './Backdrop.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiAction-slice';

const Backdrop = () => {
  const dispatch = useDispatch();

  const toggleBackDrop = () => {
    dispatch(uiActions.toggleShowCart());
  };

  return <div className={styles.backdrop} onClick={toggleBackDrop}></div>;
};

export default Backdrop;
