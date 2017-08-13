import React from 'react';
import styled from 'styled-components';

import { Sm } from '../common/responsive';

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
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

export default props => {
  return (
    <Info>
      <Price>
        {props.price} руб.
      </Price>
      <Sm>
        <Id>
          Item {props.id}
        </Id>
      </Sm>
    </Info>
  );
};
