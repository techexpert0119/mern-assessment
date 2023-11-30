import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import {
  isAuthenticated,
  selectLoading,
} from "../container/User/slice/selector";

const PrivateRoutes = ({ children }) => {
  const isAuth = useSelector(isAuthenticated);
  const loading = useSelector(selectLoading);

  if (isAuth === false && !loading) return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
