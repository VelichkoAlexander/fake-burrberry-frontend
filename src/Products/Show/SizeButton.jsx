import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  display: flex;
  margin: 0;
  margin-right: 0.5rem;
  padding: 0.4375rem 1rem;
  font-weight: ${props => (props.isActive ? '700' : '400')};
  font-size: 0.75rem;
  line-height: 1rem;
  text-transform: uppercase;
  color: #171717;
  background-color: transparent;
  border: 1px solid #171717;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    //font-weight: 700;
  }
`;

export default function SizeButton(props) {
  return (
    <Button
      id={props.id}
      type="button"
      onClick={props.onClick}
      isActive={props.isActive}
    >
      {props.name}
    </Button>
  );
}

SizeButton.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.number,
};

SizeButton.defaultProps = {
  onClick: () => '',
  isActive: false,
  name: 'L',
  id: 0,
};
