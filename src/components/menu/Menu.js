import styles from './Menu.module.css';
import { uiActions } from '../../store/uiAction-slice';
import { userActions } from '../../store/user-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTicketSimple } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
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
						src="https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70"
						alt="my profile"
					/>

					<p>Raj Patil</p>
				</div>
				<ul className={styles.menu}>
					<li>
						<Link to="/home/my-orders" className={styles.menu__link} onClick={menuCloseHandler}>
							<FontAwesomeIcon icon={faBagShopping} />
							<span>My Orders</span>
						</Link>
					</li>
					<li>
						<Link to="/my-coupons" className={styles.menu__link} onClick={menuCloseHandler}>
							<FontAwesomeIcon icon={faTicketSimple} />
							<span>Coupons</span>
						</Link>
					</li>
					<li>
						<Link to="/my-review" className={styles.menu__link} onClick={menuCloseHandler}>
							<FontAwesomeIcon icon={faStar} />
							<span>My Review</span>
						</Link>
					</li>
					<li>
						<Link to="/home/my-profile" className={styles.menu__link} onClick={menuCloseHandler}>
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
