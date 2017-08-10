import React from 'react';
import styled from 'styled-components';

export default () => {
  
  const Menu = styled.div `
    display: none;
    @media (min-width: 48rem) {
    display: block;
    margin-bottom: 1.875rem;
  }
  `;
  
  const Link = styled.a `
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
  
  const Title = styled.h2 `
    margin: 0;
    margin-bottom: 1rem;
    font-size: 0.75rem;
    line-height: 1;
    font-weight: bold;
    text-transform: uppercase;
    color: #171717;
  `;
  return (
    <Menu>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-3">
            <Title>Customer service</Title>
            <Link href="javascript:void(0);">Contact Us</Link>
            <Link href="javascript:void(0);">Payment</Link>
            <Link href="javascript:void(0);">Shipping</Link>
            <Link href="javascript:void(0);">Returns</Link>
            <Link href="javascript:void(0);">Faqs</Link>
            <Link href="javascript:void(0);">Live Chat</Link>
            <Link href="javascript:void(0);">The Burberry App</Link>
            <Link href="javascript:void(0);">Store Locator</Link>
          </div>
          <div className="col-sm-3">
            <Title>Our company</Title>
            <Link href="javascript:void(0);">Our History</Link>
            <Link href="javascript:void(0);">Burberry Group Plc</Link>
            <Link href="javascript:void(0);">Careers</Link>
            <Link href="javascript:void(0);">Corporate Responsibility</Link>
            <Link href="javascript:void(0);">Site Map</Link>
          </div>
          <div className="col-sm-4">
            <Title>Legal & cookies</Title>
            <Link href="javascript:void(0);">Terms & Conditions</Link>
            <Link href="javascript:void(0);">Privacy Policy</Link>
            <Link href="javascript:void(0);">Cookie Policy</Link>
            <Link href="javascript:void(0);">Accessibility Statement</Link>
            <Link href="javascript:void(0);">Japan Only - SCTL indications</Link>
          </div>
        </div>
      </div>
    </Menu>
  )
}