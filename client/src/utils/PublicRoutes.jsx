import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { isAuthenticated, getLoading } from "../container/User/slice/selector";

const PublicRoutes = ({ children }) => {
  const isAuth = useSelector(isAuthenticated);
  const loading = useSelector(getLoading);

  if (isAuth && !loading) return <Navigate to="/tasks" />;

  return <Outlet />;
};

export default PublicRoutes;
