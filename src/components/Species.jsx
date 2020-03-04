import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import LinkContainer from '../containers/LinkContainer';

const Character = ({ name, homeworld, language, edited }) =>
  <Card>
    <Card.Header as="h3">{name}</Card.Header>
    <Card.Body>
      <Card.Subtitle>Species</Card.Subtitle>
    </Card.Body>
    <ListGroup variant="flush">
      <ListGroup.Item>Language : {language}</ListGroup.Item>
      <ListGroup.Item>
        Homeworld : <LinkContainer url={homeworld} />
      </ListGroup.Item>
    </ListGroup>
    <Card.Footer>
      <small className="text-muted">
        Last updated {new Date(edited).toDateString()}
      </small>
    </Card.Footer>
  </Card >
  ;

export default Character;