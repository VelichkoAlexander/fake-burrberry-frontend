import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { XsOnly } from '../../common/Responsive';

const Section = styled.section`margin-bottom: 4rem;`;

const Title = styled.h2`
  display: inline-block;
  position: relative;
  margin: 0;
  margin-bottom: 1rem;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.188rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #171717;
`;

const NavLink = styled(Link)`
  display: block;
  margin: 0 0 1rem;
  font-size: 0.875rem;
  font-family: 'Lora', serif;
  font-style: italic;
  line-height: 1.063rem;
  text-decoration: none;
  color: #171717;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default () => (
  <XsOnly>
    <Section>
      <Title>More for you</Title>
      <NavLink to="/">Men’s Black Trench Coats</NavLink>
      <NavLink to="/">Men’s Short Trench Coats</NavLink>
      <NavLink to="/">Men’s Long Trench Coats</NavLink>
    </Section>
  </XsOnly>
);
