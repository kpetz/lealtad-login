import { useAuth } from '../contexts/authContext';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
	const { user } = useAuth();

	return user.isAuthenticated ? <Navigate to="/dashboard" /> : children;
}

export default PublicRoute;