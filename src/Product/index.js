import React from 'react';
import styled from 'styled-components';

import Header from './Header';
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
        <div className="col-md-12 col-lg-4">
          <InfoBlock title="Description" />
        </div>
      </div>
      <Line />
      <div className="container">
        <InfoBlock title="Delivery" hide />
      </div>
      <Line />
      <Delivery />
    </Product>
  );
};
