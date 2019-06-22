import React from 'react';
import './App.css';

const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

class App extends React.Component {
  state = {
    value: ''
  }

  updateSelection = (event) => {
    this.setState({ value: event.target.value })
  }
  clickHandeler = (event) => {
    console.log('click')
  }

  addModel = (model) =>{
    this.dispach({ type: 'TEST'})
  }

  makeOptions = (computer, index) => {
    return (
      <option key={index} value={computer.name}>{computer.name} ({computer.year})</option>
    )
  }

  render() {
    return (
      <div className="App" >
        <select onChange={this.updateSelection} value={this.state.value}>
          <option value=''>-- Pick a model --</option>
          {data.map(this.makeOptions)}
        </select>
        <button onClick={this.clickHandeler}>Add</button>
      </div>
    );
  }
}

export default App;
