import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
  constructor(props){
    super(props);

  }

  render() {
    
    let items = this.props.products.map( product => Product(product.name, product.price, product.url) );

    return (
      <div className="dashboard">
        { items }
      </div>
    )
  }
}