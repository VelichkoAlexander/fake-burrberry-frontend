import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    props.handleLocalChange(event.target.selectedIndex);
  };

  const options = props.options;

  return (
    <ButtonSelectStyled>
      <Button>{options[props.localeId].name}</Button>
      <SelectButton onChange={handleChange}>
        {options.map((option, index) => (
          <option value={index} key={index.toString()}>
            {option.name}
          </option>
        ))}
      </SelectButton>
    </ButtonSelectStyled>
  );
};

Select.propTypes = {
  localeId: PropTypes.number,
  handleLocalChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Select.defaultProps = {
  localeId: 0,
};

export default Select;
