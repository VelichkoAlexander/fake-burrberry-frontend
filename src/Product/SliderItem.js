import React from 'react';
import styled from 'styled-components';

export default (props) => {
  
  const Img = styled.img `
   display: block;
  `;
  
  return (
    <picture>
      <source media="(min-width: 48rem)" srcSet={`images/content/product/tablet-${props.nameItem}.jpg 1x,
                          images/content/product/tablet-${props.nameItem}@2x.jpg 2x,
                          images/content/product/tablet-${props.nameItem}@3x.jpg 3x`}/>
      <source media="(min-width: 48rem)" srcSet={`images/content/product/mobile-${props.nameItem} 1x,
                          images/content/product/mobile-${props.nameItem}@2x.jpg 2x,
                          images/content/product/mobile-${props.nameItem}@3x.jpg 3x`}/>
      <Img src={`images/content/product/mobile-${props.nameItem}.jpg`}
           alt={props.alt}/>
    </picture>
  )
};