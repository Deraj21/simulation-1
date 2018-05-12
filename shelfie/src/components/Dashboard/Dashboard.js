import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [
        {
          name: 'Shirt',
          price: 13.99,
          picURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0E7FTH0n6XTMox4emx43T1wl6LeWfEDEw4fYtLqVWoR_dFZETwQ'
        },
        {
          name: 'shoes',
          price: 3.24,
          picURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvldT6L3Z5eP58xNPN8qkUTvWHkHVMz9FasY1rKBdyGUZCNpfR'
        },
        {
          name: 'Llama',
          price: 0.00,
          picURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IERMhXbRC0toqIILJ73uYkLtv3rrrqi9n4FWqDOBj-RMNs6T'
        },
      ]
    }
  }

  render() {
    
    let items = this.state.products.map( product => Product(product.name, product.price, product.picURL) );

    return (
      <div className="dashboard">
        { items }
      </div>
    )
  }
}