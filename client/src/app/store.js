import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/blog/blogSlice';
import userReducer from '../features/user/userSlice'

export const store = configureStore({
    reducer: {
        blog: blogReducer,
        user: userReducer
    }
})