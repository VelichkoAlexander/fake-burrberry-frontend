import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { supportedLanguages } from '../data/Data';
import changeLocaleId from '../Products/actionTypes';

const ButtonSelectStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  border: 1px solid #171717;
  border-radius: 2px;
`;

const SelectButton = styled.select`
  padding: 0.875rem;
  font-size: 0.75rem;
  line-height: 1.33;
  opacity: 0;
`;

const Button = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  width: 100%;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.75rem;
  line-height: 1.33;
  text-align: center;
`;

const Select = ({ localeId, dispatch }) => {
  const handleChange = (event) => {
    dispatch(changeLocaleId(event.target.selectedIndex));
  };

  return (
    <ButtonSelectStyled>
      <Button>
        {supportedLanguages[localeId].name}
      </Button>
      <SelectButton onChange={handleChange}>
        {supportedLanguages.map((option, index) =>
          (<option key={index.toString()}>
            {option.name}
          </option>),
        )}
      </SelectButton>
    </ButtonSelectStyled>
  );
};

Select.propTypes = {
  localeId: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

Select.defaultProps = {
  localeId: 0,
};

export default connect(state => ({ localeId: state.localeId }))(Select);
