import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Help from './Help';

const Links = styled.div`
  margin-bottom: 1.5rem;
  @media (min-width: 48rem) {
    margin-bottom: 0;
  }
`;

const Footer = styled.footer`
  padding: 2rem 0.5rem;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  display: block;
  margin-bottom: 1rem;
  padding: 0;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1rem;
  font-size: 0.75rem;
  color: #999999;
  text-decoration: none;
  text-align: left;
  border: 0;
  background-color: transparent;
  &::last-child {
    margin-bottom: 0;
  }
  @media only screen and (min-width: 768px) {
    display: inline;
    margin-right: 1.25rem;
    margin-bottom: 2rem;
    line-height: 1rem;
    border: 0;
  }
`;

export default () => {
  return (
    <Footer>
      <Menu />
      <Links>
        <div className="container">
          <Button type="button">Shipping country: Russian Federation</Button>
          <Button type="button">Language: English</Button>
        </div>
      </Links>
      <Help />
    </Footer>
  );
};
