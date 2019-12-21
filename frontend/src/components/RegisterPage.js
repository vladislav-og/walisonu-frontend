import React, {Component} from 'react';
import '../static/css/pages.css'
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {register} from '../utils/authRequests'

class RegisterPage extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            username: "",
            email: "",
            password1: "",
            password2: "",
        };
    }

    onSubmit = e => {
        e.preventDefault();
        const {username, email, password1, password2} = this.state;

        if(password1 !== password2) {
            console.log("Passwords do not match");
        } else {
            const newUser = {
                email: email,
                password: password1,
            };

            register(newUser, res => {
                console.log("successfully registered new User");
                this.setState({
                    isAuthenticated: true,
                })
                }, err => {
                alert(err);
            });
        }
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };


    render() {
        if(this.state.isAuthenticated) {
            return <Redirect to="/login" state = {this.props.state} updateAuthState = {this.props.updateAuthState} updateUserState = {this.props.updateUserState}/>
        }
        const { username, email, password, password2 } = this.state;
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
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email"
                                      className="form-input"
                                      name="email"
                                      onChange={this.onChange}
                                      placeholder="Email"
                                      value={email}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password 1</Form.Label>
                        <Form.Control type="password"
                                      className="form-input"
                                      name="password1"
                                      onChange={this.onChange}
                                      placeholder="Password"
                                      value={password}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password 2</Form.Label>
                        <Form.Control type="password"
                                      className="form-input"
                                      name="password2"
                                      onChange={this.onChange}
                                      placeholder="Repeat Password"
                                      value={password2}
                        />
                    </Form.Group>
                    <div className="form-group">
                        <Button type="submit" block>
                            Register
                        </Button>
                    </div>
                    <p>
                        Already have account? <Link to="/login">Login</Link>
                    </p>
                </Form>
            </div>
        );
    }
}

export default (RegisterPage);