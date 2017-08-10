import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.svg';

export default () => {
  
  const Header = styled.header `
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: solid 0.0625rem #c6c6c6;
    @media only screen and (min-width: 768px) {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
   }
  `;
  
  const Logo = styled.img `
   display: block;
  `;
  
  return (
    <Header>
      <a href="/">
        <Logo src={logo} alt="logo"/>
      </a>
    </Header>
  )
};

