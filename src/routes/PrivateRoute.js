import { useContext } from 'react';
import { useAuth } from '../contexts/authContext';
import { Navigate, useLocation } from 'react-router-dom';
import Login from '../components/login/Login';

const PrivateRoute = ({ children }) => {

	const { user } = useAuth();
	const { pathname, search } = useLocation();

	if (user.isAuthenticated)
		localStorage.setItem('lastPath', (pathname !== '/' ? (pathname + search) : '/dashboard'));

	return user.isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute