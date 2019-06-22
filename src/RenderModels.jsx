import React, { Component } from 'react';
import { connect } from 'react-redux';

class RenderModels extends Component {
  render() {
    return (
      <div>
        <h1>test</h1>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    store
  }
}

export default connect(mapStateToProps)(RenderModels);
