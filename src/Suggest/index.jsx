import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const Section = styled.section`
  padding-top: 3rem;
  padding-bottom: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
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
            link="#"
            src="Emroided_hooded"
            title="Emroided Hooded"
            price={27000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            link="#"
            src="Relaxed_Fit_Stretch_Jeans"
            title="Relaxed Fit Stretch Jeans"
            price={22500}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            link="#"
            src="Leather_and_House_Check"
            title="Leather and House Check"
            price={120000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            link="#"
            src="Leather_Wingtip_Check"
            title="Leather Wingtip Check"
            price={46000}
          />
        </div>
      </div>
    </div>
  </Section>);
