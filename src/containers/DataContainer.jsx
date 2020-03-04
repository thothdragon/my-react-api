import React, { Component } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
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
    const { resource } = this.props;
    // Axios.get('https://swapi.co/api/people/1')
    Axios.get(`https://swapi.co/api/${resource}/1/`)
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.log(error))

  }

  render = () => {
    const { resource } = this.props;
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

    const ComponentName = componentsByResource[resource] || 'div';

    return <ComponentName {...data} />

  }
}