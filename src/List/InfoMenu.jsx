import React from 'react';
import styled from 'styled-components';

import arrow from '../images/arrow.svg';

const Wraper = styled.div `
    display: flex;
    align-items: center;
`;

const Inner = styled.div `
    display: flex;
    width: 260px;
    margin-left: 2rem;
    overflow-x: auto;
`;

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
    font-size: 0.75rem;
    line-height: 1rem;
    white-space: nowrap
`;

export default () =>
  (<Wraper>
    <Title>Refine by</Title>
    <Inner>
      <Button type="button">Category</Button>
      <Button type="button">Colour</Button>
      <Button type="button">Size</Button>
      <Button type="button">Sort by price</Button>
    </Inner>
  </Wraper>
  );
