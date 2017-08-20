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
`;

export default function ColorButton(props) {
  return (
    <Button type="button" active={props.active} value={props.color}>
      Color {props.name}
    </Button>
  );
}

ColorButton.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
  color: PropTypes.string,
};

ColorButton.defaultProps = {
  active: false,
  name: 'black',
  color: '#232122',
};
