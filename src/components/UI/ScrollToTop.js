import { useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = (props) => {
	const { pathname } = useLocation();

	useEffect(() => {
		document.documentElement.scrollTo({
      top:0,
      left:0,
    });
	}, [pathname]);

	return <Fragment>{props.children}</Fragment>;
};

export default ScrollToTop;
