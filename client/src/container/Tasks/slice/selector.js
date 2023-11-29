import { createSelector } from "@reduxjs/toolkit";
import { name } from "./reducer";

const getSlice = (state) => state[name] || {};

export const getTasks = createSelector(getSlice, (slice) => slice.data);

export const getTasksLoading = createSelector(getSlice, (slice) => slice.loading);