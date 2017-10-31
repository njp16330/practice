import React, { Component } from 'react';
import './App.css';
import Comments from './components/Comments';

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="practice-react">
        <h3>Practice React</h3>   
        <Comments />     
      </div>
    );
  }
}

export default App;