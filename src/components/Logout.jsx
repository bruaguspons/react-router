import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetUser, userKey } from '../redux/state/user'
import { PublicRoutes } from '../routes/public.routes'
import { clearLocalInfo } from '../utils/localStoreManager'

function Logout() {
    const navigate = useNavigate()
    const dispatcher = useDispatch()
    const logOut = () => {
        clearLocalInfo(userKey)
        dispatcher(resetUser())
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
    }


    return (
        <div>
            <button onClick={logOut}>LogOut</button>
        </div>
    )
}

export default Logout