import React, { Component } from 'react';
import styled from 'styled-components';

import Filter from './Filter';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  background-color: #f3f3f3;
  position: relative;
  @media (min-width: 48rem) {
    overflow-x: visible;
    margin-right: 0;
  }
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
const FiltersWrap = styled.div`display: flex;`;

const SortButton = styled(Filter)`
  @media (min-width: 48rem) {
    margin-right: 0;
    &::after {
      right: 0;
    }
  }
`;

const Overflow = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  z-index: 500;
  visibility: ${props => (props.hover ? 'none' : 'hidden')};
  width: 100%;
  height: 200vh;
  background: #171717;
  opacity: .3;
`;

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = { dropdownEvent: false };
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown(value) {
    this.setState(() => ({ dropdownEvent: value }));
  }
  render() {
    return (
      <Wrapper>
        <div className="container">
          <Inner>
            <FiltersWrap>
              <Filter onDropdown={this.handleDropdown} name="Category" />
              <Filter onDropdown={this.handleDropdown} name="Colour" />
              <Filter onDropdown={this.handleDropdown} name="Size" />
            </FiltersWrap>
            <SortButton
              onDropdown={this.handleDropdown}
              name="Sort by price"
              right
            />
          </Inner>
        </div>
        <Overflow hover={this.state.dropdownEvent} />
      </Wrapper>
    );
  }
}

export default Filters;
