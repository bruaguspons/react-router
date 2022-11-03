import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUser, resetUser, userKey } from '../../redux/state/user'
import { PrivateRoutes } from '../../routes/private.routes'
import { getMorty } from '../../services/auth.service'
import { clearLocalInfo } from '../../utils/localStoreManager'


function Login() {
    const dispatcher = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        clearLocalInfo(userKey)
        dispatcher(resetUser())
    }, [])

    const login = async () => {
        try {
            const resu = await getMorty()
            dispatcher(createUser(resu))
            navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
        } catch (error) {

        }
    }
    return (
        <div>
            <h2>Login</h2>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login