import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../modules/auth/store/userSlice'
import {ArticleService} from "@/modules/articles/services/ArticleService";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [ArticleService.reducerPath]: ArticleService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ArticleService.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch