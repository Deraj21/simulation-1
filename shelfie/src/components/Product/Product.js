import React from 'react';

const PLACEHOLDER_URL = "http://via.placeholder.com/300x200";

export default function Product(name, price, url, index){

  return (
    <div className="product" key={index} >
      <img src={url} alt={`Product ${index}`} onError={ (e) => e.target.src = PLACEHOLDER_URL }/>
      <div>
        <h3>{name}</h3>
        <p>$ {parseFloat(Math.round(price * 100) / 100).toFixed(2)}</p> {/* forces 2 decimal places */}
      </div>
      
    </div>
  )
}