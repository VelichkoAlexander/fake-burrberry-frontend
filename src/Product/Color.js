import React from 'react';
import styled from 'styled-components';

const Color = styled.div `
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    @media(min-width: 48rem) {
      padding: 0;
      margin: 0;
  }
  `;

const Current = styled.p `
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
  `;

const Button = styled.button`
    display: block;
    padding: 0;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
    font-size: 0;
    border-radius: 50%;
    border: solid 0.0625rem transparent;
    background: ${props => props.black ? '#232122' : '#cfa880'};
    border-color: ${props => props.active ? '#232122' : 'transparent'}
  `;

export default (props) => {
  return (
    <Color>
      <Current>Colour: {props.currentColor}</Current>
      <Options>
        <Button type="button" black>Color black</Button>
        <Button type="button" active>Color honey</Button>
      </Options>
    </Color>
  )
}