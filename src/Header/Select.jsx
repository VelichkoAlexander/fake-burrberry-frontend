import React, { Component } from 'react';
import styled from 'styled-components';

import arrow from '../images/arrow.svg';

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const CountrySelect = styled.select`
  padding: 0;
  display: block;
  position: absolute;
  top: 0;
  border: none;
  background-color: transparent;
  font-size: 0.75rem;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1rem;
  font-weight: 500;
  color: #999999;
  width: 100%;
  appearance: none;
  cursor: pointer;
  opacity: 0;
`;

const CountryButton = styled.button`
  padding: 0;
  padding-right: 1.4375rem;
  display: block;
  border: none;
  position: relative;
  background-color: transparent;
  font-size: 0.75rem;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1rem;
  font-weight: 500;
  color: #999999;
  white-space: nowrap;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0.75rem;
    height: 0.375rem;
    transform: translateY(-50%);
    background: url(${arrow}) center no-repeat;
  }
`;

const countries = ['Russian Federation (₽)', 'United Kingdom (£)'];

class Select extends Component {
  constructor() {
    super();
    this.state = { country: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ country: event.target.value });
  }

  render() {
    return (
      <SelectWrapper>
        <CountryButton>
          Shopping in: {countries[this.state.country]}
        </CountryButton>
        <CountrySelect onChange={this.handleChange}>
          {countries.map((country, index) =>
            (<option
              value={index}
              key={index.toString()}
            >{`Shopping in: ${country}`}</option>),
          )}
        </CountrySelect>
      </SelectWrapper>
    );
  }
}

export default Select;
