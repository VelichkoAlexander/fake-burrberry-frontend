import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import arrowIcon from '../images/arrow.svg';

const SubNavigationStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: translateX(-17.125rem);
  transition: 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  background: #fff;
  ${props => props.isOpened && 'transform: translateX(0)'};
`;

const BackButton = styled.button`
  position: relative;
  flex-basis: 100%;
  padding: 0.9375rem 0.5rem;
  padding-left: 1.375rem;
  font-family: Raleway, sans-serif;
  font-size: 0.875rem;
  text-align: left;
  color: #171717;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 1rem;
    height: 1rem;
    background: url(${arrowIcon}) no-repeat;
    background-size: contain;
    transform: rotate(90deg) translateX(-50%);
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 10.5625rem;
  background: url(${props => props.image}) left center no-repeat;
  background-size: cover;
`;

const Title = styled.h2`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 1rem 0.5rem;
  background-color: rgba(255, 255, 255, 0.7);
  font-family: Lora, serif;
  font-size: 1.25rem;
  line-height: 1;
  color: #171717;
`;

const Links = styled.div`padding: 1rem 0.5rem;`;

const Link = styled(NavLink)`
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: Raleway, sans-serif;
  line-height: 1rem;
  color: #171717;
  text-decoration: none;
  &.active {
    font-size: 0.875rem;
    font-weight: 700;
    font-family: Raleway, sans-serif;
    line-height: 1rem;
  }
`;

const SubNavigation = props => (
  <SubNavigationStyled isOpened={props.isOpened}>
    <BackButton type="button" onClick={props.close}>
      Home
    </BackButton>
    <Header image={props.navigation.image}>
      <Title>{props.navigation.title}</Title>
    </Header>
    <Links>
      {props.navigation.links.map((link, index) => (
        <Link
          to={link.url}
          onClick={props.toggleSideNav}
          key={index.toString()}
        >
          {link.title}
        </Link>
      ))}
    </Links>
  </SubNavigationStyled>
);

SubNavigation.propTypes = {
  navigation: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  }).isRequired,
  isOpened: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  toggleSideNav: PropTypes.func.isRequired,
};

export default SubNavigation;
