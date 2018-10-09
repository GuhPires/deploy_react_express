import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: ''
    }
  }
  
  componentWillMount(){
    fetch('/api').then(res => {
      if(!res.ok){
        throw res.status;
      }
      return res.json();
    }).then(res => this.setState({ data: res.express })).catch(err => console.log('err: ', err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h2>{this.state.data}</h2>
        </header>
      </div>
    );
  }
}

export default App;
