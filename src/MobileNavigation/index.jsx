import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import arrowIcon from '../images/arrow.svg';
import CountrySelect from './Select';
import LangugeSelect from './SelectLanguage';
import SubNavigation from './SubNavigation';

import { MobileMenuNavigation } from '../data/Data';

const SideNavigationStyled = styled.section`
  position: absolute;
  width: 274px;
  top: 0;
  bottom: 0;
  left: 0;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: translateX(${props => (props.isMenuOpened ? '0' : '-274px')});
  overflow: auto;
`;

const MainNavigation = styled.div`
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: translateX(${props => (props.isMenuOpened ? '-274px' : '0')});
  overflow: auto;
`;

const Logo = styled.img`
  display: block;
  height: 0.75rem;
  margin: 1rem auto;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const Subtitle = styled.h3`
  margin: 0;
  padding-top: 0.3rem;
  padding-left: 0.5rem;
  padding-bottom: 0.4rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 0.75rem 0.5rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.875rem;
  color: #171717;
`;

const SectionButton = styled.button`
  display: block;
  text-decoration: none;
  padding: 0.75rem 0.5rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.875rem;
  text-align: left;
  border: none;
  background: transparent;
  color: #171717;
  &::after {
    position: absolute;
    right: 0.1875rem;
    width: 0.75rem;
    height: 1rem;
    content: '';
    transform: rotate(-90deg);
    background: url(${arrowIcon}) no-repeat;
    background-size: contain;
    background-position: 0 3px;
  }
`;

const LogoLink = styled(NavLink)`display: block;`;

const Buttons = Block.extend`margin-top: -.25rem;`;

class MobileNavigation extends Component {
  constructor() {
    super();
    this.state = {
      isSubMenuOpened: false,
      categoryId: 0,
    };
    this.toggleSubNav = this.toggleSubNav.bind(this);
    this.closeSubMenu = this.closeSubMenu.bind(this);
  }

  toggleSubNav(subSectionIndex) {
    this.setState(prevState => ({
      isSubMenuOpened: !prevState.isSubMenuOpened,
      categoryId: subSectionIndex,
    }));
  }

  closeSubMenu() {
    this.setState({ isSubMenuOpened: false });
  }

  render() {
    return (
      <SideNavigationStyled isMenuOpened={this.props.isMenuOpened}>
        <MainNavigation isShiftedLeft={this.state.isSubMenuOpened}>
          <LogoLink to="/">
            <Logo alt="Logo" src={logo} />
          </LogoLink>
          <Block>
            {MobileMenuNavigation.map((navItem, index) =>
              (<SectionButton
                key={index.toString()}
                onClick={() => {
                  this.toggleSubNav(index);
                }}
              >
                {navItem.title}
              </SectionButton>),
            )}
          </Block>
          <Block>
            <Subtitle>Customer service</Subtitle>
            <nav>
              <Link to="/contact">Contact Us</Link>
              <Link to="/payment">Payment</Link>
              <Link to="/shipping">Shipping</Link>
              <Link to="/returns">Returns</Link>
              <Link to="/faqs">Faqs</Link>
              <Link to="/the-burberry-app">The Burberry App</Link>
              <Link to="/locator">Store Locator</Link>
            </nav>
          </Block>
          <Block>
            <Subtitle>Our company</Subtitle>
            <nav>
              <Link to="/our-history">Our History</Link>
              <Link to="/burberry-group-pic">Burberry Group Pic</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/corporate-responsibility">
                Corporate Responsibility
              </Link>
              <Link to="/site-map">Site Map</Link>
            </nav>
          </Block>
          <Buttons>
            <CountrySelect />
            <LangugeSelect />
          </Buttons>
        </MainNavigation>
        <SubNavigation
          navigation={MobileMenuNavigation[this.state.categoryId]}
          isOpened={this.state.isSubMenuOpened}
          close={this.closeSubMenu}
          toggleSideNav={this.props.toggleMobileMenu}
        />
      </SideNavigationStyled>
    );
  }
}

MobileNavigation.propTypes = {
  isMenuOpened: PropTypes.bool.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired,
};

export default MobileNavigation;
