import React from 'react';
import styled from 'styled-components';

import { XsOnly } from '../common/Responsive';

import Menu from './Menu';
import FooterSelect from './Select';
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

export default () =>
  (<Footer>
    <Menu />
    <Links>
      <div className="container">
        <FooterSelect
          label="Shipping country"
          options={['Russian Federation', 'United Kingdom']}
        />
        <FooterSelect label="Language" options={['Russian', 'English']} />
      </div>
    </Links>
    <XsOnly>
      <Help />
    </XsOnly>
  </Footer>);
