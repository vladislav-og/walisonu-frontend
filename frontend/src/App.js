import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import WordsList from './components/WordsList'
import NavbarComp from './components/Navbar'

function App() {
  return (

          <Router>
            <NavbarComp/>
              <div>
                  <Switch>
                      <Route exact path="/" component={WordsList}/>
                  </Switch>
              </div>
          </Router>
  );
}

export default App;
