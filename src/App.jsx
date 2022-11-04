import { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { PublicRoutes } from './routes/public.routes'
import { PrivateRoutes } from './routes/private.routes'
import { AuthGuard } from './guards/auth.guards'
import RouteNotFound from './utils/RouteNotFound'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {
  const Login = lazy(() => import('./pages/login/Login'))
  const Private = lazy(() => import('./pages/private/Private'))
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Suspense fallback={<>cargando</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RouteNotFound>
              <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />}></Route>
              <Route path={PublicRoutes.LOGIN} element={<Login />}></Route>
              <Route element={<AuthGuard />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />}></Route>
              </Route>
            </RouteNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
