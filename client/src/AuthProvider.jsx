import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { authUser } from "./container/User/slice/reducer";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUser());
  }, [dispatch]);

  return children;
};

export default AuthProvider;
