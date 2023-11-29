import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css"; // CSS for "react-toastify"

// Private route
import { PrivateRoutes, PublicRoutes } from "./utils";

// Pages
import {
  TasksPage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  PasswordResetPage,
} from "./pages";

import { NavigationBar } from "./components";
import { isAuthenticated } from "./container/User/slice/selector";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" replace />} />

        {/* Private routes (Requires authentication token) */}
        <Route element={<PrivateRoutes />}>
          <Route path="/tasks" element={<TasksPage />} />
        </Route>

        {/* Public routes */}
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          <Route
            path="/passwordReset/:resetToken"
            element={<PasswordResetPage />}
          />
        </Route>

        {/* If the user enters an invalid path in the URL it automatically redirects them to the homepage */}
        <Route
          path="*"
          element={
            <Navigate to={`${isAuthenticated ? "/tasks" : "/login"}`} replace />
          }
        />
      </Routes>

      {/* Remember to render the ToastContainer once in your application tree. Rendering it in the application root would be the best bet */}
      <ToastContainer />
    </>
  );
};

export default App;
