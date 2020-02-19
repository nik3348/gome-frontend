import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Users from '../pages/Users';
import Home from '../pages/Home';


export default function Routes() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}
