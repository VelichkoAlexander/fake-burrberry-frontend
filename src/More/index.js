import React from 'react';
import styled from 'styled-components';

const Section = styled.section `
    padding-right: 1rem;
    padding-left: 1rem;
    margin-bottom: 4rem;
   
    @media (min-width: 48rem) {
      display: none;
    }
  `;

const Title = styled.h2 `
    display: inline-block;
    position: relative;
    margin: 0;
    margin-bottom: 1.5rem;
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.188rem;
    font-weight: 500;
    text-transform: uppercase;
    padding-bottom: 0.5625rem;
    color: #171717;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.0625rem;
      background-color: #171717;
    }
  `;

const Link = styled.a `
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

export default () => {
  return (
    <Section>
        <Title>More for you</Title>
        <Link href="javascript:void(0);">Men’s Black Trench Coats</Link>
        <Link href="javascript:void(0);">Men’s Short Trench Coats</Link>
        <Link href="javascript:void(0);">Men’s Long Trench Coats</Link>
    </Section>
  )
}