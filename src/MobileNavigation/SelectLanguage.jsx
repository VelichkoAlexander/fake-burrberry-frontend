import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonSelectStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: .5rem;
  border: 1px solid #171717;
  border-radius: 2px;
`;

const SelectButton = styled.select`
  padding: .875rem;
  font-size: .75rem;
  line-height: 1.33;
  opacity: 0;
`;

const Button = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  width: 100%;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  line-height: 1.33;
  text-align: center;
`;

const SelectLanguage = (props) => {
  const options = props.options;

  return (
    <ButtonSelectStyled>
      <Button>
        {options[0]}
      </Button>
      <SelectButton>
        {options.map((option, index) =>
          (<option key={index.toString()}>
            {option}
          </option>),
        )}
      </SelectButton>
    </ButtonSelectStyled>
  );
};


SelectLanguage.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectLanguage;
