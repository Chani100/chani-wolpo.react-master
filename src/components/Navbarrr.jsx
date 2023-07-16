import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import "../css/navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import ROUTES from "../routes/ROUTES";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { darkThemeActions } from "../store/darkTheme";
import { authActions } from "../store/auth";

const Navbars = () => {
  const [activeLink, setActiveLink] = useState("");
  const isLoggedIn = useSelector(
    (bigPieBigState) => bigPieBigState.authSlice.isLoggedIn
  );
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(
    (bigPie) => bigPie.darkThemeSlice.isDarkTheme
  );

  const changeTheme = () => {
    dispatch(darkThemeActions.changeTheme());
  };

  const logoutClick = () => {
    localStorage.clear();
    dispatch(authActions.logout());
  };

  const handleLinkClick = (event) => {
    setActiveLink(event.target.innerText);
  };

  return (
    <Navbar className="navbar" expand="lg" /* className="bg-body-tertiary" */>
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
              className={activeLink === "Home" ? "active" : ""}
              onClick={handleLinkClick}
            >
              About
            </Nav.Link>

            {isLoggedIn ? ( 
              <Nav.Link
                id="nav"
                href={ROUTES.MENU}
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
          </Nav>
          <div sx={{ display: { xs: "none", md: "inline" } }}>
            {isDarkTheme ? "Dark" : "Light"} Mode
          </div>
          <Button onClick={changeTheme}>
            {isDarkTheme ? <BsFillSunFill /> : <BsMoonFill />}
          </Button>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="profile-picture-container">
            <Image
              src={
                "https://dalicanvas.co.il/wp-content/uploads/2022/10/%D7%A9%D7%A7%D7%99%D7%A2%D7%94-%D7%A7%D7%9C%D7%90%D7%A1%D7%99%D7%AA-1.jpg"
              }
              roundedCircle
              className="profile-picture"
            />
            <span className="ml-2">{""}</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
