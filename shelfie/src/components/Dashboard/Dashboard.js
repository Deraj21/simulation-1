import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {

  render() {
    
    let items = this.props.products.map( (product, index) => Product(product.name, product.price, product.url, index + 1) );


    return (
      <div className="dashboard">
        { items }
      </div>
    )
  }
}