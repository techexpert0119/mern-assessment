import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";
import { Notify } from "../../utils";

const Login = ({ isLoading, requestLogin }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    // If any field is missing
    if (!credentials.email || !credentials.password) {
      return Notify("Please Fill all the Feilds", "warn");
    }

    requestLogin(credentials);
  };

  return (
    <Form className="auth__form" onSubmit={loginHandler}>
      <h3 className="text-center mb-5">Login to Your Account</h3>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          tabIndex="1"
          placeholder="Enter email"
          value={credentials.email}
          onChange={(e) => handleCredentials(e)}
          disabled={isLoading}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          tabIndex="2"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => handleCredentials(e)}
          disabled={isLoading}
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-1 text-center" controlId="register">
        <Link
          to="/forgotPassword"
          tabIndex="4"
          className="d-flex flex-row-reverse text-decoration-none mb-3"
        >
          Forgot password?
        </Link>
      </Form.Group>

      <Button
        variant="success"
        type="submit"
        tabIndex="3"
        className="mb-3"
        disabled={isLoading}
      >
        {isLoading ? (
          <Spinner animation="border" role="status" size="sm" />
        ) : (
          "Continue"
        )}
      </Button>

      <Form.Group className="mb-3 text-center" controlId="register">
        <span>
          Don't have an account?&nbsp;
          <Link to="/register" tabIndex="5" className="text-decoration-none">
            Register now
          </Link>
        </span>
      </Form.Group>
    </Form>
  );
};

export default Login;
