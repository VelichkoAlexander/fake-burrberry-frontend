import React from 'react';
import styled from 'styled-components';
import { XsOnly } from './common/responsive';

const Section = styled.section`
  padding-right: 1rem;
  padding-left: 1rem;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  display: inline-block;
  position: relative;
  margin: 0;
  margin-bottom: 1rem;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.188rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #171717;
`;

const Link = styled.a`
  display: block;
  margin: 0 0 1rem;
  font-size: 0.875rem;
  font-family: "Lora", serif;
  font-style: italic;
  line-height: 1.063rem;
  text-decoration: none;
  color: #171717;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default () =>
  (<XsOnly>
    <Section>
      <Title>More for you</Title>
      <Link href="#">Men’s Black Trench Coats</Link>
      <Link href="#">Men’s Short Trench Coats</Link>
      <Link href="#">Men’s Long Trench Coats</Link>
    </Section>
  </XsOnly>);
