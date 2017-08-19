import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  @media (min-width: 48rem) {
    margin-top: 3rem;
  }
`;

const Showing = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 19px;
  font-family: "Lora", serif;
  @media (min-width: 48rem) {
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
`;
const Button = styled.button`
  padding: calc(1rem - 0.0625rem) calc(2rem - 0.0625rem);
  font-size: 0.75rem;
  line-height: 1rem;
  border-radius: 0.125rem;
  border: solid 1px #171717;
  background-color: transparent;
  cursor: pointer;
`;

export default () =>
  (<Wrapper>
    <Showing>Showing 8 of 17</Showing>
    <Button type="button">View 9 more</Button>
  </Wrapper>);
