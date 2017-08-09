import React from 'react';

export default (props) => {
  return (
    <picture>
      <source media="(min-width:47.5rem)" srcSet={`images/content/product/tablet-${props.nameItem}.jpg 1x,
                          images/content/product/tablet-${props.nameItem}@2x.jpg 2x,
                          images/content/product/tablet-${props.nameItem}@3x.jpg 3x`}/>
      <source media="(min-width:40rem)" srcSet={`images/content/product/mobile-${props.nameItem} 1x,
                          images/content/product/mobile-${props.nameItem}@2x.jpg 2x,
                          images/content/product/mobile-${props.nameItem}@3x.jpg 3x`}/>
      <img className="product-image" src={`images/content/product/mobile-${props.nameItem}.jpg`}
           alt={props.alt}/>
    </picture>
  )
};