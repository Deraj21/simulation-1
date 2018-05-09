import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render() {

    return (
      <div className="dashboard">
        Dashboard
        <Product />
        <Product />
        <Product />
      </div>
    )
  }
}