import React from 'react';
import styled from 'styled-components';

import SuggestItem from './SuggestItem';

const Section = styled.section `
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

const Title = styled.h2 `
    display: inline-block;
    margin: 0;
    padding-bottom: 0.5625rem;
    font-size: 1rem;
    line-height: 1.188rem;
    font-weight: 500;
    color: #171717;
    text-transform: uppercase;
    position: relative;
    margin-bottom: 1.5rem;
      &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.0625rem;
      background-color: #171717;
      @media (min-width: 48rem) {
        margin-bottom: 0.5rem;
      }
    }
  `;

export default () => {
  return (
    <Section>
      <div className="container">
        <Title>We recommend</Title>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <SuggestItem link="#" src="Emroided_hooded" title="Emroided Hooded" price="27 000"/>
          </div>
          <div className="col-xs-6 col-md-3">
            <SuggestItem link="#" src="Relaxed_Fit_Stretch_Jeans" title="Relaxed Fit Stretch Jeans" price="22 500"/>
          </div>
          <div className="col-xs-6 col-md-3">
            <SuggestItem link="#" src="Leather_and_House_Check" title="Leather and House Check" price="120 000 "/>
          </div>
          <div className="col-xs-6 col-md-3">
            <SuggestItem link="#" src="Leather_Wingtip_Check" title="Leather Wingtip Check" price="46 000 "/>
          </div>
        </div>
      </div>
    </Section>
  );
}