import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, NavItem} from "react-bootstrap";


class NavbarComp extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const loginButton = this.props.state.isAuthenticated ?
        <NavItem eventkey={1} href="/"><Nav.Link onClick={this.props.logout}>Logout</Nav.Link></NavItem>:
        <NavItem eventkey={3} href="/"><Nav.Link as={Link} to="/login" >Login</Nav.Link></NavItem>;
    const registerButton = this.props.state.isAuthenticated ? "" : <Nav.Link as={Link} to="/register" >Register</Nav.Link>;
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
            {loginButton}
          <NavItem eventkey={2} href="/">
            {registerButton}
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavbarComp;
