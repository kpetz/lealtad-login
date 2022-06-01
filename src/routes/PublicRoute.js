import { useAuth } from '../contexts/authContext';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

const PublicRoute = ({ children }) => {
	const { isAuthenticated } = useAuth();

	return isAuthenticated ? <Navigate to="/dashboard" /> : children;
}

export default PublicRoute;