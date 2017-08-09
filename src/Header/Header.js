import React from 'react';
import logo from '../images/logo.svg';
import Title from './Title';
export default (props) => {
  return(
    <header className="header">
      <Title settings={props}/>
      <a className="header-link" href="/" >
        <img className="header-logo" src={logo} alt="logo"/>
      </a>
    </header>
  )
};

