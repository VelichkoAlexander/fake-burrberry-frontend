import React from 'react';
import styled from 'styled-components';

import { Xl } from '../common/responsive';

const Menu = styled.div`@media (min-width: 48rem) {margin-bottom: 1.875rem;}`;

const Link = styled.a`
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
            <Link href="/">Contact Us</Link>
            <Link href="/">Payment</Link>
            <Link href="/">Shipping</Link>
            <Link href="/">Returns</Link>
            <Link href="/">Faqs</Link>
            <Link href="/">Live Chat</Link>
            <Link href="/">The Burberry App</Link>
            <Link href="/">Store Locator</Link>
          </div>
          <div className="col-sm-3 col-md-3">
            <Title>Our company</Title>
            <Link href="/">Our History</Link>
            <Link href="/">Burberry Group Plc</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Corporate Responsibility</Link>
            <Link href="/">Site Map</Link>
          </div>
          <div className="col-sm-4 col-md-3">
            <Title>Legal & cookies</Title>
            <Link href="/">Terms & Conditions</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Cookie Policy</Link>
            <Link href="/">Accessibility Statement</Link>
            <Link href="/">Japan Only - SCTL indications</Link>
          </div>
        </div>
      </div>
    </Menu>
  </Xl>);
