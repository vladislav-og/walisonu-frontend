import React, {Component} from 'react';
import {Route, HashRouter as Router, Switch} from 'react-router-dom';
import WordsList from './components/WordsList'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import NavbarComp from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import {logout} from './utils/authRequests';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false
        };
    }

    updateAppState = (state) => {
        this.setState(state)
    };

    logout = () => {
        logout();
        localStorage.removeItem("ACCESS_TOKEN");
        this.setState({
            currentUser: null,
            isAuthenticated: false,
            isLoading: false,
        });
    };

    render() {
        return (
            <Router>
                <NavbarComp state={this.state} logout = {this.logout}/>
                <div>
                    <Switch>
                        <PrivateRoute exact path="/" component={WordsList} state={this.state} updateAppState = {this.updateAppState}/>
                        <PrivateRoute exact path="/login" component={LoginPage} state={this.state} updateAppState = {this.updateAppState}/>
                        <Route exact path="/register" component={RegisterPage} state={this.state} updateAppState = {this.updateAppState}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
