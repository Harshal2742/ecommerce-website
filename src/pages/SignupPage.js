import { Fragment } from 'react';
import Signup from '../components/auth/Signup';
import Footer from '../components/layout/Footer';

const SignupPage = () => {
	return (
		<Fragment>
			<Signup />
			<Footer></Footer>
		</Fragment>
	);
};

export default SignupPage;
