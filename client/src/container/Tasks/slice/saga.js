import { put, takeLatest } from "redux-saga/effects";
import { getAllTasksAPI } from "./api";

import {
    getAllTasks,
    getAllTasksSuccess,
    getAllTasksFail
} from './reducer'

// Get all tasks
function* getAllTasksSaga() {
    try {
        const data = yield getAllTasksAPI();
        if (data.success)
            yield put(getAllTasksSuccess(data));
        else
            yield put(getAllTasksFail(data.error));
    } catch (error) {
        yield put(getAllTasksFail(error));
    }
}

export function* watchTasks() {
    yield takeLatest(getAllTasks.type, getAllTasksSaga);
}
