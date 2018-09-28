import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const PLACEHOLDER_URL =  "http://via.placeholder.com/300x200";
const BASE_URL = "http://localhost:3000/api";

export default class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      image_url: '',
      product_name: '',
      price: 0,
      selectedProductId: null,
      buttonText: "Add to inventory"
    }

    this.clearInput = this.clearInput.bind(this);
    this.handeImageUrlChange = this.handeImageUrlChange.bind(this);
  }

  componentDidMount(){
    console.log(this.state);
    let { id } = this.props.match.params;
    if (!id) return; // if adding new product

    Axios.get(`${BASE_URL}/products`)
      .then( response => {
        let product = response.data.find(item => item.product_id === parseInt(id));
        console.log( product );
        this.setState({
          image_url: product.image_url,
          product_name: product.product_name,
          price: product.price,
          buttonText: "Save changes"
        });
      })
      .catch( err => console.log(err.message));
  }

  clearInput(inputs){
    inputs.forEach( (input) => input.value = "" );
    this.setState({image_url: '', product_name: '', price:''});
  }

  handeImageUrlChange(value){
    this.setState({ image_url: value });
  }

  // componentDidUpdate(oldProps){
  //   if (oldProps.selectedProductId !== this.props.selectedProductId) {
  //     let { product_id, product_name, price, image_url } = this.props.selectedProduct;
  //     this.setState({
  //       product_name: product_name,
  //       price: price,
  //       image_url: image_url,
  //       selectedProductId: product_id,
  //       buttonText: "Save changes"
  //     });
  //   } else if (this.state.buttonText !== "Add to inventory") {
  //     this.setState({ buttonText: "Add to inventory" });
  //   }
  // }

  makeOrEditItem(item){
    let { id } = this.props.match.params;
    let { buttonText } = this.state;

    if (buttonText === "Add to inventory"){ // Add
      Axios.post(`${BASE_URL}/products`, item)
        .then( response => {
          console.log(response.data);
        } )
        .catch( err => {
          console.log(`Axios Error: ${err.message}`)
        } );

    } else if (this.state.buttonText === "Save changes"){ // Edit
      Axios.put(`${BASE_URL}/products/${id}`, item)
        .then(response => console.log(response.data))
        .catch( err => console.log(err.message))
    }

  }

  render() {
    let { image_url, product_name, price, buttonText } = this.state;

    return (
      <div className="form">
        
        <img src={image_url ? image_url : PLACEHOLDER_URL} alt="placeholder" onError={ (e) => e.target.src = PLACEHOLDER_URL }/>

        <h3>Image URL:</h3>
        <input type="text" value={ image_url } onChange={ e => this.handeImageUrlChange( e.target.value ) } />

        <h3>Product Name:</h3>
        <input type="text" value={product_name} onChange={ e => this.setState({ product_name: e.target.value }) } />

        <h3>Price</h3>
        <input type="text" value={price} onChange={ e => this.setState({ price: e.target.value }) } />

        <div className="btn-box">
          <button onClick={ () => this.clearInput( document.querySelectorAll("input") ) } >Cancel</button>
          <Link to="/dashboard"><button onClick={ () => {
            this.makeOrEditItem({image_url, product_name, price});
            this.clearInput( document.querySelectorAll("input") );
            } } >{ buttonText }</button></Link>
        </div>
      </div>
    )
  }
}