import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/login/Login';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import DashboardRoutes from './DashboardRoutes';

export const AppRouter = () => {
	return (
		<BrowserRouter>
				<Routes>
					<Route path="/login" element={<PublicRoute >
						<Login />
					</PublicRoute>} />
					<Route path="/*" element={<PrivateRoute >
						<DashboardRoutes />
					</PrivateRoute>} />
				</Routes>
		</BrowserRouter>
	)
};
