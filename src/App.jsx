import React from 'react';
import DataContainer from './containers/DataContainer';
import { Container } from 'react-bootstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () =>
  <Container>
    <BrowserRouter>
      <Switch>
        <Route exact path="/:resource(\w+)" component={DataContainer} />
        <Route exact path="/:resource(\w+)/:id(\d+)" component={DataContainer} />
      </Switch>
    </BrowserRouter>
  </Container>
  ;

export default App;
