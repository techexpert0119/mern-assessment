import { put, takeLatest } from "redux-saga/effects";
import { loginUserAPI, authUserAPI } from "./api";

import {
    authUser,
    authUserSuccess,
    authUserFail,
    loginUser,
    loginUserSuccess,
    loginUserFail,
} from "./reducer";

// Auth User with token
function* authUserSaga() {
    try {
        const data = yield authUserAPI();
        if (data.success) {
            yield put(authUserSuccess(data));
        } else {
            yield put(authUserFail(data.error));
        }
    } catch (error) {
        yield put(loginUserFail(error));
    }
}

// Login User
function* loginUserSaga({ payload }) {
    try {
        const data = yield loginUserAPI(payload);
        if (data.success) {
            localStorage.setItem("auth", data.token);
            yield put(loginUserSuccess(data));
        } else {
            yield put(loginUserFail(data.error));
        }
    } catch (error) {
        yield put(loginUserFail(error));
    }
}

export function* watchUser() {
    yield takeLatest(loginUser.type, loginUserSaga);
    yield takeLatest(authUser.type, authUserSaga);
}
