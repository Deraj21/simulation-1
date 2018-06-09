import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {

  render() {
    
    let items = this.props.products.map( product => {
      let { product_name, price, image_url, product_id } = product;
      let { deleteProduct } = this.props;
      return Product(product_name, price, image_url, product_id, deleteProduct);
    } );


    return (
      <div className="dashboard">
        { items }
      </div>
    )
  }
}