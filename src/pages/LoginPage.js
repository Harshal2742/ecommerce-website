import { Fragment } from 'react';
import Login from '../components/auth/Login';
import Footer from '../components/layout/Footer';

const LoginPage = () => {
	return (
		<Fragment>
			<Login />
            <Footer />
		</Fragment>
	);
};

export default LoginPage;
