import React from 'react';
import styled from 'styled-components';

const Current = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Help = styled.button`
  display: flex;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  text-transform: uppercase;
  color: #171717;
  background-color: transparent;
  border: none;

  @media only screen and (min-width: 48rem) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const Button = styled.button`
  display: flex;
  margin: 0;
  margin-right: 0.5rem;
  margin-bottom: 0;
  padding: 0.4375rem 1rem;
  font-weight: ${props => (props.active ? '700' : '400')};
  font-size: 0.75rem;
  line-height: 1rem;
  text-transform: uppercase;
  color: #171717;
  background-color: transparent;
  border: 1px solid #171717;
  border-radius: 2px;
  &:last-child {
    margin-right: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Options = styled.div`display: flex;`;

const Size = styled.div``;

const Name = styled.span`font-weight: 700;`;

export default function() {
  return (
    <Size>
      <Wrapper>
        <Current>
          Size: <Name>XL</Name>
        </Current>
        <Help help type="button">
          Need Size Help?
        </Help>
      </Wrapper>
      <Options>
        <Button size="S" type="button">
          S
        </Button>
        <Button size="M" type="button">
          M
        </Button>
        <Button size="L" type="button">
          L
        </Button>
        <Button active size="XL" type="button">
          XL
        </Button>
      </Options>
    </Size>
  );
}
