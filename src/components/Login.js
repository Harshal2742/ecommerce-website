import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/user-slice';
import { spinnerActions } from '../store/spinner-slice';

let firstTimeSubmit = true;
const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [warning, setWarning] = useState('');
  const dispatch = useDispatch();

  const userInputChangeHandler = () => {
    const enteredUser = userRef.current.value;

    if (firstTimeSubmit) {
      setWarning('');
      return;
    }

    if (enteredUser.includes('@')) {
      setWarning('');
    } else {
      setWarning('Please enter valid email.');
    }
  };

  const passwordInputChangeHandler = () => {
    const enteredPassword = passwordRef.current.value;

    if (firstTimeSubmit) {
      setWarning('');
      return;
    }

    if (enteredPassword.trim().length > 8) {
      setWarning('');
    } else {
      setWarning('Password must be at least 8 character.');
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let isUserValid = false;
    let isPasswordValid = false;
    const enteredUser = userRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (enteredUser.trim().length === 0) {
      setWarning('Please enter email or phone.');
      isUserValid = false;
      return;
    }

    if (enteredPassword.trim().length === 0) {
      setWarning('Please enter password!');
      isPasswordValid = false;
      return;
    }

    if (isNaN(enteredUser)) {
      if (!enteredUser.includes('@')) {
        setWarning('Please enter valid email!');
        isUserValid = false;
        firstTimeSubmit = false;
        return;
      } else {
        isUserValid = true;
      }
    }

    if (enteredPassword.trim().length < 8) {
      setWarning('Password must be at least 8 character.');
      isPasswordValid = false;
    } else {
      isPasswordValid = true;
    }

    firstTimeSubmit = false;

    if (isUserValid && isPasswordValid) {
      dispatch(spinnerActions.setIsLoading());
      dispatch(userActions.loginHandler());
      dispatch(spinnerActions.setIsLoading());
      navigate('/');
    }
  };

  return (
    <form className={styles.main} onSubmit={submitHandler}>
      <div className={styles.body}>
        <h2>Sign In</h2>
        <div className={styles.message}>
          <p>{warning}</p>
        </div>
        <div className={styles.field}>
          <FontAwesomeIcon icon={faUser} />
          <input
            onChange={userInputChangeHandler}
            ref={userRef}
            type="text"
            id="username"
            placeholder="Email or Phone"
            required
          />
        </div>
        <div className={styles.field}>
          <FontAwesomeIcon icon={faLock} />
          <input
            onChange={passwordInputChangeHandler}
            ref={passwordRef}
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div className={`${styles.field} ${styles.forgotPassword}`}>
          <p>Forgot password?</p>
        </div>
        <div className={styles.field}>
          <button type="submit">Sign in</button>
        </div>
        <div>
          <p>
            New here? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
