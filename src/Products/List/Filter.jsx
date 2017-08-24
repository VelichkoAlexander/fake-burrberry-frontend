import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../../images/arrow.svg';

const Wrapper = styled.div`position: relative;`;

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
  color: #171717;
  white-space: nowrap;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0.75rem;
    height: 0.375rem;
    transform: translateY(-50%);
    background: url(${arrow}) center no-repeat;
    background-size: cover;
  }
  @media (min-width: 48rem) {
    margin-right: 3rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Dropdown = styled.div`
  padding: 1rem 1.5rem;
  padding-bottom: 1.5rem;
  width: 20.5625rem;
  position: absolute;
  z-index: 9999;
  ${props => (props.right ? 'right:0;' : 'left:0;')} display: ${props =>
  (props.show ? 'block' : 'none')};
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: #f3f3f3;
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { showDropdown: false };
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentWillMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }
  onShow() {
    this.setState(() => ({ showDropdown: !this.state.showDropdown }));
    this.props.onDropdown(!this.state.showDropdown);
  }
  handleClickOutside(event) {
    const domNode = this.node;
    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        showDropdown: false,
      });
    }
  }
  render() {
    return (
      <div
        tabIndex={0}
        role="button"
        onClick={() => this.onShow()}
        ref={(node) => {
          this.node = node;
        }}
      >
        <Wrapper>
          <FilterHeader>
            {this.props.name}
          </FilterHeader>
          <Dropdown right={this.props.right} show={this.state.showDropdown}>
            Content content content content content content content content
            content content content content content content content content
            content content content content content content content content
            content content content content content content content content
            content content content content content content content content
            content content
          </Dropdown>
        </Wrapper>
      </div>
    );
  }
}

Filter.propTypes = {
  onDropdown: PropTypes.func,
  name: PropTypes.string,
  right: PropTypes.string,
};

Filter.defaultProps = {
  onDropdown: () => '',
  name: 'MenuItem',
  right: '',
};

export default Filter;
