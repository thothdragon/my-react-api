import React, { Component } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import { ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Character, Planet } from '../components';

const componentsByResource = {
  people: Character,
  planets: Planet,
}

const ListItem = ({ name, url }) => {
  const matches = url.match(/^https:\/\/swapi\.co\/api\/(\w+)\/(\d+)\/$/);
  const [match, resource, id] = matches;

  return (
    <ListGroup.Item>
      <Link to={`/${resource}/${id}`}>
        {name}
      </Link>
    </ListGroup.Item>);
}

export default class DataContainer extends Component {
  state = {
    data: null,
  }

  fetchData = () => {
    const { resource, id } = this.props.match.params;
    let url = `https://swapi.co/api/${resource}`;
    if (id) {
      url += `/${id}`;
    }
    Axios.get(url)
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.log(error));
  }

  componentDidMount = () => {
    this.fetchData();
  }


  componentDidUpdate = (prevProps) => {
    const { resource, id } = this.props.match.params;

    if (resource !== prevProps.match.params.resource ||
      id !== prevProps.match.params.id) {
      this.setState({ data: null });
      this.fetchData();
    }
  }

  render = () => {
    const { resource, id } = this.props.match.params;
    const { data } = this.state;
    if (!data) {
      return (
        <div className="text-center">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={30000} //3 secs
          />
        </div>
      )
    }
    if (!id && data.results) {
      return (
        <ListGroup>
          {data.results.map((item, index) =>
            <ListItem {...item} key={index} />
          )}
        </ListGroup>
      );
    }
    const ComponentName = componentsByResource[resource] || 'div';
    return (
      <div>
        <ComponentName {...data} />
        <Link to={`/${resource}`}>
          <Button variant="primary">
            Back to list
          </Button>
        </Link>
      </div>
    )
  }
}