import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Select = (props) => {
  const handleChange = (event) => {
    props.handleLocalChange(event.target.selectedIndex);
  };

  const options = props.options;

  return (
    <SelectWrapper>
      <CountryButton>
        {props.label}: {options[props.localeId].name}
      </CountryButton>
      <CountrySelect onChange={handleChange}>
        {options.map((option, index) =>
          (<option value={index} key={index.toString()}>
            {props.label}: {option.name}
          </option>),
        )}
      </CountrySelect>
    </SelectWrapper>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  localeId: PropTypes.number,
  handleLocalChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

Select.defaultProps = {
  label: 'Language',
  options: [],
  localeId: 0,
};

export default Select;
