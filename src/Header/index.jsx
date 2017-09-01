import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { XsOnly, Xl } from '../common/Responsive';
import hamburger from '../images/hamburger.svg';

import Menu from '../common/Menu';
import Logo from './Logo';
import Select from './Select';

const Wrap = styled.header`
  position: relative;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  line-height: 1rem;
  @media (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media (min-width: 62rem) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0;
  }
`;

const Hamburger = styled.button`
  display: block;
  padding: 0;
  align-self: center;
  justify-self: flex-start;
  width: 1rem;
  height: 0.625rem;
  border: 0;
  background-color: transparent;
  background: url(${hamburger}) center no-repeat;
`;

const Header = props =>
  (<div>
    <Wrap>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="row middle-xs">
              <div className="col-xs-2 col-md-4">
                <XsOnly>
                  <Hamburger type="button" />
                </XsOnly>
                <Xl>
                  <Select
                    label="Shopping in"
                    localeId={props.localeId}
                    handleLocalChange={props.handleLocalChange}
                    options={props.options}
                  />
                </Xl>
              </div>
              <div className="col-xs-8 col-md-4">
                <Logo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
    <div className="container">
      <div className="row">
        <Xl>
          <Menu />
        </Xl>
      </div>
    </div>
  </div>);

Header.propTypes = {
  localeId: PropTypes.number,
  handleLocalChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

Header.defaultProps = {
  localeId: 0,
};

export default Header;
