import styles from './MainHeader.module.css';
import CartButton from './CartButton';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { uiActions } from '../../store/uiAction-slice';
import { FaOpencart } from 'react-icons/fa';
import Button from '../UI/Button';
import { FaSearch, FaRegUserCircle } from 'react-icons/fa';

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
		<nav className={styles.Navbar}>
			<h1 className={styles.Title} onClick={titleOnClickHandler}>
				<FaOpencart /> SHOPNOW
			</h1>
			<ul className={styles.TabContainer}>
				<li>
					<NavLink
						to="/home"
						className={({ isActive }) => {
							return isActive ? styles.Tab_Active : styles.Tab__Inactive;
						}}
						end
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/home/products"
						className={({ isActive }) => {
							return isActive ? styles.Tab_Active : styles.Tab__Inactive;
						}}
					>
						Products
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/home/blog"
						className={({ isActive }) => {
							return isActive ? styles.Tab_Active : styles.Tab__Inactive;
						}}
					>
						Blog
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/home/about"
						className={({ isActive }) => {
							return isActive ? styles.Tab_Active : styles.Tab__Inactive;
						}}
					>
						About
					</NavLink>
				</li>
			</ul>
			<form className={styles.SearchbarContainer}>
				<input className={styles.SearchInput} placeholder="Search products" />
				<Button style={styles.SearchButton}>
					<FaSearch />
				</Button>
			</form>
			{isLoggedIn ? (
				<div className={styles.ButtonContainer}>
					<CartButton />
					<FaRegUserCircle
						className={styles.UserIcon}
						onClick={showMenuHandler}
					/>
				</div>
			) : (
				<div className={styles.ButtonContainer}>
					<Button style={styles.Button} clickHandler={signUpHandler}>
						Sign up
					</Button>
					<Button style={styles.Button} clickHandler={loginHandler}>
						Login
					</Button>
				</div>
			)}
		</nav>
	);
};

export default MainHeader;
