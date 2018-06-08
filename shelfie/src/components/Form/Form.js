import React, { Component } from 'react';

const PLACEHOLDER_URL =  "http://via.placeholder.com/300x200";

export default class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      url: '',
      name: '',
      price: 0
    }

    this.clearInput = this.clearInput.bind(this);
    this.handeImageUrlChange = this.handeImageUrlChange.bind(this);
  }

  clearInput(inputs){
    inputs.forEach( (input) => input.value = "" );
    this.setState({url: '', name: '', price:''});
  }

  handeImageUrlChange(value){
    this.setState({ url: value });
  }

  render() {

    let { url, name, price } = this.state;

    return (
      <div className="form">
        <img src={url ? url : PLACEHOLDER_URL} alt="placeholder" onError={ (e) => e.target.src = PLACEHOLDER_URL }/>
        <h3>Image URL:</h3>
        <input type="text" onChange={ e => this.handeImageUrlChange( e.target.value ) } />
        <h3>Product Name:</h3>
        <input type="text" onChange={ e => this.setState({ name: e.target.value }) } />
        <h3>Price</h3>
        <input type="text" onChange={ e => this.setState({ price: e.target.value }) } />
        <div>
          <button onClick={ () => this.clearInput( document.querySelectorAll("input") ) } >Cancel</button>
          <button onClick={ () => {
            this.props.makeNewItem({url, name, price});
            this.clearInput( document.querySelectorAll("input") );
            } } >Add to inventory</button>
        </div>
      </div>
    )
  }
}