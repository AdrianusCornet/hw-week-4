import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModelDetails from './ModelDetails'

class RenderModels extends Component {
  render() {
    return (
      <div>
        {this.props.store.map(a=> <ModelDetails/>)}
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
