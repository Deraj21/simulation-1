import React, { Component } from 'react';

const PLACEHOLDER_URL =  "http://via.placeholder.com/300x200";

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
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  clearInput(inputs){
    inputs.forEach( (input) => input.value = "" );
    this.setState({image_url: '', product_name: '', price:''});
  }

  handeImageUrlChange(value){
    this.setState({ image_url: value });
  }

  componentDidUpdate(oldProps){
    if (oldProps.selectedProductId !== this.props.selectedProductId) {
      let { product_id, product_name, price, image_url } = this.props.selectedProduct;
      this.setState({
        product_name: product_name,
        price: price,
        image_url: image_url,
        selectedProductId: product_id,
        buttonText: "Save changes"
      });
    } else if (this.state.buttonText !== "Add to inventory") {
      this.setState({ buttonText: "Add to inventory" });
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
        <div>
          <button onClick={ () => this.clearInput( document.querySelectorAll("input") ) } >Cancel</button>
          <button onClick={ () => {
            this.props.makeNewItem({image_url, product_name, price});
            this.clearInput( document.querySelectorAll("input") );
            } } >{ buttonText }</button>
        </div>
      </div>
    )
  }
}