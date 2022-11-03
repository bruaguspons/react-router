import React, { lazy } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { PrivateRoutes } from '../../routes/private.routes'
import RouteNotFound from '../../utils/RouteNotFound'

function Private() {
    const Dashboard = lazy(() => import('./dashboard/Dashboard'))
    const Home = lazy(() => import('./home/Home'))
    return (
        <RouteNotFound>
            <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            <Route path={PrivateRoutes.HOME} element={<Home />} />
        </RouteNotFound>
    )
}

export default Private