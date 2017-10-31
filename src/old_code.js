import React, { Component } from 'react';
import './App.css';
import Icons from './components/Icons';

class App extends Component {
  constructor(){
    super();
    this.state = {icons: []};
  }
  componentDidMount(){
    this.setState({
      icons: [
        {name: 'icon1.png'},{name: 'icon2.png'},{name: 'icon3.png'}
      ]
    })
  }
  render() {
    return (
      <div className="practice-react">
        <h3>Practice React</h3>
        <Icons icons={this.state.icons} />
      </div>
    );
  }
}

export default App;
