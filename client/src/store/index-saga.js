import { all, fork } from "redux-saga/effects";
import { watchUser } from "../container/User/slice/saga";
import { watchTasks } from "../container/Tasks/slice/saga";

const rootSaga = function* () {
    yield all([fork(watchUser)]);
    yield all([fork(watchTasks)]);
};

export default rootSaga;
