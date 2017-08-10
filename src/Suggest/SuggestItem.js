import React from 'react';
import styled from 'styled-components';

export default (props) => {
  
  const Link = styled.a `
   display: block;
   margin-bottom: 2rem;
   font-size: 1rem;
   text-decoration: none;
  `;
  
  const Img = styled.img `
   width: 100%;
   height: auto;
   margin-bottom: 0.3125rem;
  `;
  
  const Title = styled.h3 `
   margin: 0;
   font-family: "Lora", serif;
   font-weight: 400;
   font-size: 1rem;
   line-height: 1.188rem;
   color: #171717;
   margin-bottom: 0.5625rem;
      @media only screen and (min-width: 768px) {
    margin-bottom: 1rem;
    padding-bottom: 9px;
   }
  `;
  
  const Price = styled.h5 `
   margin: 0;
   font-size: 0.75rem;
   color: #999999;
   font-weight: 400;
  `;
  
  return (
    <Link href={props.link}>
      <Img src={`/images/content/recommend/${props.src}.jpg`} alt={props.title}/>
      <Title>{props.title}</Title>
      <Price>{props.price} руб</Price>
    </Link>
  )
};