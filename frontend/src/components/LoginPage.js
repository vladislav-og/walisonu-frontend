import React, {Component} from 'react';
import { Link, Redirect } from "react-router-dom"
import {Form, Button} from "react-bootstrap";
import PropTypes from "prop-types";
import '../static/css/pages.css'

class LoginPage extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    state = {
        username: "",
        password: ""
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        if(this.props.isAuthenticated) {
            return <Redirect to="/"/>
        }
        const {username, password } = this.state;
        return (
            <div className="form">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label >Username</Form.Label>
                        <Form.Control type="text"
                                      className="form-input"
                                      name="username"
                                      onChange={this.onChange}
                                      placeholder="Username"
                                      value={username}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      className="form-input"
                                      name="password"
                                      onChange={this.onChange}
                                      placeholder="Password"
                                      value={password}
                        />
                    </Form.Group>
                    <div className="form-group">
                        <Button type="submit" block>
                            Login
                        </Button>
                    </div>
                    <p>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </Form>
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
// });

export default (LoginPage);