// import { ReactComponent as LogoDark } from "../assets/images/logos/materialpro.svg";
import { Link } from "react-router-dom";
import logoLight from '../assets/images/logos/logoLight.png';
import logoDark from '../assets/images/logos/logoDark.png';

const Logo = ({ variant }) => {
	return (
		<Link to="/">
			<img
				src={(variant === 'dark' ? logoLight : logoDark)}
				alt='Logo Banco Ganadero'
				width='80%'
				height='auto'
			/>
		</Link>
	);
};

export default Logo;
