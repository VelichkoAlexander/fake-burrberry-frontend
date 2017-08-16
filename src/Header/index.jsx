import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.svg';
import hamburger from '../images/hamburger.svg';

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
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
  width: 10.375rem;
  height: 0.75rem;
  @media (min-width: 62rem) {
    width: 13.8125rem;
    height: 1rem;
  }
`;

const Hamburger = styled.button `
  display: block;
  align-self: center;
  justify-self: flex-start;
  width: 1rem;
  height: 0.625rem;
  border:0;
  background-color: transparent;
  background:url(${hamburger}) center no-repeat;
`;

const Wrapper = styled.a `
  margin: auto;
`;

export default () =>
  (<Header>
    <Hamburger type="button" />
    <Wrapper href="/">
      <Logo src={logo} alt="logo" />
    </Wrapper>
  </Header>
  );
