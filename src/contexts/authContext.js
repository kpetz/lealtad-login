import { createContext, useContext, useEffect, useReducer } from 'react';
import { authReducer } from './authReducer';


const AuthContext = createContext();

const initialState = () => {
	return JSON.parse(localStorage.getItem('user')) || { isAuthenticated: false };

}

export const AuthProvider = ({ children }) => {
	const [user, dispatch] = useReducer(authReducer, {}, initialState);

	useEffect(() => {
		if (!user) return;

		localStorage.setItem('user', JSON.stringify(user));
	}, [user])

	return (
		<AuthContext.Provider value={{ user, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);