import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../images/arrow.svg';

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 9;
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

const CountrySelect = styled.select`
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
  appearance: none;
  z-index: 10;
  cursor: pointer;
`;

const countries = [
  {
    name: 'Russia (RUB)',
    value: 'ru',
  },
  {
    name: 'United Kingdom (£)',
    value: 'en',
  },
];

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.local };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.hendelLocal(event.target.value);
  }
  render() {
    return (
      <div>
        <SelectWrapper>
          <CountrySelect value={this.state.value} onChange={this.handleChange}>
            {countries.map((contry, index) =>
              (<option
                value={contry.value}
                key={index.toString()}
              >{`Shopping in: ${contry.name}`}</option>),
            )}
          </CountrySelect>
        </SelectWrapper>
      </div>
    );
  }
}

Select.propTypes = {
  hendelLocal: PropTypes.func,
  local: PropTypes.string,
};

Select.defaultProps = {
  hendelLocal: () => '',
  local: 'en',
};

export default Select;
