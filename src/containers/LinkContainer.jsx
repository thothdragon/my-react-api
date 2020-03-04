import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { parseSwapiUrl } from '../utils';

export default class LinkContainer extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    const { url } = this.props;

    Axios.get(url)
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.log(error))
  }

  render = () => {
    const { url } = this.props;
    const { data } = this.state;

    if (!data) {
      return <span>Loading...</span>
    }

    const [resource, id] = parseSwapiUrl(url);

    return (
      <Link to={`/${resource}/${id}`}>
        {data.name}
      </Link>
    )
  }
}