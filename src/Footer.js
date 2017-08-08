import React from 'react';
export default () => {
  return (
    <footer className="footer">
      <div className="footer-menu hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3">
              <h2 className="footer-menu-title">Customer service</h2>
              <a className="footer-menu-link" href="javascript:void(0);">Contact Us</a>
              <a className="footer-menu-link" href="javascript:void(0);">Payment</a>
              <a className="footer-menu-link" href="javascript:void(0);">Shipping</a>
              <a className="footer-menu-link" href="javascript:void(0);">Returns</a>
              <a className="footer-menu-link" href="javascript:void(0);">Faqs</a>
              <a className="footer-menu-link" href="javascript:void(0);">Live Chat</a>
              <a className="footer-menu-link" href="javascript:void(0);">The Burberry App</a>
              <a className="footer-menu-link" href="javascript:void(0);">Store Locator</a>
            </div>
            <div className="col-sm-3">
              <h2 className="footer-menu-title">Our company</h2>
              <a className="footer-menu-link" href="javascript:void(0);">Our History</a>
              <a className="footer-menu-link" href="javascript:void(0);">Burberry Group Plc</a>
              <a className="footer-menu-link" href="javascript:void(0);">Careers</a>
              <a className="footer-menu-link" href="javascript:void(0);">Corporate Responsibility</a>
              <a className="footer-menu-link" href="javascript:void(0);">Site Map</a>
            </div>
            <div className="col-sm-4">
              <h2 className="footer-menu-title">Legal & cookies</h2>
              <a className="footer-menu-link" href="javascript:void(0);">Terms & Conditions</a>
              <a className="footer-menu-link" href="javascript:void(0);">Privacy Policy</a>
              <a className="footer-menu-link" href="javascript:void(0);">Cookie Policy</a>
              <a className="footer-menu-link" href="javascript:void(0);">Accessibility Statement</a>
              <a className="footer-menu-link" href="javascript:void(0);">Japan Only - SCTL indications</a>
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
    </footer>
  );
}