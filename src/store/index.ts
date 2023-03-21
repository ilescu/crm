import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user/userSlice'
import counterReducer from './slices/demo/demoSlice'


export const store = configureStore({
    reducer: {
        user: userReducer,
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch