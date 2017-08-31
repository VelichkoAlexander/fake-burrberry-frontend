import React, { Component } from 'react';
import styled from 'styled-components';

import Filter from './Filter';
import Category from './Category';
import More from './ViewMore';
import Info from './Info';

import { dataSet1, dataSet2 } from '../../data/Data';

const Line = styled.hr`
  margin: 0;
  margin-bottom: 1rem;
  height: 1px;
  border: none;
  background-color: #c6c6c6;
  @media (min-width: 48rem) {
    margin-top: 0.125rem;
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
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
  color: ${props => (props.overflowShow ? '#999999' : '#171717')};
`;

const ProductsWrapper = styled.div`
  position: relative;
  &:after {
    content: '';
    visibility: ${props => (props.overflowShow ? 'visible' : 'hidden')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #171717;
    opacity: ${props => (props.overflowShow ? '.3' : '0')};
    transition: visibility 0s, opacity .15s linear;
  }
`;

const filters = [
  { name: 'Category', content: 'Category content' },
  { name: 'Colour', content: 'Colour content' },
  { name: 'Size', content: 'Size content' },
  { name: 'Sort by price', right: true, content: 'Sort by price content' },
];

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = { isDropdown: false };
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown() {
    this.setState({ isDropdown: !this.state.isDropdown });
  }

  render() {
    return (
      <div>
        <Info />
        <Wrapper>
          <div className="container">
            <Inner overflowShow={this.state.isDropdown}>
              {filters.map((filter, index) =>
                (<Filter
                  isDropdown={this.handleDropdown}
                  name={filter.name}
                  right={filter.right}
                  content={filter.content}
                  id={index}
                  key={index.toString()}
                  active={this.state.isDropdown}
                />),
              )}
            </Inner>
          </div>
        </Wrapper>
        <ProductsWrapper overflowShow={this.state.isDropdown}>
          <div className="container">
            <div className="row">
              <Category title="Heritage Trench Coats" data={dataSet1} />
              <div className="col-md-12">
                <Line />
              </div>
              <Category title="Single Breasted Trench Coats" data={dataSet2} />
            </div>
          </div>
          <More />
        </ProductsWrapper>
      </div>
    );
  }
}

export default Filters;
