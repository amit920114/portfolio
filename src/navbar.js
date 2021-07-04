import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";

function navbar() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand variant="mx-2" href="#home">
              {" "}
              Home{" "}
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="./skills.js">Skills</Nav.Link>
              <Nav.Link href="./Projects.js">Projects</Nav.Link>
              <Nav.Link href="./Footer.js">Social</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      ;
    </div>
  );
}

export default navbar;
