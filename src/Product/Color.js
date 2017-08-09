import React from 'react';

export default (props) => {
  return (
    <div className="color ">
      <p className="color-actual">Colour: {props.currentColor}</p>
      <div className="color-options">
        <button className="color-btn color-btn--black" type="button">Color black</button>
        <button className="color-btn color-btn--honey color-btn--active" type="button">Color honey</button>
      </div>
    </div>
  )
}