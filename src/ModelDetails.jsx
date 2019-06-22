import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ModelDetails extends Component {
  static propTypes = {
    model: PropTypes.shape({
      name: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      origin: PropTypes.isRequired
    })
  }

  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.props.model.name}</li>
          <li>Manufacturer: {this.props.model.manufacturer}</li>
          <li>Year: {this.props.model.year}</li>
          <li>Origin: {this.props.model.origin}</li>
        </ul>
      </div>
    )
  }
}
