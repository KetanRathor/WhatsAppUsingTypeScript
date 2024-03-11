import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from "./Slices/peopleSlice"
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch