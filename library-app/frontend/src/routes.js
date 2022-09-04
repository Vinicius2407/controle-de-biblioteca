import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default Routes;