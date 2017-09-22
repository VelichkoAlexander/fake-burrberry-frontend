import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
  padding-top: 2rem;
  @media (min-width: 48rem) {
    padding-top: 1.125rem;
    padding-bottom: 5.125rem;
  }
`;

const Showing = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 19px;
  font-family: 'Lora', serif;
  @media (min-width: 48rem) {
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
`;
const Button = styled.button`
  padding: calc(1rem - 0.0625rem) calc(2rem - 0.0625rem);
  display: block;
  font-size: 0.75rem;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1rem;
  border-radius: 0.125rem;
  border: solid 1px #171717;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover{
    background-color:#171717;
    color: #fff;
  }
`;

const ViewMore = props => (
  <Wrapper>
    <Showing>Showing {props.limit } of {props.total}</Showing>
    <Button
      onClick={props.moreFunction}
      type="button"
    >
      View {props.total - props.limit} more
    </Button>
  </Wrapper>
);


ViewMore.propTypes = {
  limit: PropTypes.number,
  total: PropTypes.number,
  moreFunction: PropTypes.func.isRequired,
};

ViewMore.defaultProps = {
  limit: 0,
  total: 0,
};


export default ViewMore;
