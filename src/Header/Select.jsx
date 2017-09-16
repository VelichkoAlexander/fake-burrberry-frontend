import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
    props.onAddLocaleID(event.target.selectedIndex);
  };

  const { lang } = props.localStore;
  const { localeId } = props.localStore;
  return (
    <SelectWrapper>
      <CountryButton>
        {props.label}: {lang[localeId].name}
      </CountryButton>
      <CountrySelect onChange={handleChange}>
        {lang.map((option, index) =>
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
  localStore: PropTypes.objectOf(
    PropTypes.shape({
      lang: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          value: PropTypes.string,
          currency: PropTypes.string,
        }),
      ),
      localeId: PropTypes.number,
    }),
  ).isRequired,
  onAddLocaleID: PropTypes.func.isRequired,
};

Select.defaultProps = {
  label: 'Language',
};

export default connect(
  state => ({
    localStore: state,
  }),
  dispatch => ({
    onAddLocaleID: (localeId) => {
      dispatch({ type: 'ADD_LOCALE_ID', payload: localeId });
    },
  }),
)(Select);
