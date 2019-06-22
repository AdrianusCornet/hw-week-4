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
    const { name,manufacturer, year, origin } = this.props.model
    return (
      <div>
        <ul>
          <li>Name: {name}</li>
          <li>Manufacturer: {manufacturer}</li>
          <li>Year: {year}</li>
          <li>Origin: {origin}</li>
        </ul>
      </div>
    )
  }
}
