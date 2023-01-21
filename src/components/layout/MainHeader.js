import styles from './MainHeader.module.css';
import CartButton from './CartButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { uiActions } from '../../store/uiAction-slice';

const MainHeader = () => {
	const navigate = useNavigate();
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	const dispatch = useDispatch();

	const showMenuHandler = () => {
		dispatch(uiActions.toggleShowMenu());
	};

	const loginHandler = () => {
		navigate('/login');
	};

	const signUpHandler = () => {
		navigate('/signup');
	};

	const titleOnClickHandler = () => {
		navigate('/home');
	};

	return (
		<nav className={styles.nav}>
			<h1 className={styles.name} onClick={titleOnClickHandler}>
				SHOPNOW
			</h1>
			<ul>
				<ul className={styles['auth-cart']}>
					{!isLoggedIn && (
						<li>
							<button className={styles.btn} onClick={signUpHandler}>
								Sign up
							</button>
						</li>
					)}
					{!isLoggedIn && (
						<li>
							<button className={styles.btn} onClick={loginHandler}>
								Login
							</button>
						</li>
					)}

					<li>
						<CartButton />
					</li>
				</ul>
				<ul className={styles.user}>
					{isLoggedIn && (
						<li>
							<FontAwesomeIcon
								icon={faUserCircle}
								className={styles['user-icon']}
								onClick={showMenuHandler}
							/>
						</li>
					)}
				</ul>
			</ul>
		</nav>
	);
};

export default MainHeader;
