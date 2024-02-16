import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    blogs: [],
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            const blog = action.payload;
            state.blogs.push(blog);
        },
        deleteBlog: (state, action) => {
            state.blogs = state.blogs.filter((blog) => blog._id !== action.payload)
        }
    }
})

export const { addBlog, removeBlog } = blogSlice.actions;
export default blogSlice.reducer;