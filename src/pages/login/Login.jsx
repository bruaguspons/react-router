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
        <div className='h-2/3 w-1/3 bg-blue-200 flex flex-col justify-evenly items-center border-2 border-blue-600 rounded-md'>
            <h2 className='font-bold text-white text-5xl'>Login</h2>
            <input type="text" placeholder='UserName' className='' />
            <input type="password" name="" id="" placeholder='Password' />
            <button className='h-10 w-1/3 bg-blue-600 border-2 border-blue-900 rounded-md font-bold text-white text-md hover:bg-blue-900 hover:border-gray-700' onClick={login}>Login</button>
        </div>
    )
}

export default Login