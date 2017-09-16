import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Filter from './Filter';
import Category from './Category';
import More from './ViewMore';
import Info from './Info';
import Title from '../../common/Title';

import { get } from '../../data/Data';

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
    transition: visibility 0s, opacity 0.15s linear;
  }
`;

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdown: false,
      data: {
        title: '',
        desitems: '',
        items: [],
      },
    };
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleMore = this.handleMore.bind(this);
  }

  componentDidMount() {
    get('v1/products/men/suits?limit=8').then((data) => {
      this.setState({ data });
    });
  }

  handleDropdown() {
    this.setState({ isDropdown: !this.state.isDropdown });
  }

  handleMore() {
    const state = this.state.data;
    get(
      `v1/products/men/suits?limit=8&offset=${state.total - state.offset >= 8
        ? state.offset + 8
        : state.total - state.offset}`,
    ).then((response) => {
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          total: response.total,
          limit: response.limit,
          offset: response.offset,
          items: [...prevState.data.items, ...response.items],
        },
      }));
    });
  }

  render() {
    const { title, description, total } = this.state.data;
    const isMoreButtonShow =
      this.state.data.items.length !== this.state.data.total;
    return (
      <div>
        <Title title={title} content={description} />
        <Info title={title} description={description} />
        <Wrapper>
          <div className="container">
            <Inner overflowShow={this.state.isDropdown}>
              <Filter
                isDropdown={this.handleDropdown}
                name="Category"
                active={this.state.isDropdown}
              >
                <p>Category content</p>
                <button>Click me</button>
              </Filter>
              <Filter
                isDropdown={this.handleDropdown}
                name="Colour"
                active={this.state.isDropdown}
              >
                <p>Colour content</p>
                <button>Click me</button>
              </Filter>
              <Filter
                isDropdown={this.handleDropdown}
                name="Size"
                active={this.state.isDropdown}
              >
                <p>Size content</p>
                <button>Click me</button>
              </Filter>
              <Filter
                isDropdown={this.handleDropdown}
                name="Sort by price"
                active={this.state.isDropdown}
                right
              >
                <p>Sort by price content</p>
                <button>Click me</button>
              </Filter>
            </Inner>
          </div>
        </Wrapper>
        <ProductsWrapper overflowShow={this.state.isDropdown}>
          <div className="container">
            <div className="row">
              <Category
                title={title}
                total={total}
                data={this.state.data.items}
                currency={this.props.currency}
              />
            </div>
          </div>
          {isMoreButtonShow &&
            <More
              limit={this.state.data.items.length}
              total={this.state.data.total}
              moreFunction={this.handleMore}
            />}
        </ProductsWrapper>
      </div>
    );
  }
}

Filters.propTypes = {
  currency: PropTypes.string,
};

Filters.defaultProps = {
  currency: '',
};

export default Filters;
