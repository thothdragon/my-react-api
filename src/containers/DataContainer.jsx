import React, { Component } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import { ListGroup } from 'react-bootstrap';
import { Character, Planet } from '../components';

const componentsByResource = {
  people: Character,
  planets: Planet,
}

export default class DataContainer extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    const { resource, id } = this.props.match.params;
    let url = `https://swapi.co/api/${resource}`;
    if (id) {
      url += `/${id}`;
    }
    Axios.get(url)
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.log(error));
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
    if (!id) {
      return (
        <ListGroup>
          {data.results.map(item =>
            <ListGroup.Item>{item.name}</ListGroup.Item>
          )}
        </ListGroup>
      );
    }
    const ComponentName = componentsByResource[resource] || 'div';
    return <ComponentName {...data} />
  }
}