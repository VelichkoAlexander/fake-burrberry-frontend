import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const Wraper = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media (min-width: 48rem) {
    padding-top: 4rem;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  font-family: "Lora", serif;
  font-size: 1rem;
  line-height: 1.1875rem;
  @media (min-width: 48rem) {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

export default () =>
  (<Wraper>
    <div className="container">
      <Title>Heritage Trench Coats</Title>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card
            link="/products/1"
            src="61209850e00103530a1f7fcc7253515330cfaea8"
            title="The Westminster – Long Heritage Trench Coat"
            price={27000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            link="/products/1"
            src="61209850e00103530a1f7fcc7253515330cfaea8"
            title="The Westminster – Long Heritage Trench Coat"
            price={27000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            link="/products/1"
            src="https://assets.burberry.com/is/image/Burberryltd/61209850e00103530a1f7fcc7253515330cfaea8.jpg"
            title="The Westminster – Long Heritage Trench Coat"
            price={27000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            link="/products/1"
            src="https://assets.burberry.com/is/image/Burberryltd/61209850e00103530a1f7fcc7253515330cfaea8.jpg"
            title="The Westminster – Long Heritage Trench Coat"
            price={27000}
          />
        </div>
      </div>
    </div>
  </Wraper>);
