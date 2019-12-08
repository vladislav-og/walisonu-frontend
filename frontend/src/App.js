import React from 'react';
import {Route, HashRouter as Router, Switch} from 'react-router-dom';
import WordsList from './components/WordsList'
import LoginPage from './components/LoginPage'
import NavbarComp from './components/Navbar'

function App() {
  return (

          <Router>
            <NavbarComp/>
              <div>
                  <Switch>
                      <Route exact path="/" component={WordsList}/>
                      <Route exact path="/login" component={LoginPage}/>
                  </Switch>
              </div>
          </Router>
  );
}

export default App;
