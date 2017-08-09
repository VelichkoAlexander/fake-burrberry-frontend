import React from 'react';
import logo from '../images/logo.svg';
export default () => {
  return(
    <header className="header">
      <a className="header-link" href="/" >
        <img className="header-logo" src={logo} alt="logo"/>
      </a>
    </header>
  )
};

