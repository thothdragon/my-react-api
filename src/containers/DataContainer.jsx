import React, { Component } from 'react';
import Axios from 'axios';
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
      return <div>Loading...</div>
    }

    return <Character
      name={data.name}
      gender={data.gender}
      birth_year={data.birth_year}
      edited={data.edited}
    />
      ;
  }
}