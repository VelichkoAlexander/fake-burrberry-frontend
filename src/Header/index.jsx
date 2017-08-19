import React from 'react';
import styled from 'styled-components';
import { XsOnly, Xl } from '../common/Responsive';

import hamburger from '../images/hamburger.svg';
import arrow from '../images/arrow.svg';
import Logo from './Logo';

const Header = styled.header`
  position: relative;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  line-height: 1rem;
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

const Hamburger = styled.button`
  display: block;
  padding: 0;
  align-self: center;
  justify-self: flex-start;
  width: 1rem;
  height: 0.625rem;
  border: 0;
  background-color: transparent;
  background: url(${hamburger}) center no-repeat;
`;

const Country = styled.button`
  padding: 0;
  padding-right: 1.25rem;
  border: none;
  position: relative;
  background-color: transparent;
  font-size: 0.75rem;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
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
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="row middle-xs">
            <div className="col-xs-2 col-md-4">
              <XsOnly>
                <Hamburger type="button" />
              </XsOnly>
              <Xl>
                <Country>Shopping in: United Kingdom (£)</Country>
              </Xl>
            </div>
            <div className="col-xs-8 col-md-4">
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Header>);
