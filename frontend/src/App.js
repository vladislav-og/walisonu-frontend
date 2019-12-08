import React from 'react';
import {Route, HashRouter as Router, Switch} from 'react-router-dom';
import WordsList from './components/WordsList'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import NavbarComp from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (

          <Router>
            <NavbarComp/>
              <div>
                  <Switch>
                      <PrivateRoute exact path="/" component={WordsList}/>
                      <Route exact path="/login" component={LoginPage}/>
                      <Route exact path="/register" component={RegisterPage}/>
                  </Switch>
              </div>
          </Router>
  );
}

export default App;
