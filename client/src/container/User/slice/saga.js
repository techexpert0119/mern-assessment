import { put, takeLatest } from "redux-saga/effects";
import { loginUserAPI, registerUserAPI, authUserAPI } from "./api";

import {
    authUser,
    authUserSuccess,
    authUserFail,
    loginUser,
    loginUserSuccess,
    loginUserFail,
    registerUser,
    registerUserSuccess,
    registerUserFail
} from "./reducer";

import { Notify } from '../../../utils'

// Auth User with token
function* authUserSaga() {
    try {
        const response = yield authUserAPI();
        if (response.success) {
            yield put(authUserSuccess(response.data));
        } else {
            yield put(authUserFail(response.error));
            Notify(response.error, 'error')
        }
    } catch (error) {
        yield put(loginUserFail(error));
        Notify(error, 'error')
    }
}

// Login User
function* loginUserSaga({ payload }) {
    try {
        const response = yield loginUserAPI(payload);
        if (response.success) {
            localStorage.setItem("auth", response.data.token);
            yield put(loginUserSuccess(response.data));
            Notify("Successfully logged in", 'success')
        } else {
            yield put(loginUserFail(response.error));
            Notify(response.error, 'error')
        }
    } catch (error) {
        yield put(loginUserFail(error));
        Notify(error, 'error')
    }
}

// Login User
function* registerUserSaga({ payload }) {
    try {
        const response = yield registerUserAPI(payload);
        if (response.success) {
            localStorage.setItem("auth", response.data.token);
            yield put(registerUserSuccess(response.data));
            Notify("Successfully logged in", 'success')
        } else {
            yield put(registerUserFail(response.error));
            Notify(response.error, 'error')
        }
    } catch (error) {
        yield put(registerUserFail(error));
        Notify(error, 'error')
    }
}

export function* watchUser() {
    yield takeLatest(loginUser.type, loginUserSaga);
    yield takeLatest(registerUser.type, registerUserSaga);
    yield takeLatest(authUser.type, authUserSaga);
}
