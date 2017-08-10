import React from 'react';
import styled from 'styled-components';

export default () => {
  const Title = styled.h2 `
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.188rem;
    font-weight: bold;
    text-align: center;
    background: transparent;
    color: #171717;
    @media (min-width: 48rem) {
      display: none;
    }
  `;
  
  const Link = styled.a `
    display: block;
    font-family: "Lora", serif;
    font-size: 0.875rem;
    line-height: 1.063rem;
    font-style: italic;
    text-decoration: none;
    color: #171717;
    text-align: center;
    @media (min-width: 48rem) {
      display: none;
    }
  `;
  return (
    <div>
      <Title>Need help?</Title>
      <Link href="javascript:void(0);">Find out more and contact us</Link>
    </div>
  )
}