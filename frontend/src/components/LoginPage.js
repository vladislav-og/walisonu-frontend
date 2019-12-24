import React, {Component} from 'react';
import { Link, Redirect } from "react-router-dom"
import {Form, Button, Alert} from "react-bootstrap";
import PropTypes from "prop-types";
import '../static/css/pages.css'
import {login} from '../utils/authRequests'


class LoginPage extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: this.props.state.isAuthenticated,
            currentUser: this.props.state.currentUser,
            isLoading: this.props.state.isLoading,
            email: "",
            password: "",
            alert: false
        };
    }

    onSubmit = e => {
        e.preventDefault();
        console.log("submit login form");
        login({email: this.state.email, password:this.state.password}, res => {
            localStorage.setItem("ACCESS_TOKEN", res.data.token);

            this.props.updateAppState({
                isLoading: false,
                currentUser: res.data,
                isAuthenticated: true,
            });
        }, err => {
            this.setState({
                alert: true
            })
        });
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        console.log('Load Login Page');
        if(this.props.state.isAuthenticated) {
            console.log("redirect to HomePage");
            return <Redirect to="/"/>
        }
        const {email, password } = this.state;
        return (
            <div className="form">
                {this.state.alert &&
                <Alert key={1} variant="danger">
                    Please check email or password
                </Alert>
                }
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="text"
                                      className="form-input"
                                      name="email"
                                      onChange={this.onChange}
                                      placeholder="Email"
                                      value={email}
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

export default (LoginPage);