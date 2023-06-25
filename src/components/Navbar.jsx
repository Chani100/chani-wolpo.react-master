import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const Navbars = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (event) => {
    setActiveLink(event.target.innerText);
  };

  return (
    <Navbar className="navbar" expand="lg" /* className="bg-body-tertiary" */>
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/*  <Breadcrumb
          
          > 
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
          </Breadcrumb> */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              className={activeLink === "Home" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className={activeLink === "Link" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Link
            </Nav.Link>
          </Nav>

          {/*  <Nav
            justify
            variant="tabs"
            defaultActiveKey="/home"
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1"> NavLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
          </Nav>*/}
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
