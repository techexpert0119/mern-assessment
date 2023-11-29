import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { isAuthenticated, getLoading } from "../container/User/slice/selector";

const PrivateRoutes = ({ children }) => {
  const isAuth = useSelector(isAuthenticated);
  const loading = useSelector(getLoading);

  if (!isAuth && !loading) return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
