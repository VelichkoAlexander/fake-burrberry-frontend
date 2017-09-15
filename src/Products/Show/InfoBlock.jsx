import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import triangle from '../../images/triangle-down.svg';

const Info = styled.div`
  padding: 2rem 0;
  @media (min-width: 48rem) {
    padding-bottom: 3rem;
    display: ${props => (props.hide ? 'none' : 'block')};
  }
`;

const Header = styled.button`
  display: block;
  padding: 0;
  position: relative;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
  & p {
    margin: 0;
    font-size: 0.875rem;
    font-family: 'Lora', serif;
    line-height: 1.5rem;
  }
  & ul {
    margin: 0;
    padding: 0;
    margin-top: 1.5rem;
    list-style: none;
    font-size: 0.875rem;
    font-family: 'Lora', serif;
    line-height: 1.5rem;
    &:first-child {
      margin-top: 0;
    }
  }

  @media (min-width: 48rem) {
    display: block;
  }
  display: ${props => (props.opened ? 'block' : 'none')};
`;

class InfoBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    const content = this.props.description + this.props.details;
    return (
      <Info hide={this.props.hide}>
        <Header
          type="button"
          onClick={this.handleClick}
          opened={this.state.isOpened}
        >
          <Title>{this.props.title}</Title>
        </Header>

        <Body
          opened={this.state.isOpened}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Info>
    );
  }
}

InfoBlock.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  details: PropTypes.string,
  hide: PropTypes.bool,
};

InfoBlock.defaultProps = {
  title: 'Description',
  hide: false,
  description: '',
  details: '',
};

export default InfoBlock;
