import React from 'react';
import styled from 'styled-components';

import { XsOnly } from '../common/Responsive';

import Menu from './Menu';
import FooterSelect from './FooterSelect';
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
    padding-bottom: 3rem;
  }
`;

const countries = [
  {
    name: 'Russia',
    value: 'ru',
  },
  {
    name: 'United Kingdom',
    value: 'en',
  },
];

const shippingCountry = [
  {
    name: 'Russian Federation',
    value: 'ru',
  },
  {
    name: 'United Kingdom',
    value: 'en',
  },
];

export default props =>
  (<Footer>
    <Menu />
    <Links>
      <div className="container">
        <FooterSelect
          {...props}
          label="Shipping country"
          values={shippingCountry}
        />
        <FooterSelect {...props} label="Language" values={countries} />
      </div>
    </Links>
    <XsOnly>
      <Help />
    </XsOnly>
  </Footer>);
