import React from 'react';

const PLACEHOLDER_URL = "http://via.placeholder.com/300x200";

export default function Product(product_name, price, image_url, product_id, deleteProduct){

  return (
    <div className="product" key={product_id} >
      <img src={image_url} alt={`Product ${product_id}`} onError={ (e) => e.target.src = PLACEHOLDER_URL }/>
      <div>
        <div className="product-info-box">
        <h3>{product_name}</h3>
        <p>$ {parseFloat(Math.round(price * 100) / 100).toFixed(2)}</p> {/* forces 2 decimal places */}
        </div>
        <div className="product-buttons-box">
          <button onClick={ () => deleteProduct(product_id) }>Delete</button>
          <button>Edit</button>
        </div>
      </div>
      
    </div>
  )
}