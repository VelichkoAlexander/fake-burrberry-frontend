import React from 'react';
import styled from 'styled-components';
import Menu from '../common/Menu';
import { XsOnly, Xl } from '../common/Responsive';

import hamburger from '../images/hamburger.svg';

import Logo from './Logo';
import Select from './Select';

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

export default props =>
  (<div>
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="row middle-xs">
              <div className="col-xs-2 col-md-4">
                <XsOnly>
                  <Hamburger type="button" />
                </XsOnly>
                <Xl>
                  <Select {...props} />
                </Xl>
              </div>
              <div className="col-xs-8 col-md-4">
                <Logo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
    <div className="container">
      <div className="row">
        <Xl>
          <Menu />
        </Xl>
      </div>
    </div>
  </div>);
