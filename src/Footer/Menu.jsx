import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Xl } from '../common/responsive';

const Menu = styled.div`@media (min-width: 48rem) {margin-bottom: 1.875rem;}`;

const Ref = styled(Link)`
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

export default () =>
  (<Xl>
    <Menu>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-3">
            <Title>Customer service</Title>
            <Ref to="/">Contact Us</Ref>
            <Ref to="/">Payment</Ref>
            <Ref to="/">Shipping</Ref>
            <Ref to="/">Returns</Ref>
            <Ref to="/">Faqs</Ref>
            <Ref to="/">Live Chat</Ref>
            <Ref to="/">The Burberry App</Ref>
            <Ref to="/">Store Locator</Ref>
          </div>
          <div className="col-sm-3 col-md-3">
            <Title>Our company</Title>
            <Ref to="/">Our History</Ref>
            <Ref to="/">Burberry Group Plc</Ref>
            <Ref to="/">Careers</Ref>
            <Ref to="/">Corporate Responsibility</Ref>
            <Ref to="/">Site Map</Ref>
          </div>
          <div className="col-sm-4 col-md-3">
            <Title>Legal & cookies</Title>
            <Ref to="/">Terms & Conditions</Ref>
            <Ref to="/">Privacy Policy</Ref>
            <Ref to="/">Cookie Policy</Ref>
            <Ref to="/">Accessibility Statement</Ref>
            <Ref to="/">Japan Only - SCTL indications</Ref>
          </div>
        </div>
      </div>
    </Menu>
  </Xl>);
