import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      url: '',
      name: '',
      price: 0
    }

    this.cancelInput = this.cancelInput.bind(this);
  }

  cancelInput(){
    let empty = { url: '', name: '', price: 0 };
    this.setState({ empty });
  }

  render() {

    let { url, name, price } = this.state;

    return (
      <div className="form">
        <img src={url ? url : 'http://via.placeholder.com/300x200'} />
        <h3>Image URL:</h3>
        <input type="text" onChange={ e => this.setState({ url: e.target.value }) } />
        <h3>Product Name:</h3>
        <input type="text" onChange={ e => this.setState({ name: e.target.value }) } />
        <h3>Price</h3>
        <input type="text" onChange={ e => this.setState({ price: e.target.value }) } />
        <div>
          <button onClick={ () => this.cancelInput } >Cancel</button>
          <button onClick={ () => this.props.makeNewItem({url, name, price}) } >Add to inventory</button>
        </div>
      </div>
    )
  }
}