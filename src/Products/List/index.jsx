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
  @media (min-width: 48rem) {
    margin-top: 0.125rem;
    margin-bottom: 0;
  }
`;

export default () =>
  (<div>
    <Info />
    <div className="container">
      <div className="row">
        <Category title="Heritage Trench Coats" data={dataSet1} />
        <div className="col-md-12">
          <Line />
        </div>
        <Category title="Single Breasted Trench Coats" data={dataSet2} />
      </div>
    </div>
    <More />
  </div>);
