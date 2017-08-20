import React from 'react';
import styled from 'styled-components';

import arrow from '../../images/arrow.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: -0.5rem;
  overflow: hidden;
  @media (min-width: 48rem) {
    margin-right: 0;
  }
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  flex-wrap: nowrap;
  justify-content: space-between;
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
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
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
    background-size: cover;
  }
  @media (min-width: 48rem) {
    margin-right: 3rem;
  }
`;
const SortButton = styled(Button)`
  @media (min-width: 48rem) {
    margin-right: 0;
    padding-right: 1.25rem;
    &::after {
      right: 0;
    }
  }
`;

export default () =>
  (<Wrapper>
    <Inner>
      <Filters>
        <Button type="button">Category</Button>
        <Button type="button">Colour</Button>
        <Button type="button">Size</Button>
      </Filters>
      <SortButton type="button">Sort by price</SortButton>
    </Inner>
  </Wrapper>);
