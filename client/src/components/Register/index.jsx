import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Spinner, Image } from "react-bootstrap";

import { Notify } from "../../utils";
import IMAGES from "../../assets";

const Register = ({ isLoading, requestRegister }) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validated, setValidated] = useState(false);

  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      if (credentials.password !== credentials.confirmPassword) {
        return Notify("Passwords Do Not Match", "warn");
      }

      // If password is less than 8 characters
      if (credentials.password.length < 8) {
        return Notify("Password must be at least 8 characters", "warn");
      }
      requestRegister({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      });
    }
    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      className="auth__form"
      onSubmit={registerHandler}
    >
      <h2 className="text-center mb-5">Create new account</h2>

      <Form.Group className="mb-3 d-flex justify-content-center">
        <Image
          id="profilePicUpload"
          src={IMAGES.user}
          alt="Profile image"
          draggable="false"
          roundedCircle
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          tabIndex="1"
          placeholder="Full name"
          value={credentials.name}
          onChange={(e) => handleCredentials(e)}
          disabled={isLoading}
          required
        />
        <Form.Control.Feedback type="invalid">
          Must input a full name
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          tabIndex="2"
          placeholder="Enter email"
          value={credentials.email}
          onChange={(e) => handleCredentials(e)}
          disabled={isLoading}
          required
        />
        <Form.Control.Feedback type="invalid">
          Must input an email
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          tabIndex="3"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => handleCredentials(e)}
          disabled={isLoading}
          required
        />
        <Form.Control.Feedback type="invalid">
          Must input a password
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          tabIndex="4"
          placeholder="Confirm password"
          value={credentials.confirmPassword}
          onChange={(e) => handleCredentials(e)}
          disabled={isLoading}
          required
        />
        <Form.Control.Feedback type="invalid">
          Must input a confirm password
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        tabIndex="6"
        variant="success"
        type="submit"
        className="mb-3"
        disabled={isLoading}
      >
        {isLoading ? (
          <Spinner animation="border" role="status" size="sm" />
        ) : (
          "Create Account"
        )}
      </Button>

      <Form.Group className="mb-3 text-center" controlId="register">
        <span>
          Already have an account?&nbsp;
          <Link to="/login" tabIndex="6" className="text-decoration-none">
            Log in
          </Link>
        </span>
      </Form.Group>
    </Form>
  );
};

export default Register;
