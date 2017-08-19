import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const Inner = styled.div`display: flex;`;

const Link = styled(NavLink)`
  padding: 1rem;
  padding-bottom: 0.9375rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1rem;
  letter-spacing: 0.09375rem;
  border-bottom: 1px solid transparent ;
  color: #999999;
  transition: color .15s ease-in-out, border-color .15s ease-in-out;
  &:hover {
    color: #171717;
    border-bottom: 1px  #171717 solid;
  }
`;
const linkActiveStyle = {
  color: '#171717',
  borderBottom: '1px  #171717 solid',
};

export default function Menu() {
  return (
    <Wraper>
      <Inner>
        <Link activeStyle={linkActiveStyle} to="/women">
          Women
        </Link>
        <Link activeStyle={linkActiveStyle} to="/mens-clothing">
          Men
        </Link>
        <Link activeStyle={linkActiveStyle} to="/children">
          Children
        </Link>
        <Link activeStyle={linkActiveStyle} to="/beauty">
          Beauty
        </Link>
        <Link activeStyle={linkActiveStyle} to="/experience">
          Experience
        </Link>
      </Inner>
    </Wraper>
  );
}
