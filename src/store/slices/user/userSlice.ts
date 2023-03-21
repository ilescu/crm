import {LoginUser} from '@/store/slices/user/types'
import {createSlice} from "@reduxjs/toolkit";

const initialState: LoginUser = {
    id: null,
    token: null,
    email: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.id = action.payload.id
            state.token = action.payload.token
            state.email = action.payload.email
        },
        logout: (state) => {
            state.id = null
            state.token = null
            state.email = null
        }
    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer