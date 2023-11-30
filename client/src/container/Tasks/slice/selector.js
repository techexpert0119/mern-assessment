import { createSelector } from "@reduxjs/toolkit";
import { name } from "./reducer";

const getSlice = (state) => state[name] || {};

export const selectTasks = createSelector(getSlice, (slice) => slice.data);

export const selectTasksLoading = createSelector(getSlice, (slice) => slice.loading);

export const selectTask = createSelector(getSlice, (slice) => slice.task.data);

export const selectTaskLoading = createSelector(getSlice, (slice) => slice.task.loading);