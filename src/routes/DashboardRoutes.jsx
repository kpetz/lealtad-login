import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { role } from '../helpers/roles';
import { routes } from '../helpers/routes';
import FullLayout from '../layouts/FullLayout';
import Clients from '../pages/Clients';
import CommerceIndex from '../pages/Commerce/CommerceIndex';
import ListCommerce from '../pages/Commerce/ListCommerce';
import NewCommerce from '../pages/Commerce/NewCommerce';
import SingleCommerce from '../pages/Commerce/SingleCommerce';
import Coupons from '../pages/Coupons';
import Dashboard from '../pages/Dashboard';
import Error404 from '../pages/Error404';



const DashboardRoutes = () => {
	const { user } = useAuth();

	return (
		<Routes>
			<Route path='/' element={<FullLayout />} >
				<Route path='/' element={<Navigate to='/dashboard' />} />
				{
					routes.map(({ name, path, Component, isProtected, children }, index) => {
						if (isProtected && user.fname !== role.admin) {
							return null;
						}
						return (
							<Route
								key={index}
								path={path}
								exact
								element={<Component />}
							>
								{children ? children.map((child, i) => {
									if (child.isProtected && user.fname !== role.admin) {
										return null;
									}
									if (child.index) {
										return (
											<Route
												key={i}
												index={child.index}
												element={<child.Component breadcrumb={{}} />}
											/>
										)
									} else {
										return (
											<Route
												key={i}
												path={child.path}
												exact
												element={<child.Component breadcrumb={{}} />}
											/>
										)
									}
								}) : null
								}
							</Route>
						)
					})
				}
				{/* <Route path='/' element={<Navigate to='/dashboard' />} />
				<Route path='/dashboard' exact element={<Dashboard />} />
				<Route path='/commerce' exact element={<CommerceIndex />} >
					<Route index element={<ListCommerce />} />
					<Route path='new' element={<NewCommerce />} />
					<Route path='edit' element={<NewCommerce />} />
					<Route path=':id' element={<SingleCommerce />} />
				</Route>
				<Route path='/clients' exact element={<Clients />} />
				<Route path='/coupons' exact element={<Coupons />} /> */}
			</Route>
			<Route path='/*' element={<Error404 />} />
		</Routes>
	)
};

export default DashboardRoutes;