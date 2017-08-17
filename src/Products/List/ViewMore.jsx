import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  margin-bottom: 5rem;
`;

const Sowing = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.875;
  font-family: "Lora", serif;
  @media (min-width: 48rem) {
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 0.75rem;
  line-height: 1rem;
  border-radius: 0.125rem;
  border: solid 1px #171717;
  background-color: transparent;
  cursor: pointer;
`;

export default () =>
  (<Wrapper>
    <Sowing>Showing 8 of 17</Sowing>
    <Button type="button">View 9 more</Button>
  </Wrapper>);
