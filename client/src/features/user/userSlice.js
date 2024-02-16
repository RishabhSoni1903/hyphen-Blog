import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    user: {},
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logOut: (state) => {
            state.isLoggedIn = false;
            state.user = null
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { logIn, logOut, setUser } = userSlice.actions;
export default userSlice.reducer;