import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav } from "react-bootstrap";

//import * as requests from '../utils/requests';

class NavbarComp extends Component {

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Link to="/"><Navbar.Brand>Wali sõnu!</Navbar.Brand></Link>
            </Navbar>
        )
}}

export default (NavbarComp);