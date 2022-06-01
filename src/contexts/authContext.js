import { createContext, useContext, useState } from 'react';
import verifyLogin from '../api/login';


const AuthContext = createContext();

const initialUser = {
	username: 'kevin',
	password: '123456'
}

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({});
	const [isDenied, setIsDenied] = useState(false);
	const login = async (credentials) => {
		const result = await verifyLogin(credentials);
		if (result.status === 'ok') {
			setIsAuthenticated(true);
			setUser({
				tokenUser: result.accessToken,
				...result.user
			});
			localStorage.setItem('accessToken', result['accessToken']);
			localStorage.setItem('user', result['user']);

		} else {
			setIsDenied(true);
		}
	}

	const logout = () => {
		setIsAuthenticated(false);
		setUser({});
		localStorage.removeItem("accessToken");
		localStorage.removeItem("user");
	}
	return (
		<AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, login, logout, isDenied, setIsDenied }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);