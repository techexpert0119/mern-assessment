import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Spinner, Button, Form } from "react-bootstrap";
import moment from "moment";

export default function TaskForm({
  task,
  isLoading,
  requestCreate,
  requestUpdate,
}) {
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        deadline: task.deadline,
      });
    }
  }, [task]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (form.checkValidity(e) === true) {
      task
        ? requestUpdate({
            _id: task._id,
            ...formData,
          })
        : requestCreate(formData);
    }
    setValidated(true);
  };

  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="auth__form"
      >
        <h3 className="text-center mb-5">
          {task ? "Edit task" : "Add a new task"}
        </h3>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            name="title"
            tabIndex="1"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => handleChange(e)}
            disabled={isLoading}
          />
          <Form.Control.Feedback type="invalid">
            Must input title!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            name="description"
            tabIndex="2"
            placeholder="Description"
            value={formData.description}
            onChange={(e) => handleChange(e)}
            disabled={isLoading}
          />
          <Form.Control.Feedback type="invalid">
            Must input description!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-4" controlId="deadline">
          <Form.Label>Deadline</Form.Label>
          <Form.Control
            required
            type="date"
            name="deadline"
            tabIndex="3"
            placeholder="Deadline"
            value={moment(formData.deadline).format("YYYY-MM-DD")}
            onChange={(e) => handleChange(e)}
            disabled={isLoading}
          />
          <Form.Control.Feedback type="invalid">
            Must select deadline!
          </Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Col md="6" className="pl-3 pr-2">
            <Button
              variant="success"
              type="submit"
              className="mb-3"
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner animation="border" role="status" size="sm" />
              ) : task ? (
                "Edit"
              ) : (
                "Create"
              )}
            </Button>
          </Col>
          <Col md="6" className="pl-2 pr-3">
            <Button
              variant="outline-secondary"
              type="submit"
              className="mb-3"
              disabled={isLoading}
              onClick={() => navigate("/tasks")}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
