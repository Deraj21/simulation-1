import React, { Component } from 'react';
import Product from '../Product/Product';
import Axios from 'axios';

const BASE_URL = "http://localhost:3000/api";

class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: []
    }
  }

  componentDidMount(){
    Axios.get(`${BASE_URL}/products`)
      .then( response => {
        this.setState({ products: response.data});
      })
      .catch( err => console.log(`Axios Error: ${err.message}`) );
  }

  render() {
    let { products } = this.state;
    let items = products.map( product => {
      let { product_name, price, image_url, product_id } = product;
      return <Product product_name={product_name} price={price} image_url={image_url} product_id={product_id} />
    } );


    return (
      <div className="dashboard">
        { items }
      </div>
    )
  }
}

export default Dashboard;