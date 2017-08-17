import React from 'react';
import styled from 'styled-components';

import Info from './Info';
import Category from './Category';
import More from './ViewMore';

const Line = styled.hr `
    margin: 0;
    margin-bottom: 1rem;
    height: 1px;
    border: none;
    background-color: #c6c6c6;
`;

export default () =>
  (
    <div>
      <Info />
      <Category />
      <div className="container">
        <Line />
      </div>
      <Category />
      <More />
    </div>
  );
