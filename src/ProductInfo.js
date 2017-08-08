import React from 'react';

export default (props) => {
  return (
    <div className="product-info">
      <h2 className="product-price">{props.price} руб.</h2>
      <p className="product-id">Item {props.id}</p>
    </div>
  )
}