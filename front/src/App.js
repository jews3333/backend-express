import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import Routes from './routes/router';


class App extends Component {

  render(){

    return (
      <div id="app">
        <Header/>
        <Routes/>
      </div>
    )
  }

}

export default App;
