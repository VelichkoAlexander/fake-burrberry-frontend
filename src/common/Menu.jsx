import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const Inner = styled.div`display: flex;`;

const NavLink = styled(Link)`
  padding: 1rem;
  padding-bottom: 0.9375rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1rem;
  letter-spacing: 0.09375rem;
  color:${props => (props.active ? '#171717' : '#999999')};
  border-bottom: ${props =>
    (props.active ? '1px  #171717 solid' : 'transparent')};
  transition: color .15s ease-in-out, border-color .15s ease-in-out;
  &:hover {
    color: #171717;
    border-bottom: 1px  #171717 solid;
  }
`;

export default function Menu() {
  return (
    <Wraper>
      <Inner>
        <NavLink to="/products">Women</NavLink>
        <NavLink active to="/products">
          Men
        </NavLink>
        <NavLink to="/products">Children</NavLink>
        <NavLink to="/products">Beauty</NavLink>
        <NavLink to="/products">Experience</NavLink>
      </Inner>
    </Wraper>
  );
}
