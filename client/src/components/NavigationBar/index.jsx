import { useState } from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import IMAGES from "../../assets"; // Importing images from single "IMAGES" object
import ProfileModal from "../ProfileModal";

import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthUser } from "../../container/User/slice/selector";
import { logOut } from "../../container/User/slice/reducer";
import { Notify } from "../../utils";
import { setNavigate } from "../../utils/navigate";

const NavigationBar = () => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authData = useSelector(selectAuthUser);
  setNavigate(navigate);

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    dispatch(logOut());
    Notify("Successfully Logged out", "success");
  };

  return (
    <Navbar collapseOnSelect expand="md" variant="dark" id="nav">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt="Task Management Sytem Logo"
            src={IMAGES.logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          &nbsp;Task Management System
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          className="justify-content-end"
          style={{ minHeight: "60px" }}
        >
          {authData ? (
            <DropdownButton
              variant=""
              align="end"
              title={
                <Image
                  id="profileDropdownIcon"
                  src={authData.profilePic}
                  alt="Navbar profile image"
                  roundedCircle
                />
              }
            >
              <Dropdown.Item as="button" onClick={() => setModalShow(true)}>
                Profile
              </Dropdown.Item>
              <ProfileModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                authData={authData}
              />

              <Dropdown.Divider />

              <Dropdown.Item as="button" onClick={logoutHandler}>
                Log out
              </Dropdown.Item>
            </DropdownButton>
          ) : (
            <Nav.Item>
              <button
                className="nav-button me-2"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
              <button
                className="nav-button"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </Nav.Item>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
