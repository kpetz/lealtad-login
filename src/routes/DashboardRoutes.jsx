import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import FullLayout from '../layouts/FullLayout';
import Clients from '../pages/Clients';
import Commerce from '../pages/Commerce';
import Coupons from '../pages/Coupons';
import Dashboard from '../pages/Dashboard';
import Error404 from '../pages/Error404';
import Search from '../pages/Search';
const DashboardRoutes = () => {
	return (
		<Routes>
			{/* <FullLayout/> */}
			{/* <Route path='/' element={<Dashboard />} /> */}
			<Route path='/' element={<FullLayout />} >
				<Route path='/' element={<Navigate to='/dashboard' />} />
				<Route path='/dashboard' exact element={<Dashboard />} />
				<Route path='/commerce' exact element={<Commerce />} />
				<Route path='/clients' exact element={<Clients />} />
				<Route path='/coupons' exact element={<Coupons />} />
				{/* <Route path='/search' element={<Search />} /> */}
			</Route>
			<Route path='/*' element={<Error404 />} />
		</Routes>
	)
};

export default DashboardRoutes;