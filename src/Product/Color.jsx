import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './ColorButton';

const Color = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  @media (min-width: 48rem) {
    padding: 0;
    margin: 0;
  }
`;

const Current = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;

const Options = styled.div`
  display: flex;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: solid 0.0625rem #c6c6c6;
  @media (min-width: 62rem) {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 1.5rem;
  }
`;

const Name = styled.span`font-weight: 700;`;

export default function color(props) {
  return (<Color>
    <Current>
      Colour: <Name>{props.currentColor}</Name>
    </Current>
    <Options>
      <Button name="black" color="#232122" />
      <Button name="honey" color="#cfa880" active />
    </Options>
  </Color>);
}
color.propTypes = {
  currentColor: PropTypes.string,
};
color.defaultProps = {
  currentColor: 'Honey',
};
