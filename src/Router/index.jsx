import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import About from '../pages/About';
import Users from '../pages/Users';
import Home from '../pages/Home';
import Topics from '../pages/Topics';
import Blocking from '../pages/Blocking';
import Error404 from '../pages/Error404';

// Template Route
// {
//   path: "/tacos",
//     component: About,
//   index: [
//     {
//       path: "/tacos/bus",
//       component: Bus
//     },
//     {
//       path: "/tacos/cart",
//       component: Cart
//     }
//   ]
// }

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/topics',
    component: Topics,
  },
  {
    path: '/block',
    component: Blocking,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/*',
    component: Error404,
  },
];

export default function Router() {
  return (
    <div>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {routes.map((route) => (
          <Routes key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export function Routes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-index down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
