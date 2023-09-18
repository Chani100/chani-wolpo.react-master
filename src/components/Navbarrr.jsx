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
import { Link, useNavigate } from "react-router-dom";
import SearchPartial from "./SearchPartial";
import "../css/media.css";
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
            <Nav className={"navLink"}>
              <Link
                id="nav"
                to={ROUTES.HOME}
                className={activeLink === "Home" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </Nav>

            <Nav className={"navLink"}>
              <Link
                id="nav"
                to={ROUTES.ABOUT}
                className={activeLink === "About" ? "active" : ""}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </Nav>
            <Nav className={"navLink"}>
              <Link
                id="nav"
                to={ROUTES.CONTACT}
                className={activeLink === "Contact" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </Nav>

            {isLoggedIn && !payload.isAdmin ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.MUNELOGOUT}
                  className={activeLink === "Menu" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  Menu
                </Link>
              </Nav>
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.MYORDERS}
                  className={activeLink === "My orders" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  My orders
                </Link>
              </Nav>
            ) : (
              ""
            )}

            {!isLoggedIn ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.LOGIN}
                  className={activeLink === "Login" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  Login
                </Link>
              </Nav>
            ) : (
              ""
            )}
            {!isLoggedIn ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.REGISTER}
                  className={activeLink === "Register" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  Register
                </Link>
              </Nav>
            ) : (
              ""
            )}
            {!isLoggedIn ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.MUNELOGOUT}
                  className={activeLink === "General-Menu" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  General-Menu
                </Link>
              </Nav>
            ) : (
              ""
            )}

            {isLoggedIn && payload.isAdmin ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.MENU}
                  className={activeLink === "Menu" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  Menu
                </Link>
              </Nav>
            ) : (
              ""
            )}
            {isLoggedIn && payload.isAdmin ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.CRM}
                  className={activeLink === "CRM" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  CRM
                </Link>
              </Nav>
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.LOGOUT}
                  className={activeLink === "Logout" ? "active" : ""}
                  onClick={logoutClick}
                >
                  Logout
                </Link>
              </Nav>
            ) : (
              ""
            )}
          </Nav>
          <SearchPartial />
          {isLoggedIn ? <Avatar /> : ""}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
