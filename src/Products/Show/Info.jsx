/* eslint-disable react/style-prop-object */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

import { Sm } from '../../common/Responsive';

const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media (min-width: 48rem) {
    padding: 0;
    margin-bottom: 1rem;
  }
  @media (min-width: 62rem) {
    margin-bottom: 3rem;
  }
`;
const Price = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  color: #171717;
  line-height: 1.188rem;
`;

const Id = styled.p`
  margin-top: 0.125rem;
  margin-bottom: 0;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;

export default function Info(props) {
  return (
    <Wraper>
      <Price>
        <FormattedNumber
          value={props.price}
          style="currency"
          currency="RUB"
          minimumFractionDigits={0}
        />
      </Price>
      <Sm>
        <Id>Item {props.id}</Id>
      </Sm>
    </Wraper>
  );
}

Info.propTypes = {
  price: PropTypes.number,
  id: PropTypes.number,
};

Info.defaultProps = {
  price: 0,
  id: 1,
};
