import React from 'react';
import styled from 'styled-components';

const Wraper = styled.div `
  display: flex;
  justify-content: center;
`;

const Inner = styled.div `
  display: flex;
`;

const Link = styled.a `
  padding: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1rem;
  letter-spacing: 0.09375rem;
  color:#171717;
  border-bottom: ${props => (props.active ? '1px  #171717 solid' : 'transparent')};
`;

export default function Menu() {
  return (
    <Wraper>
      <Inner>
        <Link href="#">Women</Link>
        <Link active href="#">Men</Link>
        <Link href="#">Children</Link>
        <Link href="#">Beauty</Link>
        <Link href="#">Experience</Link>
      </Inner>
    </Wraper>
  );
}
