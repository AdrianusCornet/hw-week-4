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
  makeOptions = (computer) => {
    return (
      <option value={computer.name}>{computer.name}({computer.year})</option>
    )
  }

  render() {
    return (
      <div className="App">
        <select>
          <option value=''>-- Pick a model --</option>
          {data.map(this.makeOptions)}
        </select>

        <Test val='test val' />
      </div>
    );
  }
}

class Test extends React.Component {
  render() {
    return <h1>{this.props.val}</h1>
  }
}

export default App;
