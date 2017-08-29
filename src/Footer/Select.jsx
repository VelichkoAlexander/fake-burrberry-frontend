import React from 'react';
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

const shippingCountry = [
  {
    name: 'Russian Federation',
    value: 'ru',
  },
  {
    name: 'United Kingdom',
    value: 'en',
  },
];

const FooterSelect = props =>
  (<SelectWraper>
    <Label>
      {props.label}:{' '}
      <Button value="ru">
        {shippingCountry.map((country, index) =>
          (<option value={country.value} key={index.toString()}>
            {country.name}
          </option>),
        )}
      </Button>
    </Label>
  </SelectWraper>);

FooterSelect.propTypes = {
  label: PropTypes.string,
};

FooterSelect.defaultProps = {
  label: 'Language',
};

export default FooterSelect;
