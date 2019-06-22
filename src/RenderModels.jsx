import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModelDetails from './ModelDetails'

class RenderModels extends Component {
  render() {
    return (
      <div>
        {this.props.store.map((model, indx)=> <ModelDetails key={indx} model={model}/>)}
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
