import React from 'react';

export default function Product(name, price, url){

  return (
    <div className="product">
      <img src={url} />
      <div>
        <h3>{name}</h3>
        <p>$ {parseFloat(Math.round(price * 100) / 100).toFixed(2)}</p> {/* forces 2 decimal places */}
      </div>
      
    </div>
  )
}