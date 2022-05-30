import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import IPost from "../models/IPost";
import PostListArgs from "../dtos/PostListArgs";

export const PostService = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/"}),
    endpoints: (builder) => ({
        getPostList: builder.query<Array<IPost>, PostListArgs>({
            query: (arg: PostListArgs) => `posts?_limit=${arg.limit || 10}&_page=${arg.page || 1}`,
        }),
        getPost: builder.query<IPost, number>({
            query: (postId: number) => `posts/${postId}`
        }),
        getPostComments: builder.query({
            query: (postId?: number | undefined) => `comments?postId=${postId}`
        })
    })
})

export const {useGetPostListQuery, useGetPostQuery, useGetPostCommentsQuery} = PostService