import React, { Component } from 'react';
import './App.scss';
import Routes from './routes/router';

class App extends Component {

  render(){

    return (
      <div id="webapp">
        <Routes/>
      </div>
    )
  }

}

export default App;
