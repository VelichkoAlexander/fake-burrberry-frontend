import React from 'react';
import styled from 'styled-components';
import { Xl } from '../common/responsive';
import Card from './Card';

const Wraper = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    @media (min-width: 48rem) {
      padding-top: 4rem;
    }
`;

const Title = styled.h2`
    margin: 0;
    margin-bottom: 1rem;
    font-family: "Lora", serif;
    font-size: 1rem;
    line-height: 1.1875rem;
    @media (min-width: 48rem) {
      margin-bottom: 2rem;
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
`;

export default () =>
  (<Wraper>
    <div className="container">
      <Title>Heritage Trench Coats</Title>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card
            id={1}
            src="995466e7e1113f3b2f6484ceb090072e1c9062dc"
            src2="61209850e00103530a1f7fcc7253515330cfaea8"
            title="The Westminster – Long Heritage Trench Coat"
            price={27000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            id={2}
            src="995466e7e1113f3b2f6484ceb090072e1c9062dc"
            src2="61209850e00103530a1f7fcc7253515330cfaea8"
            title="The Westminster – Long Heritage Trench Coat"
            price={27000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            id={3}
            src="995466e7e1113f3b2f6484ceb090072e1c9062dc"
            src2="61209850e00103530a1f7fcc7253515330cfaea8"
            title="The Westminster – Long Heritage Trench Coat"
            price={27000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            id={4}
            src="995466e7e1113f3b2f6484ceb090072e1c9062dc"
            src2="61209850e00103530a1f7fcc7253515330cfaea8"
            title="The Westminster – Long Heritage Trench Coat"
            price={27000}
          />
        </div>
      </div>
      <Xl>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <Card
              id={1}
              src="995466e7e1113f3b2f6484ceb090072e1c9062dc"
              src2="61209850e00103530a1f7fcc7253515330cfaea8"
              title="The Westminster – Long Heritage Trench Coat"
              price={27000}
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              id={2}
              src="995466e7e1113f3b2f6484ceb090072e1c9062dc"
              src2="61209850e00103530a1f7fcc7253515330cfaea8"
              title="The Westminster – Long Heritage Trench Coat"
              price={27000}
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              id={3}
              src="995466e7e1113f3b2f6484ceb090072e1c9062dc"
              src2="61209850e00103530a1f7fcc7253515330cfaea8"
              title="The Westminster – Long Heritage Trench Coat"
              price={27000}
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              id={4}
              src="995466e7e1113f3b2f6484ceb090072e1c9062dc"
              src2="61209850e00103530a1f7fcc7253515330cfaea8"
              title="The Westminster – Long Heritage Trench Coat"
              price={27000}
            />
          </div>
        </div>
      </Xl>
    </div>
  </Wraper>);