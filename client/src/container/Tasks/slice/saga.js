import { put, takeLatest } from "redux-saga/effects";
import { getAllTasksAPI, getTaskAPI, createTaskAPI, updateTaskAPI, deleteTaskAPI } from "./api";

import {
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
} from './reducer'

import { Notify, History } from "../../../utils";

// Get all tasks
function* getAllTasksSaga() {
    try {
        const response = yield getAllTasksAPI();
        if (response.success)
            yield put(getAllTasksSuccess(response.data));
        else
            yield put(getAllTasksFail(response.error));
    } catch (error) {
        yield put(getAllTasksFail(error));
    }
}

// Get a task
function* getTaskSaga({ payload: { _id } }) {
    try {
        const response = yield getTaskAPI(_id);
        if (response.success)
            yield put(getTaskSuccess(response.data));
        else
            yield put(getTaskFail(response.error));
    } catch (error) {
        yield put(getTaskFail(error));
    }
}

// Create a new task
function* createTaskSaga({ payload }) {
    try {
        const response = yield createTaskAPI(payload);
        if (response.success) {
            yield put(createTaskSuccess(response.data));
            History.push('/tasks');
            Notify("Successfully created!", "success")
        }
        else {
            yield put(createTaskFail(response.error));
            Notify(response.error, "error")
        }
    } catch (error) {
        yield put(createTaskFail(error));
        Notify(error, "error")
    }
}

// Update a new task
function* updateTaskSaga({ payload }) {
    try {
        const response = yield updateTaskAPI(payload);
        if (response.success) {
            yield put(updateTaskSuccess(response.data));
            History.push('/tasks');
            Notify("Successfully updated!", "success")
        }
        else {
            yield put(updateTaskFail(response.error));
            Notify(response.error, "error")
        }
    } catch (error) {
        yield put(updateTaskFail(error));
        Notify(error, "error")
    }
}

// Update a new task
function* deleteTaskSaga({ payload: { _id } }) {
    try {
        const response = yield deleteTaskAPI(_id);
        if (response.success) {
            yield put(deleteTaskSuccess(response.data));
            Notify("Successfully deleted!", "success")
        }
        else {
            yield put(deleteTaskFail(response.error));
            Notify(response.error, "error")
        }
    } catch (error) {
        yield put(deleteTaskFail(error));
        Notify(error, "error")
    }
}

export function* watchTasks() {
    yield takeLatest(getAllTasks.type, getAllTasksSaga);
    yield takeLatest(getTask.type, getTaskSaga);
    yield takeLatest(createTask.type, createTaskSaga);
    yield takeLatest(updateTask.type, updateTaskSaga);
    yield takeLatest(deleteTask.type, deleteTaskSaga);
}
