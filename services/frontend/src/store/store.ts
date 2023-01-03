import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../modules/auth/AuthSlice';
import counterReducer from '../modules/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'development' ? false : true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
