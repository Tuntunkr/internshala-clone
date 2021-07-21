import React from "react";
import { Navbar, Nav, NavDropdown, Container, Row } from "react-bootstrap";
import MainForm from "./MainForm";
import BG from "../img/bg.jpg";
import Job from "./Job";

function Programming() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <span className="text-primary font-weight-bold">
              INTERN<span className="text-dark">SHALA</span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="ONLINE TRAININGS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <div>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </div>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Login" className="text-primary">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row className="m-0 p-0" style={{ background: "url(" + BG + ")" }}>
        <div className="col-md-6">
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            id="div_main"
          >
            <h1
              className="text-white"
              style={{ fontWeight: 1000, fontSize: 50 }}
            >
              Learn Python
            </h1>
            <hr className="line"></hr>
            <h4 class="text-white font-weight-bold" id="text">
              Master one of the most popular programming languages of the 21st
              century!
            </h4>

            <div className="container_box">
              <div className="circular_box">4.2</div>
              <div className="circular_box">44,913 Enrolled</div>
              <div className="circular_box">6 Weeks</div>
              <div className="circular_box">Placement Assistance</div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <MainForm />
        </div>
      </Row>
      <Job />
    </div>
  );
}

export default Programming;
