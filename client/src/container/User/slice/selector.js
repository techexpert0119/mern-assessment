import { createSelector } from "@reduxjs/toolkit";
import { name } from "./reducer";

const getSlice = (state) => state[name] || {};

export const getAuthUser = createSelector(getSlice, (slice) => slice.data);

export const getLoading = createSelector(getSlice, (slice) => slice.loading);

export const isAuthenticated = createSelector(getSlice, (slice) => slice.isAuthenticated);