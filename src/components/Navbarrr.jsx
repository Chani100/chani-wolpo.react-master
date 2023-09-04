import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ROUTES from "../routes/ROUTES";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
import Avatar from "./AvatarCom";
import { useNavigate } from "react-router-dom";
const Navbars = () => {
  const [activeLink, setActiveLink] = useState("");
  const isLoggedIn = useSelector(
    (bigPieBigState) => bigPieBigState.authSlice.isLoggedIn
  );

  const payload = useSelector((bigPie) => bigPie.authSlice.payload);
  const dispatch = useDispatch();

  const logoutClick = () => {
    localStorage.clear();
    dispatch(authActions.logout());
  };

  const handleLinkClick = (event) => {
    setActiveLink(event.target.innerText);
  };

  return (
    <Navbar className="navbar" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              id="nav"
              href={ROUTES.HOME}
              className={activeLink === "Home" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Home
            </Nav.Link>

            <Nav.Link
              id="nav"
              href={ROUTES.ABOUT}
              className={activeLink === "About" ? "active" : ""}
              onClick={handleLinkClick}
            >
              About
            </Nav.Link>
            <Nav.Link
              id="nav"
              href={ROUTES.CONTACT}
              className={activeLink === "Contact" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Contact
            </Nav.Link>

            {isLoggedIn && !payload.isAdmin ? (
              <Nav.Link
                id="nav"
                href={ROUTES.MUNELOGOUT}
                className={activeLink === "Link" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Menu
              </Nav.Link>
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <Nav.Link
                id="nav"
                href={ROUTES.LOGOUT}
                className={activeLink === "Link" ? "active" : ""}
                onClick={logoutClick}
              >
                Logout
              </Nav.Link>
            ) : (
              ""
            )}

            {!isLoggedIn ? (
              <Nav.Link
                id="nav"
                href={ROUTES.LOGIN}
                className={activeLink === "Link" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Login
              </Nav.Link>
            ) : (
              ""
            )}
            {!isLoggedIn ? (
              <Nav.Link
                id="nav"
                href={ROUTES.REGISTER}
                className={activeLink === "Link" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Register
              </Nav.Link>
            ) : (
              ""
            )}
            {!isLoggedIn ? (
              <Nav.Link
                id="nav"
                href={ROUTES.MUNELOGOUT}
                className={activeLink === "Link" ? "active" : ""}
                onClick={handleLinkClick}
              >
                General-Menu
              </Nav.Link>
            ) : (
              ""
            )}

            {isLoggedIn && payload.isAdmin ? (
              <Nav.Link
                id="nav"
                href={ROUTES.CRM}
                className={activeLink === "Link" ? "active" : ""}
                onClick={handleLinkClick}
              >
                CRM
              </Nav.Link>
            ) : (
              ""
            )}
            {isLoggedIn && payload.isAdmin ? (
              <Nav.Link
                id="nav"
                href={ROUTES.MENU}
                className={activeLink === "Link" ? "active" : ""}
                onClick={handleLinkClick}
              >
                MENU
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {isLoggedIn ? <Avatar /> : ""}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
