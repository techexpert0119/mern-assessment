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
        getTask(state, { payload }) {
            state.task.loading = true;
            state.task.error = null;
        },
        getTaskSuccess(state, { payload: data }) {
            state.task.data = data;
            state.task.loading = false;
            state.task.error = null;
        },
        getTaskFail(state, { payload: error }) {
            state.task.loading = false;
            state.task.error = error;
        },
        createTask(state, { payload }) {
            state.task.loading = true;
            state.task.error = null;
        },
        createTaskSuccess(state, { payload: data }) {
            state.task.data = data;
            state.task.loading = false;
            state.task.error = null;
        },
        createTaskFail(state, { payload: error }) {
            state.task.loading = false;
            state.task.error = error;
        },
        updateTask(state, { payload }) {
            state.task.loading = true;
            state.task.error = null;
        },
        updateTaskSuccess(state, { payload: data }) {
            state.task.data = data;
            state.task.loading = false;
            state.task.error = null;
        },
        updateTaskFail(state, { payload: error }) {
            state.task.loading = false;
            state.task.error = error;
        },
        deleteTask(state, { payload }) {
            state.loading = true;
            state.error = null;
        },
        deleteTaskSuccess(state) {
            state.loading = false;
            state.error = null;
        },
        deleteTaskFail(state, { payload: error }) {
            state.loading = false;
            state.error = error;
        }
    },
});

export const {
    getAllTasks,
    getAllTasksSuccess,
    getAllTasksFail,
    getTask,
    getTaskSuccess,
    getTaskFail,
    createTask,
    createTaskSuccess,
    createTaskFail,
    updateTask,
    updateTaskSuccess,
    updateTaskFail,
    deleteTask,
    deleteTaskSuccess,
    deleteTaskFail
} = tasksSlice.actions;

export default tasksSlice.reducer;
