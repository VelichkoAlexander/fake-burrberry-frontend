import React from 'react';
import styled from 'styled-components';

import { Xs } from '../common/responsive';

import Header from './Header';
import InfoImage from './InfoImage';
import InfoBlock from './InfoBlock';
import Delivery from './Delivery';

const Product = styled.section`padding-top: 1.5rem;`;

const Line = styled.hr`
  margin: 0;
  border: 0;
  border-top: solid 0.0625rem #c6c6c6;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export default () => {
  return (
    <Product>
      <Header />
      <Line />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <InfoBlock title="Description" />
          </div>
          <div className="col-lg-8">
            <InfoImage nameItem="1" />
          </div>
          <div className="col-lg-4">
            <InfoImage nameItem="2" margin="2" />
          </div>
          <div className="col-lg-4">
            <InfoImage nameItem="3" margin="6" />
          </div>
          <div className="col-lg-4">
            <InfoImage nameItem="4" />
          </div>
        </div>
      </div>
      <Line />
      <div className="container">
        <Xs>
          <InfoBlock title="Delivery" />
        </Xs>
      </div>
      <Line />
      <Delivery />
    </Product>
  );
};
