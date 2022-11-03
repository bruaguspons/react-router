import { createSlice } from "@reduxjs/toolkit";
import { clearLocalInfo, setLocalInfo } from "../../utils/localStoreManager";

const emptyUser = {
    id: 0,
    name: '',
    email: ''
}

export const userKey = 'user'

export const userSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem(userKey) ? JSON.parse(localStorage.getItem(userKey)) : emptyUser,
    reducers: {
        createUser: (state, action) => {
            setLocalInfo(userKey, action.payload)
            return action.payload
        },
        updateUser: (state, action) => {
            setLocalInfo(userKey, { ...state, ...action.payload })
            return { ...state, ...action.payload }
        },
        resetUser: () => {
            clearLocalInfo(userKey)
            return emptyUser
        }
    }
})

export const { createUser, updateUser, resetUser } = userSlice.actions