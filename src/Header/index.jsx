import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.svg';

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: solid 0.0625rem #c6c6c6;
  @media (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  @media (min-width: 62rem) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0;
  }
`;

const Logo = styled.img`
  display: block;
  @media (min-width: 62rem) {
    width: 13.8125rem;
    height: 1rem;
  }
`;

export default () =>
  <Header>
    <a href="/">
      <Logo src={logo} alt="logo" />
    </a>
  </Header>;
