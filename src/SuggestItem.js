import React from 'react';
export default (props) => {
  return (
    <a className="suggest-link" href={props.link} >
      <img className="suggest-image" src={props.src} alt={props.title}/>
      <h3 className="suggest-item-title">{props.title}</h3>
      <h5 className="suggest-price">{props.price} руб</h5>
    </a>
  )
};