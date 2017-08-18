import React from 'react';
import styled from 'styled-components';
import { XsOnly } from '../../common/Responsive';

import arrow from '../../images/arrow.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: -0.5rem;
  overflow: hidden;
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  flex-wrap: nowrap;
  justify-content: space-between;
  @media (min-width: 48rem) {
    & > button {
      margin-right: 0;
      padding-right: 1.25rem;
      &::after {
        right: 0;
      }
    }
  }
`;
const Filters = styled.div`display: flex;`;

const Button = styled.button`
  padding: 0;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 1.25rem;
  margin-right: 1rem;
  position: relative;
  border: none;
  background-color: transparent;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: #171717;
  white-space: nowrap;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0.75rem;
    height: 0.375rem;
    transform: translateY(-50%);
    background: url(${arrow}) center no-repeat;
  }
`;

const Title = styled.div`
  margin-right: 2rem;
  font-size: 0.75rem;
  line-height: 1rem;
  white-space: nowrap;
`;

export default () =>
  (<Wrapper>
    <XsOnly>
      <Title>Refine by</Title>
    </XsOnly>
    <Inner>
      <Filters>
        <Button type="button">Category</Button>
        <Button type="button">Colour</Button>
        <Button type="button">Size</Button>
      </Filters>
      <Button type="button">Sort by price</Button>
    </Inner>
  </Wrapper>);
