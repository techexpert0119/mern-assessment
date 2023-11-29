import { combineReducers } from "@reduxjs/toolkit";

import userReducer, { name as userName } from "../container/User/slice/reducer";
import tasksReducer, { name as tasksName } from '../container/Tasks/slice/reducer'

const rootReducer = combineReducers({
    [userName]: userReducer,
    [tasksName]: tasksReducer,
});

export default rootReducer;
