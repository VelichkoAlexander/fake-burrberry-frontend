import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 0;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  font-size: 0;
  border-radius: 50%;
  border: solid 0.0625rem transparent;
  background: ${props => props.value};
  border-color: ${props => (props.active ? '#232122' : 'transparent')};
  transition: border-color .2s linear;
  cursor: pointer;
`;

export default function ColorButton(props) {
  return (
    <Button
      onClick={props.onClick}
      type="button"
      active={props.isActive}
      value={props.color}
      id={props.id}
    >
      Color {props.name}
    </Button>
  );
}

ColorButton.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  name: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.number,
};

ColorButton.defaultProps = {
  onClick: () => '',
  isActive: false,
  name: 'black',
  color: '#232122',
  id: 0,
};
