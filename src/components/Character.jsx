import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

const Character = ({ name, gender, birth_year, edited }) =>
  <Card>
    <Card.Header>
      <Card.Title>Character</Card.Title>
      <Card.Subtitle>{name}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <ListGroup>
        <ListGroup.Item>Gender : {gender}</ListGroup.Item>
        <ListGroup.Item>Birth year : {birth_year}</ListGroup.Item>
      </ListGroup>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
        Last updated {new Date(edited).toDateString()}
      </small>
    </Card.Footer>
  </Card>
  ;

export default Character;