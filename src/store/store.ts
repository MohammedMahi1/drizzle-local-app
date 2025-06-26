import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './slices/taskSlice'
import openSlice from './slices/openSlice'
// ...

export const store = configureStore({
  reducer: {
    task:taskSlice,
    open:openSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch