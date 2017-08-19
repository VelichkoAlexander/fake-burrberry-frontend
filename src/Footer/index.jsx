import React from 'react';
import styled from 'styled-components';

import { XsOnly } from '../common/Responsive';

import Menu from './Menu';
import Help from './Help';

const Links = styled.div`
  margin-bottom: 1.5rem;
  @media (min-width: 48rem) {
    margin-bottom: 0;
  }
`;

const Footer = styled.footer`
  padding: 2rem 0;
  background-color: #f3f3f3;
  display: flex;
  margin-top: auto;
  flex-direction: column;
  @media (min-width: 62rem) {
    padding-top: 4rem;
    padding-bottom: 0;
  }
`;

const Button = styled.button`
  display: block;
  margin-bottom: 1rem;
  padding: 0;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1rem;
  font-size: 0.75rem;
  color: #999999;
  text-decoration: none;
  text-align: left;
  border: 0;
  background-color: transparent;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 48rem) {
    display: inline;
    margin-right: 1.5rem;
    margin-bottom: 2rem;
    line-height: 1rem;
    border: 0;
  }
  @media (min-width: 62rem) {
    margin-bottom: 4rem;
    margin-right: 3rem;
  }
`;
const Value = styled.span`color: #171717;`;

export default () =>
  (<Footer>
    <Menu />
    <Links>
      <div className="container">
        <Button type="button">
          Shipping country: <Value>Russian Federation</Value>
        </Button>
        <Button type="button">
          Language: <Value>English</Value>
        </Button>
      </div>
    </Links>
    <XsOnly>
      <Help />
    </XsOnly>
  </Footer>);
