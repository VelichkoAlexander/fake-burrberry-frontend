import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../../images/arrow.svg';

const Wrapper = styled.div`
  @media (min-width: 48rem) {
    margin-left: ${props => (props.isSort ? 'auto' : '0')};
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
  color: ${props => (props.show ? '#171717' : 'inherit')};
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
    transition: all .15s linear;
    transform: translateY(-50%)
      rotate(${props => (props.show ? '180deg' : '0')});
    -webkit-mask: url(${arrow}) center no-repeat;
    mask: url(${arrow}) center no-repeat;
    background-size: cover;
    background-color: #171717;
    ${props =>
    (props.active ? 'background-color: #999999' : 'background-color:#171717')};
    ${props => props.show || 'background-color:#171717'};
  }
  @media (min-width: 48rem) {
    margin-right: ${props => (props.isSort ? '0' : '3rem')};
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
  display: ${props => (props.show ? 'block' : 'none')};
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: #f3f3f3;
  color: #171717;
  @media (min-width: 48rem) {
    left: auto;
    width: 23.5625rem;
    ${props => (props.isSort ? 'right:-1.5rem' : 'left:-1.5rem')};
  }
`;

const Content = styled.p`
  margin: 0;
  padding: 0;
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { showDropdown: false };
    this.onShow = this.onShow.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  onShow(event) {
    if (!this.state.showDropdown) {
      this.setState(() => ({ showDropdown: true }));
      this.props.onDropdown(event.target.id);
      document.addEventListener('click', this.handleClickOutside);
    }
  }

  handleClickOutside(e) {
    if (e === undefined) {
      return;
    }
    if (this.Dropdown.contains(e.target)) {
      return;
    }
    this.setState(() => ({ showDropdown: false }));
    this.props.onDropdown(false);
    document.removeEventListener('click', this.handleClickOutside);
  }

  render() {
    return (
      <Wrapper isSort={this.props.sort}>
        <FilterHeader
          onClick={(e) => {
            this.onShow(e);
          }}
          show={this.state.showDropdown}
          isSort={this.props.sort}
          active={this.props.active}
        >
          {this.props.name}
        </FilterHeader>
        <Dropdown
          isSort={this.props.sort}
          show={this.state.showDropdown}
          innerRef={(node) => {
            this.Dropdown = node;
          }}
        >
          <Content>
            Content content content content content content content content
            content content content content content content content content
            content content content content content content content content
            content content content content content content content content
            content content content content content content content content
            content content
          </Content>
        </Dropdown>
      </Wrapper>
    );
  }
}

Filter.propTypes = {
  onDropdown: PropTypes.func,
  name: PropTypes.string,
  sort: PropTypes.bool,
  active: PropTypes.bool,
};

Filter.defaultProps = {
  onDropdown: () => '',
  name: 'MenuItem',
  sort: false,
  active: false,
};

export default Filter;
