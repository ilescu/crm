import {createSlice} from "@reduxjs/toolkit";
import {User} from "@/modules/auth/model/User";
import {authApi} from "@/modules/auth/api/authApi";

const initialState: User = {
    id: null,
    token: null,
    email: null,
}

const key = 'auth.me'

const data = localStorage.getItem(key)

const {logout: getLogout} = authApi()

export const userSlice = createSlice({
    name: 'user',
    initialState: data ? JSON.parse(data) : initialState,
    reducers: {
        setLogin: (state, action) => {
            const {id, token, email} = action.payload
            if (!localStorage.getItem(key)) {
                localStorage.setItem(key, JSON.stringify(action.payload))
                state.id = id
                state.token = token
                state.email = email
            } else {
                localStorage.removeItem(key)
            }
        },
        logout: (state, action) => {
            (async () => await getLogout({token: action.payload}))()
            state.id = null
            state.token = null
            state.email = null
            localStorage.removeItem(key)
            navigator
        }
    }
})

export const {setLogin, logout} = userSlice.actions
export default userSlice.reducer