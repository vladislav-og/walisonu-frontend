import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, NavItem} from "react-bootstrap";

//import * as requests from '../utils/requests';

class NavbarComp extends Component {

  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Link to="/">
          <Navbar.Brand>
            <img
              src="favicon-side.png"
              width="auto"
              height="40"
              className="d-inline-block align-top"
              alt="Wali Sõnu!"
            />
          </Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <NavItem eventkey={1} href="/">
            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
          </NavItem>
          <NavItem eventkey={2} href="/">
            <Nav.Link as={Link} to="/register" >Register</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavbarComp;
