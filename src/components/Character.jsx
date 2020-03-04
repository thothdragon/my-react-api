import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import LinkContainer from '../containers/LinkContainer';

const Character = ({ name, gender, birth_year, edited, homeworld, species }) =>
  <Card>
    <Card.Header as="h3">{name}</Card.Header>
    <Card.Body>
      <Card.Subtitle>Character</Card.Subtitle>
    </Card.Body>
    <ListGroup variant="flush">
      <ListGroup.Item>Gender : {gender}</ListGroup.Item>
      <ListGroup.Item>Birth year : {birth_year}</ListGroup.Item>
      <ListGroup.Item>
        Homeworld : <LinkContainer url={homeworld} />
      </ListGroup.Item>
      <ListGroup.Item>
        Species : {species.map((item, index) => <LinkContainer url={item} key={index} />)}
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