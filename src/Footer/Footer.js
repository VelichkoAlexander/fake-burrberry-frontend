import React from 'react';
import Link from './Link';
import styled from 'styled-components';
const costomerServiceLinks = [
  {
    href: '/',
    title: 'Contact Us'
  }, {
    href: '/',
    title: 'Payment'
  }, {
    href: '/',
    title: 'Shipping'
  }, {
    href: '/',
    title: 'Returns'
  }, {
    href: '/',
    title: 'Faqs'
  }, {
    href: '/',
    title: 'Live Chat'
  }, {
    href: '/',
    title: 'The Burberry App'
  }, {
    href: '/',
    title: 'Store Locator'
  }
];
const ourCompanyLinks = [
  {
    href: '/',
    title: 'Our History'
  }, {
    href: '/',
    title: 'Burberry Group Plc'
  }, {
    href: '/',
    title: 'Careers'
  }, {
    href: '/',
    title: 'Corporate Responsibility'
  }, {
    href: '/',
    title: 'Site Map'
  }
];
const legalCookiesLinks = [
  {
    href: '/',
    title: 'Terms & Conditions'
  }, {
    href: '/',
    title: 'Privacy Policy'
  }, {
    href: '/',
    title: 'Cookie Policy'
  }, {
    href: '/',
    title: 'Accessibility Statement'
  }, {
    href: '/',
    title: 'Japan Only - SCTL indications'
  }
];

export default () => {
  const Footer = styled.footer `
    padding-top: 2rem;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  `;
  return (
    <Footer>
      <div className="footer-menu hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3">
              <Link title="Customer service" links={costomerServiceLinks}/>
            </div>
            <div className="col-sm-3">
              <Link title="Our Company" links={ourCompanyLinks}/>
            </div>
            <div className="col-sm-4">
              <Link title="Legal & cookies" links={legalCookiesLinks}/>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="container">
          <button className="footer-link" type="button">Shipping country: Russian Federation</button>
          <button className="footer-link" type="button">Language: English</button>
        </div>
      </div>
      <h2 className="footer-help md-hide">Need help?</h2>
      <a href="javascript:void(0);" className="footer-contacts-us md-hide">Find out more and contact us</a>
    </Footer>
  );
}