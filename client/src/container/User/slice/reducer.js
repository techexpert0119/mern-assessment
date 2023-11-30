import { createSlice } from "@reduxjs/toolkit";

export const name = "user";

const initialState = {
    data: null,
    loading: false,
    error: null,
    isAuthenticated: null,
};

const userSlice = createSlice({
    name,
    initialState,
    reducers: {
        authUser(state) {
            state.loading = true;
            state.error = null;
        },
        authUserSuccess(state, { payload }) {
            state.data = payload;
            state.loading = false;
            state.isAuthenticated = true;
        },
        authUserFail(state, { payload: error }) {
            state.loading = false;
            state.error = error;
            state.isAuthenticated = false;
        },
        loginUser(state, { payload }) {
            state.loading = true;
            state.error = null;
        },
        loginUserSuccess(state, { payload: data }) {
            state.data = data;
            state.loading = false;
            state.isAuthenticated = true;
        },
        loginUserFail(state, { payload: error }) {
            state.loading = false;
            state.error = error;
        },
        logOut(state) {
            state.data = null;
            state.isAuthenticated = false;
        }
    },
});

export const {
    authUser,
    authUserSuccess,
    authUserFail,
    loginUser,
    loginUserSuccess,
    loginUserFail,
    logOut
} = userSlice.actions;

export default userSlice.reducer;
