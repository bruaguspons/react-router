import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { PublicRoutes } from "../routes/public.routes"

export const AuthGuard = () => {
    const userState = useSelector(state => state.user)
    return userState.id ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}