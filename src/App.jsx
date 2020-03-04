import React from 'react';
import DataContainer from './containers/DataContainer';
import { Container, Image } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StarWarsLogoLego } from './images';

const App = () =>
  <Container>
    <div className="d-flex d-flex-colums justify-content-center align-items-center">
      <Image src={StarWarsLogoLego} />
    </div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/:resource(\w+)" component={DataContainer} />
        <Route exact path="/:resource(\w+)/:id(\d+)" component={DataContainer} />
      </Switch>
    </BrowserRouter>
  </Container>
  ;

export default App;
