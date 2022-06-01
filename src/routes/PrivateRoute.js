import { useContext } from 'react';
import { useAuth } from '../contexts/authContext';
import { Navigate, useLocation } from 'react-router-dom';
import Login from '../components/login/Login';

const PrivateRoute = ({ children }) => {

	const { isAuthenticated, setIsAuthenticated } = useAuth();
	const { pathname, search } = useLocation();
	console.log('logeado? ' + isAuthenticated);
	localStorage.setItem('lastPath', pathname + search);
	const token = localStorage.getItem('accessToken');
	console.log(token)
	if (token) {
		setIsAuthenticated(true);
	}
	return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute