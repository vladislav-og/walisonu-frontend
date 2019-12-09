import React, {Component} from 'react';
import {Route, HashRouter as Router, Switch} from 'react-router-dom';
import WordsList from './components/WordsList'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import NavbarComp from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import {getCurrentUser} from './utils/authRequests'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false
        };
    }

    componentDidMount() {
        console.log('load current user');
        this.loadCurrentUser();
    }

    loadCurrentUser = () => {
        this.setState({
            isLoading: true
        });
        getCurrentUser(res => {
            this.setState({
                isLoading: false,
                currentUser: res.data,
                isAuthenticated: true,
            });
            console.log("successfully get logged in user")
            console.log(res);
            console.log(this.state)

        }, err => {
            if (err.response.status === 401) {
                this.setState({
                    isLoading: false,
                });
            }
        })
    };

    handleLogout = (redirectTo="/", description="You're successfully logged out.") => {
        localStorage.removeItem(ACCESS_TOKEN);

        this.setState({
            currentUser: null,
            isAuthenticated: false,
        });

    };

    render() {
        return (
            <Router>
                <NavbarComp state={this.state} />
                <div>
                    <Switch>
                        <PrivateRoute exact path="/" component={WordsList} state={this.state}/>
                        <Route exact path="/login" component={LoginPage} state={this.state}/>
                        <Route exact path="/register" component={RegisterPage} state={this.state}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
