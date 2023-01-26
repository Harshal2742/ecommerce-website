import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import {
	FaOpencart,
	FaTwitter,
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<div className={styles.Container}>
				<div>
					<h3 className={styles.Name}>
						<FaOpencart /> SHOPNOW
					</h3>
				</div>
				<div className={styles.AboutSection}>
					<p>About us</p>
					<p>Contact us</p>
					<p>Help Center</p>
					<p>FAQ</p>
				</div>
			</div>
			<div className={styles.Footer__Social}>
				<span>
					<FaFacebook />
				</span>
				<span>
					<FaInstagram />
				</span>
				<span>
					<FaTwitter />
				</span>
				<span>
					<FaLinkedinIn />
				</span>
			</div>
			<div className={styles.Footer__CopyRight}>
				<p>
        <FontAwesomeIcon icon={faCopyright} /> 2023 Harshal Takade. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
