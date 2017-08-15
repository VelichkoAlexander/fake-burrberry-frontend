import React from 'react';
import PropTypes from 'prop-types';
import Responsive from 'react-responsive';

// Desktop, tablet and mobile setup
export const Lg = ({ children }) =>
  <Responsive minWidth={992}>{ children } </Responsive>;
export const MdOnly = ({ children }) =>
  <Responsive minWidth={768} maxWidth={992}>{children}</Responsive>;
export const XsOnly = ({ children }) =>
  <Responsive maxWidth={768}>{children}</Responsive>;

// Default (desktop, tablet) and mobile setup
export const Xl = ({ children }) =>
  <Responsive minWidth={768}> {children}</Responsive>;
export const Sm = ({ children }) =>
  <Responsive maxWidth={992}> {children}</Responsive>;

Lg.propTypes = {
  children: PropTypes.string,
};

Lg.defaultProps = {
  children: '',
};

MdOnly.propTypes = {
  children: PropTypes.string,
};

MdOnly.defaultProps = {
  children: '',
};

XsOnly.propTypes = {
  children: PropTypes.string,
};

XsOnly.defaultProps = {
  children: '',
};

Xl.propTypes = {
  children: PropTypes.string,
};

Xl.defaultProps = {
  children: '',
};

Sm.propTypes = {
  children: PropTypes.string,
};

Sm.defaultProps = {
  children: '',
};
