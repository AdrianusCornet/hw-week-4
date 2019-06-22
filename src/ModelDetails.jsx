import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ModelDetails extends Component {
  static propTypes = {
    model: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.props.model.name}</li>
        </ul>
      </div>
    )
  }
}
