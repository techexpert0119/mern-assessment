import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { registerUser } from "../slice/reducer";
import { selectLoading } from "../slice/selector";
import Register from "../../../components/Register";

const RegisterContainer = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  const requestRegister = (payload) => {
    dispatch(registerUser(payload));
  };
  return <Register isLoading={loading} requestRegister={requestRegister} />;
};

export default RegisterContainer;
