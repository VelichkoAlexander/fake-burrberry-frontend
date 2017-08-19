import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Xl, Lg } from '../common/Responsive';

const Menu = styled.div`
  @media (min-width: 48rem) {
    margin-bottom: 1.875rem;
  }
  @media (min-width: 62rem) {
    margin-bottom: 2.875rem;
  }
`;

const NavLink = styled(Link)`
    display: block;
    margin-bottom: 0.75rem;
    margin-right: 1.25rem;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
    color: #999999;
    text-decoration: none;
    &:last-child {
      margin-bottom: 0;
    }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  line-height: 1;
  font-weight: bold;
  text-transform: uppercase;
  color: #171717;
`;

const FindLink = styled(Link)`
    position: relative;
    padding-bottom: 0.0625rem;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
    text-decoration: none;
    color: #171717;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #171717;
    }
`;
const Img = styled.img`
  margin-bottom: 1rem;
  display: block;
`;

export default () =>
  (<Xl>
    <Menu>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-3">
            <Title>Customer service</Title>
            <NavLink to="/">Contact Us</NavLink>
            <NavLink to="/">Payment</NavLink>
            <NavLink to="/">Shipping</NavLink>
            <NavLink to="/">Returns</NavLink>
            <NavLink to="/">Faqs</NavLink>
            <NavLink to="/">Live Chat</NavLink>
            <NavLink to="/">The Burberry App</NavLink>
            <NavLink to="/">Store Locator</NavLink>
          </div>
          <div className="col-sm-3 col-md-3">
            <Title>Our company</Title>
            <NavLink to="/">Our History</NavLink>
            <NavLink to="/">Burberry Group Plc</NavLink>
            <NavLink to="/">Careers</NavLink>
            <NavLink to="/">Corporate Responsibility</NavLink>
            <NavLink to="/">Site Map</NavLink>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-3">
            <Title>Legal & cookies</Title>
            <NavLink to="/">Terms & Conditions</NavLink>
            <NavLink to="/">Privacy Policy</NavLink>
            <NavLink to="/">Cookie Policy</NavLink>
            <NavLink to="/">Accessibility Statement</NavLink>
            <NavLink to="/">Japan Only - SCTL indications</NavLink>
          </div>
          <div className="col-sm-4 col-md-3">
            <Lg>
              <Img src="https://assets.burberry.com/is/image/Burberryltd/933f04c94a361dfd816c77528ec0e7286921051b.jpg?$BBY_V2_BASIC$&wid=232" />
              <FindLink to="/store-locator/">Find a store</FindLink>
            </Lg>
          </div>
        </div>
      </div>
    </Menu>
  </Xl>);
