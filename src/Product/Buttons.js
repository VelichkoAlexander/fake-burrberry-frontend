import React from 'react';
import styled from 'styled-components';
import Responsive from 'react-responsive';

const Desktop = ({ children }) =>
  <Responsive minWidth={992} children={children} />;
const Mobile = ({ children }) =>
  <Responsive maxWidth={992} children={children} />;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding-bottom: 3rem;
  @media (min-width: 48rem) {
    padding: 0;
    margin: 0;
  }
  @media only screen and (min-width: 62rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Button = styled.button`
  display: block;
  padding: 0;
  margin-bottom: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  border-radius: 0.125rem;
  border: solid 0.0625rem #999999;
  background: ${props => (props.primary ? '#171717' : 'transparent')};
  color: ${props => (props.primary ? 'white' : '#000')};
  border-color: ${props => (props.primary ? '#171717' : '#999999')};
  @media only screen and (min-width: 62rem) {
    flex-basis: calc((100% - 1rem) / 2);
    border-color: #171717;
  }
`;

const Help = styled.button`
  margin-top: 0.5rem;
  align-self: flex-start;
  background-color: #fff;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
  padding: 0;
  border: 0;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export default () => {
  return (
    <Wrap>
      <Mobile>
        <Button type="button" primary>
          Select a size
        </Button>
      </Mobile>
      <Desktop>
        <Button type="button" primary>
          Add to bag
        </Button>
      </Desktop>
      <Button type="button">Find in store</Button>
      <Mobile>
        <Help type="button">Need size help?</Help>
      </Mobile>
    </Wrap>
  );
};
