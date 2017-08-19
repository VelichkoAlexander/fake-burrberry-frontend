import React from 'react';
import styled from 'styled-components';

import Card from '../ProductCard';

const Section = styled.section`
  padding-top: 3rem;
  padding-bottom: 1rem;
  @media (min-width: 48rem) {
    padding: 0;
    margin: 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  display: inline-block;
  margin: 0;
  font-size: 1rem;
  line-height: 1.188rem;
  font-weight: 500;
  color: #171717;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 1rem;
  @media (min-width: 62rem) {
    display: block;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export default () =>
  (<Section>
    <div className="container">
      <Title>We recommend</Title>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card
            src="995466e7e1113f3b2f6484ceb090072e1c9062dc"
            title="The Westminster – Long Heritage Trench Coat"
            type="Relaxed fit"
            colors={3}
            price={120000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            src="995466e7e1113f3b2f6484ceb090072e1c9062dc"
            title="The Westminster – Long Heritage Trench Coat"
            type="Relaxed fit"
            colors={3}
            price={120000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            src="995466e7e1113f3b2f6484ceb090072e1c9062dc"
            title="The Westminster – Long Heritage Trench Coat"
            type="Relaxed fit"
            colors={3}
            price={120000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            src="995466e7e1113f3b2f6484ceb090072e1c9062dc"
            title="The Westminster – Long Heritage Trench Coat"
            type="Relaxed fit"
            colors={3}
            price={120000}
          />
        </div>
      </div>
    </div>
  </Section>);
