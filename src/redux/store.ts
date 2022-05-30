import {configureStore} from "@reduxjs/toolkit";
import {PostService} from "../services/PostService";


export const store = configureStore({
    reducer: {
        [PostService.reducerPath]: PostService.reducer
    },
    middleware: ((getDefaultMiddleware) =>
        getDefaultMiddleware().concat(PostService.middleware)
    )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch