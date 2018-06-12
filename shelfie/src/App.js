import React, { Component } from 'react';
import './App.css';
import './reset.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import axios from 'axios';

const BASE_URL = "http://localhost:3000/api";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [],
      selectedProduct: null
    };

    this.makeNewItem = this.makeNewItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  makeNewItem(newItem){
    axios.post(`${BASE_URL}/products`, newItem)
      .then( response => {
        this.setState({ products: response.data })
      } )
      .catch( err => {
        console.log(`Axios Error: ${err.message}`)
      } );
  }

  deleteItem(id){
    console.log(`Deleting product[${id}] from db`);
    axios.delete(`${BASE_URL}/products/${id}`)
      .then( response => {
        this.setState({ products: response.data })
      })
      .catch( err => console.log(`Axios Error: ${err.message}`) );
  }

  editItem(item){
    this.setState({
      selectedProduct: item,
      selectedProductId: item.product_id
     });
  }

  componentDidMount(){
    axios.get(`${BASE_URL}/products`)
      .then( response => {
        this.setState({ products: response.data});
      })
      .catch( err => console.log(`Axios Error: ${err.message}`) );
  }

  render() {
    let { products, selectedProduct } = this.state;

    return (
      <div className="App">
        <Header />
        <div className="body">
          <Dashboard products={ products } deleteProduct={ this.deleteItem } editProduct={ this.editItem }/>
          <Form makeNewItem={ this.makeNewItem } selectedProduct={selectedProduct} selectedProductId={ selectedProduct ? selectedProduct.product_id : null } />
        </div>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      </div>
    );
  }
}

export default App;
