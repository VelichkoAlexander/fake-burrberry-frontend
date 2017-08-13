import React, { Component } from 'react';
import styled from 'styled-components';

import triangle from '../images/triangle-down.svg';

const Info = styled.div`
  padding: 2rem 0;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  @media (min-width: 48rem) {
    padding-bottom: 3rem;
    display: ${props => (props.hide ? 'none' : 'block')};
  }
`;

const Header = styled.button`
  display: block;
  padding: 0;
  position: relative;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: transparent;
  width: 100%;
  border: 0;
  text-align: left;
  &::after {
    content: '';
    position: absolute;
    top: 0.125rem;
    right: 0;
    width: 0.625rem;
    height: 0.75rem;
    background: url(${triangle}) center 0.125rem no-repeat;
    transform: rotate(${props => (props.opened ? '180' : '0')}deg);
  }
  @media (min-width: 48rem) {
    &::after {
      display: none;
    }
  }
`;

const Title = styled.h2`
  margin: 0;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #171717;
`;

const Body = styled.div`
  padding-top: 2rem;
  &  p {
    margin: 0;
    font-size: 0.875rem;
    font-family: "Lora", serif;
    line-height: 1.5rem;
  }
  &  ul {
    margin: 0;
    padding: 0;
    margin-top: 1.5rem;
    list-style: none;
    font-size: 0.875rem;
    font-family: "Lora", serif;
    line-height: 1.5rem;
  }

  @media (min-width: 48rem) {
    display: block;
  }
  display: ${props => (props.opened ? 'block' : 'none')};
`;

class InfoBlock extends Component {
  state = { isOpened: false };

  handleClick = () => {
    this.setState((prevState, props) => {
      return { isOpened: !prevState.isOpened };
    });
  };

  render() {
    return (
      <Info hide={this.props.hide}>
        <Header
          type="button"
          onClick={this.handleClick}
          opened={this.state.isOpened}
        >
          <Title>
            {this.props.title}
          </Title>
        </Header>

        <Body opened={this.state.isOpened}>
          <p>A refined car coat crafted in protective cotton gabardine.</p>
          <p>
            Invented by Thomas Burberry in 1879, cotton gabardine is a tightly
            woven and breathable fabric that protects against wind and rain.
          </p>
          <p>
            Raglan sleeves and a concealed button closure complement the clean
            tailored lines.
          </p>
          <p>The piece is finished with a distinctive check undercollar.</p>
          <ul>
            <li>
              Coat length: 98cm/38.6in. This is based on a size UK 48 as
              proportions change slightly according to size.
            </li>
            <li>Outer: 100% cotton</li>
            <li>Check lining: 100% cotton</li>
            <li>Sleeve lining: 100% viscose</li>
            <li>Buttons: buffalo horn</li>
            <li>Specialist dry clean</li>
            <li>Made in Europe</li>
            <li>Item 39428531</li>
          </ul>
        </Body>
      </Info>
    );
  }
}

export default InfoBlock;
