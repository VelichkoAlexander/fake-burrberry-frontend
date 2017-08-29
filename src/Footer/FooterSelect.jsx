/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectWraper = styled.div`
  display: block;
  margin-bottom: 1rem;
  padding: 0;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 48rem) {
    display: inline;
    margin-right: 1.5rem;
    margin-bottom: 2rem;
    line-height: 1rem;
    border: 0;
  }
  @media (min-width: 62rem) {
    margin-right: 3rem;
  }
`;
const Button = styled.select`
  display: inline-block;
  padding: 0;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1rem;
  font-size: 0.75rem;
  color: #171717;
  text-decoration: none;
  text-align: left;
  border: 0;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
`;

const Label = styled.label`
  padding: 0;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1rem;
  font-size: 0.75rem;
  color: #999999;
  text-decoration: none;
`;

class FooterSelect extends Component {
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
      <SelectWraper>
        <Label>
          {`${this.props.label}: `}
          <Button value={this.state.value} onChange={this.handleChange}>
            {this.props.values.map((contry, index) =>
              (<option
                value={contry.value}
                key={index.toString()}
              >{` ${contry.name}`}</option>),
            )}
          </Button>
        </Label>
      </SelectWraper>
    );
  }
}

FooterSelect.propTypes = {
  hendelLocal: PropTypes.func,
  local: PropTypes.string,
  label: PropTypes.string,
  values: PropTypes.array.isRequired,
};

FooterSelect.defaultProps = {
  hendelLocal: () => '',
  local: 'en',
  label: 'Language',
  values: [],
};

export default FooterSelect;
