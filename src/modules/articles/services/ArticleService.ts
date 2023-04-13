import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {apiUrl} from "@/config";
import {Article} from "@/modules/articles/model/Article";

export const ArticleService = createApi({
    reducerPath: 'articleService',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: `${apiUrl}`,
        }
    ),
    endpoints: (builder) => ({
        getArticles: builder.query<Article, { page: number, perPage: number }>({
            query: ({ page = 1, perPage = 5 }) => `articles-test?page=${page}&perPage=${perPage}`
        })
    })
})
