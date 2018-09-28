import React, { Component } from 'react';
import './App.css';
import './reset.css';
import Header from './components/Header/Header';
import routes from './routes';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <div className="body">
          { routes }
        </div>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      </div>
    );
  }
}

export default App;
