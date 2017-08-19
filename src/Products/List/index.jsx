import React from 'react';
import styled from 'styled-components';

import Info from './Info';
import Category from './Category';
import More from './ViewMore';

import { dataSet1, dataSet2 } from '../../data/Data';

const Line = styled.hr`
  margin: 0;
  margin-bottom: 1rem;
  height: 1px;
  border: none;
  background-color: #c6c6c6;
`;

export default () =>
  (<div>
    <Info />
    <Category title="Heritage Trench Coats" data={dataSet1} />
    <div className="container">
      <Line />
    </div>
    <Category title="Single Breasted Trench Coats" data={dataSet2} />
    <More />
  </div>);
