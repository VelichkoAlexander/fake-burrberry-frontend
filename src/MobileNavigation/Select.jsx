import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

const Select = (props) => {
  const handleChange = (event) => {
    props.onAddLocaleID(event.target.selectedIndex);
  };

  const { lang } = props.localStore;
  const { localeId } = props.localStore;
  return (
    <ButtonSelectStyled>
      <Button>
        {lang[localeId].name}
      </Button>
      <SelectButton onChange={handleChange}>
        {lang.map((option, index) =>
          (<option key={index.toString()}>
            {option.name}
          </option>),
        )}
      </SelectButton>
    </ButtonSelectStyled>
  );
};

Select.propTypes = {
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
