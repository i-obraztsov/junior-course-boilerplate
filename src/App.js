import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Catalog } from './pages/Catalog';
import { Good } from './pages/Good';
import { NotFound } from './pages/NotFound';

export const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Catalog} />
      <Route path="/notFound" component={NotFound} />
      <Route path="/:id" component={Good} />
    </Switch>
  )
}
