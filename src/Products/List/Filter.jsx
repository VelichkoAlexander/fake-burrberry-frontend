import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../../images/arrow.svg';

const Wrapper = styled.div`
  @media (min-width: 48rem) {
    margin-left: ${props => (props.right ? 'auto' : '0')};
    position: relative;
  }
`;

const FilterHeader = styled.div`
  padding: 0;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 1.25rem;
  margin-right: 1rem;
  position: relative;
  border: none;
  background-color: transparent;
  font-size: 0.75rem;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1rem;
  font-weight: 400;
  color: ${props => (props.visibility ? '#171717' : 'inherit')};
  white-space: nowrap;
  cursor: pointer;
  z-index: 800;
  transition: all .2s linear;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0.75rem;
    height: 0.375rem;
    transition: all .1s linear;
    transform: translateY(-50%)
      rotate(${props => (props.visibility ? '180deg' : '0')});
    -webkit-mask: url(${arrow}) center no-repeat;
    mask: url(${arrow}) center no-repeat;
    background-size: cover;
    background-color: #171717;
    ${props =>
    (props.active ? 'background-color: #999999' : 'background-color:#171717')};
    ${props => props.visibility && 'background-color:#171717'};
  }
  @media (min-width: 48rem) {
    margin-right: ${props => (props.right ? '0' : '3rem')};
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Dropdown = styled.div`
  padding: 1rem 1.5rem;
  padding-bottom: 1.5rem;
  position: absolute;
  z-index: 9999;
  box-sizing: border-box;
  left: 0;
  width: 100%;
  display: ${props => (props.visibility ? 'block' : 'none')};
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: #f3f3f3;
  color: #171717;
  @media (min-width: 48rem) {
    left: auto;
    width: auto;
    white-space: nowrap;
    ${props => (props.right ? 'right:-1.5rem' : 'left:-1.5rem')};
    padding-right: .5;
  }
`;

const Content = styled.p`
  margin: 0;
  padding: 0;
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { isDropdown: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClick(on = true) {
    if (!(on === false && on === this.state.isDropdown)) {
      this.setState({ isDropdown: !this.state.isDropdown });
      this.props.isDropdown();
    }
  }

  handleClickOutside(e) {
    if (e.target && !this.Dropdown.contains(e.target)) {
      this.handleClick(false);
    }
  }

  render() {
    return (
      <Wrapper right={this.props.right}>
        <div
          ref={(node) => {
            this.Dropdown = node;
          }}
        >
          <FilterHeader
            onClick={() => {
              this.handleClick();
            }}
            visibility={this.state.isDropdown}
            right={this.props.right}
            active={this.props.active}
          >
            {this.props.name}
          </FilterHeader>
          <Dropdown
            className="dropdown"
            right={this.props.right}
            visibility={this.state.isDropdown}
          >
            <Content>
              {this.props.children}
            </Content>
          </Dropdown>
        </div>
      </Wrapper>
    );
  }
}

Filter.propTypes = {
  isDropdown: PropTypes.func.isRequired,
  name: PropTypes.string,
  children: PropTypes.element.isRequired,
  right: PropTypes.bool,
  active: PropTypes.bool,
};

Filter.defaultProps = {
  name: 'MenuItem',
  content: 'content',
  right: false,
  active: false,
};

export default Filter;
