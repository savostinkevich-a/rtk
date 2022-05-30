import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {PostService} from "../services/PostService";
import {setupListeners} from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: combineReducers({
        [PostService.reducerPath]: PostService.reducer
    }),
    middleware: ((getDefaultMiddleware) =>
        getDefaultMiddleware().concat(PostService.middleware)
    )
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch