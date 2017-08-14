/* eslint-disable react/style-prop-object */

import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

const Link = styled.a`
  display: block;
  margin-bottom: 2rem;
  font-size: 1rem;
  text-decoration: none;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 0.3125rem;
  @media (min-width: 62rem) {
    margin-bottom: 1rem;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-family: "Lora", serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.188rem;
  color: #171717;
  margin-bottom: 0.5625rem;
  @media (min-width: 48rem) {
    margin-bottom: 1rem;
    padding-bottom: 9px;
  }
  @media (min-width: 62rem) {
    padding-bottom: 0;
    margin-bottom: 0.5rem;
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-weight: 600;
  }
`;

const Price = styled.h5`
  margin: 0;
  font-size: 0.75rem;
  color: #999999;
  font-weight: 400;
`;

export default props =>
  (<Link href={props.link}>
    <Img
      src={`${process.env
        .PUBLIC_URL}/images/content/recommend/${props.src}.jpg`}
      alt={props.title}
    />
    <Title>
      {props.title}
    </Title>
    <Price>
      <FormattedNumber
        value={props.price}
        style="currency"
        currency="RUB"
        minimumFractionDigits={0}
      />
    </Price>
  </Link>);
