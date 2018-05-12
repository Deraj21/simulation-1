import React, { Component } from 'react';
import './App.css';
import './reset.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [
        {
          name: 'Shirt',
          price: 13.99,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0E7FTH0n6XTMox4emx43T1wl6LeWfEDEw4fYtLqVWoR_dFZETwQ'
        },
        {
          name: 'shoes',
          price: 3.24,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvldT6L3Z5eP58xNPN8qkUTvWHkHVMz9FasY1rKBdyGUZCNpfR'
        },
        {
          name: 'Llama',
          price: 0.00,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IERMhXbRC0toqIILJ73uYkLtv3rrrqi9n4FWqDOBj-RMNs6T'
        },
      ]
    };

    this.makeNewItem = this.makeNewItem.bind(this);

  }

  makeNewItem(newItem){
    let productsTemp = this.state.products.slice();
    productsTemp.push(newItem);
    this.setState({ products: productsTemp });
  }

  render() {

    console.log('rendering');
    console.log(this.state.products);

    return (
      <div className="App">
        <Header />
        <div className="body">
          <Dashboard products={ this.state.products } />
          <Form makeNewItem={ this.makeNewItem } />
        </div>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      </div>
    );
  }
}

export default App;
