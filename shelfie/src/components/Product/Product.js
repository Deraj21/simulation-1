import React from 'react';

export default function Product(name, price, picURL){

  return (
    <div className="product">
      <img src={picURL} />
      <p>{name}</p>
      <p>$ {parseFloat(Math.round(price * 100) / 100).toFixed(2)}</p> {/* forces 2 decimal places */}
      
    </div>
  )
}