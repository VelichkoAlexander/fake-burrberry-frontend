import React from 'react';
import styled from 'styled-components';
import Responsive from 'react-responsive';

const Mobile = ({ children }) =>
  <Responsive maxWidth={768} children={children} />;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.188rem;
  font-weight: bold;
  text-align: center;
  background: transparent;
  color: #171717;
`;

const Link = styled.a`
  display: block;
  font-family: "Lora", serif;
  font-size: 0.875rem;
  line-height: 1.063rem;
  font-style: italic;
  text-decoration: none;
  color: #171717;
  text-align: center;
`;

export default () => {
  return (
    <Mobile>
      <Title>Need help?</Title>
      <Link href="#">Find out more and contact us</Link>
    </Mobile>
  );
};
