import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <Dashboard />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;


/*
Run npm i axios --save. This is the only package you need to add for our front end.
*/