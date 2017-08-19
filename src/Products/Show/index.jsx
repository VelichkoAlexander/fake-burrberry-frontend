import React from 'react';
import styled from 'styled-components';

import { XsOnly, Xl, Lg } from '../../common/Responsive';

import Header from './Header';
import Image from './InfoImage';
import InfoBlock from './InfoBlock';
import Delivery from './Delivery';
import Suggest from './Suggest';
import More from './More';

const Line = styled.hr`
  margin: 0;
  border: 0;
  border-top: solid 0.0625rem #c6c6c6;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const Wraper = styled.div`
  .col-lg-4:nth-child(3) img {
    margin-top: 2rem;
  }

  .col-lg-4:nth-child(4) img {
    margin-top: 6rem;
  }
`;

export default () =>
  (<div>
    <Header />
    <Wraper className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <InfoBlock title="Description" />
        </div>
        <div className="col-lg-8">
          <Lg>
            <Image nameItem="1" />
          </Lg>
        </div>
        <div className="col-lg-4">
          <Lg>
            <Image nameItem="2" />
          </Lg>
        </div>
        <div className="col-lg-4">
          <Lg>
            <Image nameItem="3" />
          </Lg>
        </div>
        <div className="col-lg-4">
          <Lg>
            <Image nameItem="4" />
          </Lg>
        </div>
      </div>
    </Wraper>
    <Line />
    <div className="container">
      <XsOnly>
        <InfoBlock title="Delivery" />
      </XsOnly>
    </div>
    <Line />
    <Xl>
      <Delivery />
    </Xl>
    <Suggest />
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <More />
        </div>
      </div>
    </div>
  </div>);
