import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


const PLACEHOLDER_URL = "http://via.placeholder.com/300x200";
const BASE_URL = "http://localhost:3000/api";

export default class Product extends Component {
  
  deleteItem(id){
    console.log(`Deleting product[${id}] from db`);
    Axios.delete(`${BASE_URL}/products/${id}`)
      .then( response => {
        this.setState({ products: response.data })
      })
      .catch( err => console.log(`Axios Error: ${err.message}`) );
  }

  render(){
    let { product_name, price, image_url, product_id } = this.props;

    return (
      <div className="product" key={product_id} >
        <img src={image_url} alt={`Product ${product_id}`} onError={ (e) => e.target.src = PLACEHOLDER_URL }/>
        <div>
          <div className="product-info-box">
          <h3>{product_name}</h3>
          <p>$ {parseFloat(Math.round(price * 100) / 100).toFixed(2)}</p> {/* forces 2 decimal places */}
          </div>
          <div className="product-buttons-box">
            <Link to="dashboard"><button onClick={ () => this.deleteItem(product_id) }>Delete</button></Link>
            <Link to={`/edit/${product_id}`}><button>Edit</button></Link>
          </div>
        </div>
        
      </div>
    )
  }
}