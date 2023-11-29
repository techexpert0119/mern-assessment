import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import reducer from "./index-reducer";
import saga from "./index-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

if (module.hot) {
    module.hot.accept("./index-reducer", () => {
        const reducers = require("./index-reducer").default;

        store.replaceReducers(reducers);
    });
}

export default store;
