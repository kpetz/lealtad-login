import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clients from '../pages/Clients'
import Coupons from '../pages/Coupons'
import Dashboard from '../pages/Dashboard'
import Error404 from '../pages/Error404'
import Search from '../pages/Search'

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='clients' element={<Clients/>} />
      <Route path='coupons' element={<Coupons />} />
      <Route path='search' element={<Search />} />
      <Route path='/' element={<Dashboard />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/*' element={<Error404 />} />
    </Routes>
  )
}

export default DashboardRoutes