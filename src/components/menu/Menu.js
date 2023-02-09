import styles from './Menu.module.css';
import { uiActions } from '../../store/uiAction-slice';
import { userActions } from '../../store/user-slice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUserEdit,
	faStar,
	faTicketSimple,
	faSignOut,
	faBagShopping,
} from '@fortawesome/free-solid-svg-icons';

import { cartActions } from '../../store/cart-slice';

import { useNavigate, Link } from 'react-router-dom';

const Menu = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	const showMenu = useSelector((state) => state.uiAction.showMenu);
	let wrapperClasses = '';

	if (showMenu && isLoggedIn) {
		wrapperClasses = `${styles.wrapper} ${styles.showMenu}`;
	} else {
		wrapperClasses = `${styles.wrapper}`;
	}

	const menuCloseHandler = () => {
		dispatch(uiActions.toggleShowMenu());
	};

	const logoutHanler = () => {
		dispatch(uiActions.toggleShowMenu());
		dispatch(cartActions.clearCartData());
		dispatch(userActions.logoutHanler());
		navigate('/');
	};
	return (
		<div className={wrapperClasses}>
			<button className={styles['close-button']} onClick={menuCloseHandler}>
				X
			</button>
			<div>
				<div className={styles.profileImg}>
					<img
						src={`${process.env.PUBLIC_URL}/img/users/default.jpg`}
						alt="my profile"
					/>

					<p>Raj Patil</p>
				</div>
				<ul className={styles.menu}>
					<li>
						<Link
							to="/home/my-orders"
							className={styles.menu__link}
							onClick={menuCloseHandler}
						>
							<FontAwesomeIcon icon={faBagShopping} />
							<span>My Orders</span>
						</Link>
					</li>
					<li>
						<Link
							to="/my-coupons"
							className={styles.menu__link}
							onClick={menuCloseHandler}
						>
							<FontAwesomeIcon icon={faTicketSimple} />
							<span>Coupons</span>
						</Link>
					</li>
					<li>
						<Link
							to="/home/my-ratings-and-reviews"
							className={styles.menu__link}
							onClick={menuCloseHandler}
						>
							<FontAwesomeIcon icon={faStar} />
							<span>Ratings & Reviews</span>
						</Link>
					</li>
					<li>
						<Link
							to="/home/my-profile"
							className={styles.menu__link}
							onClick={menuCloseHandler}
						>
							<FontAwesomeIcon icon={faUserEdit} />
							<span>Edit Profile</span>
						</Link>
					</li>
					<li onClick={logoutHanler} className={styles.menu__logout}>
						<FontAwesomeIcon icon={faSignOut} />
						<span>Logout</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Menu;
