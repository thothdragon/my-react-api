import React, { Component } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import Character from '../components/Character';

export default class DataContainer extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    Axios.get('https://swapi.co/api/people/1')
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.log(error))

  }

  render = () => {

    const { data } = this.state;

    if (!data) {
      return <Loader type="Puff" color="#somecolor" height={80} width={80} />
    }

    return <Character
      {...data}
    />
      ;
  }
}