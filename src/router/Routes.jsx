import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import About from '../pages/About';
import Users from '../pages/Users';
import Home from '../pages/Home';
import Topics from '../pages/Topics';
import Blocking from '../pages/Blocking'

export default function Routes() {
  return (
    <div>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/home" children={<Home/>}/>
        <Route path="/about" children={<About/>}/>
        <Route path="/users" children={<Users/>}/>
        <Route path="/topics" children={<Topics/>}/>
        <Route path="/block" exact children={<Blocking />} />
      </Switch>
    </div>
  );
}
