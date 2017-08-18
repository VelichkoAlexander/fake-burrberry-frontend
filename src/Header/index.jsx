import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { XsOnly, Xl } from '../common/Responsive';

import logo from '../images/logo.svg';
import hamburger from '../images/hamburger.svg';
import arrow from '../images/arrow.svg';

const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
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
  height: 0.75rem;
  @media (min-width: 48rem) {
    height: 1rem;
  }
`;

const Hamburger = styled.button`
  display: block;
  align-self: center;
  justify-self: flex-start;
  position: absolute;
  left: 8px;
  width: 1rem;
  height: 0.625rem;
  border: 0;
  background-color: transparent;
  background: url(${hamburger}) center no-repeat;
`;

const NavLink = styled(Link)`
    margin: auto;
`;

const Country = styled.button`
  padding: 0;
  padding-right: 1.25rem;
  position: absolute;
  left: 8px;
  border: none;
  background-color: transparent;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  color: #999999;
  white-space: nowrap;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0.75rem;
    height: 0.375rem;
    transform: translateY(-50%);
    background: url(${arrow}) center no-repeat;
  }
`;

export default () =>
  (<Header>
    <XsOnly>
      <Hamburger type="button" />
    </XsOnly>
    <Xl>
      <Country>Shopping in: United Kingdom (£)</Country>
    </Xl>
    <NavLink to="/">
      <Logo src={logo} alt="logo" />
    </NavLink>
  </Header>);
