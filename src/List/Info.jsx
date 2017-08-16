import React from 'react';
import styled from 'styled-components';

import Menu from './InfoMenu';

const Wraper = styled.div `
    background-color: #f3f3f3;
    padding-top: 2rem;
    color: #171717;
`;

const Title = styled.h1 `
    margin: 0;
    margin-bottom: 1rem;
    font-family: "Lora", serif;
    font-size: 1.625rem;
    line-height: 2rem;
    font-weight: 400;
`;

const Content = styled.div `
    margin-bottom: 0.5rem;
    font-size: 0.75em;
    line-height: 1.25rem;
    & a {
      color: inherit;
      text-decoration: none;
    }
`;

export default () =>
  (
    <Wraper>
      <div className="container">
        <Title>Men’s clothing</Title>
        <Content>Explore our menswear collection for the season.
                 Sculptural knitwear, <a href="/sweatshirts">sweatshirts</a> sweatshirts,
                 artist overalls and oversized cabans feature alongside
                 our signature trench coat in both heritage.
        </Content>
        <Menu />
      </div>
    </Wraper>
  );
