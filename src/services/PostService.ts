import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import IPost from "../models/IPost";

export const PostService = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/"}),
    endpoints: (builder) => ({
        getPosts: builder.query<IPost, null>({
            query: () => `posts`
        })
    })
})

export const {useGetPostsQuery} = PostService