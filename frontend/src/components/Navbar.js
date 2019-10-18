import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav } from "react-bootstrap";

//import * as requests from '../utils/requests';

class NavbarComp extends Component {

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Link to="/"><Navbar.Brand>Homepage</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link to="/users"><Navbar.Brand>Users</Navbar.Brand></Link>
                    <Link to="/synonyms"><Navbar.Brand>Synonyms</Navbar.Brand></Link>
                </Nav>
            </Navbar>
        )
}}

export default (NavbarComp);