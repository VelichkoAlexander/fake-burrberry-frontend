import React from 'react';
import styled, { keyframes } from 'styled-components';

const AppLoader = styled.div`
  top: 0;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: #fff;
  z-index: 9999;
`;
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderSpinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #171717;
  border-radius: 50%;
  animation: ${spin} .7s linear infinite;
`;

const Spinner = () =>
  (<AppLoader>
    <LoaderSpinner />
  </AppLoader>);

export default Spinner;
