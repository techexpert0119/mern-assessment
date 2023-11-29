import { createSlice } from "@reduxjs/toolkit";

export const name = "tasks";

const initialState = {
    data: [],
    task: {
        data: null,
        loading: false,
        error: null
    },
    loading: false,
    error: null,
};

const tasksSlice = createSlice({
    name,
    initialState,
    reducers: {
        getAllTasks(state) {
            state.loading = true;
            state.error = null;
        },
        getAllTasksSuccess(state, { payload: data }) {
            state.data = data;
            state.loading = false;
            state.error = null;
        },
        getAllTasksFail(state, { payload: error }) {
            state.loading = false;
            state.error = error;
        },
    },
});

export const {
    getAllTasks,
    getAllTasksSuccess,
    getAllTasksFail,
} = tasksSlice.actions;

export default tasksSlice.reducer;
