import React, { Component } from 'react';
import styled from 'styled-components';

import Filter from './Filter';
import Category from './Category';
import More from './ViewMore';

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
  //overflow-x: hidden;
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
  //justify-content: space-between;
  color: ${props => (props.overflowShow ? '#999999' : '#171717')};
`;

const ProductsWrapper = styled.div`
  position: relative;
  &:after {
    content: '';
    display: ${props => (props.overflowShow ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #171717;
    opacity: .3;
  }
`;

const filters = [
  { name: 'Size' },
  { name: 'Colour' },
  { name: 'Size' },
  { name: 'Sort by price', sort: true },
];

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = { dropdownEvent: false };
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown() {
    this.setState(() => ({ dropdownEvent: !this.state.dropdownEvent }));
  }

  render() {
    return (
      <div>
        <Wrapper>
          <div className="container">
            <Inner overflowShow={this.state.dropdownEvent}>
              {filters.map((filter, index) =>
                (<Filter
                  onDropdown={this.handleDropdown}
                  name={filter.name}
                  sort={filter.sort}
                  id={index}
                  key={index.toString()}
                  active={this.state.dropdownEvent}
                />),
              )}
            </Inner>
          </div>
        </Wrapper>
        <ProductsWrapper overflowShow={this.state.dropdownEvent}>
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
