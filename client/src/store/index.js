import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import reducer from "./slices";
import saga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

if (module.hot) {
    module.hot.accept("./slices", () => {
        const reducers = require("./slices").default;

        store.replaceReducers(reducers);
    });
}

export default store;
