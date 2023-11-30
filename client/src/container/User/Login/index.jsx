import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../slice/reducer";
import { selectLoading } from "../slice/selector";
import { Login } from "../../../components";

const LoginContainer = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  const requestLogin = (payload) => {
    dispatch(loginUser(payload));
  };
  return <Login isLoading={loading} requestLogin={requestLogin} />;
};

export default LoginContainer;
