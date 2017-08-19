import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Xl } from '../../common/Responsive';
import Card from './Card';

const Wraper = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  @media (min-width: 48rem) {
    padding-top: 4rem;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  font-family: "Lora", serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
  @media (min-width: 48rem) {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

export default function Categoty(props) {
  return (
    <Wraper>
      <div className="container">
        <Title>
          {props.title}
        </Title>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <Card
              id={1}
              src="995466e7e1113f3b2f6484ceb090072e1c9062dc"
              title="The Westminster – Long Heritage Trench Coat"
              price={27000}
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              id={2}
              src="90dd344122ccf1884fce63c4fc775bd6baa7a11f"
              title="The Westminster – Long Heritage Trench Coat"
              price={27000}
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              id={3}
              src="fb6adea94455f2a73e97b5cf2d7811d9135dcbe2"
              title="The Westminster – Long Heritage Trench Coat"
              price={27000}
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              id={4}
              src="a2fa084eae958434c326685fc8ff19dfce9fe430"
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
                id={5}
                src="f1cdf8b71c19df8d42ed3ea90712c391e6823635"
                title="The Westminster – Long Heritage Trench Coat"
                price={27000}
              />
            </div>
            <div className="col-xs-6 col-md-3">
              <Card
                id={6}
                src="23b186def7725e3d4ce4745374ebf11267ed68ed"
                title="The Westminster – Long Heritage Trench Coat"
                price={27000}
              />
            </div>
            <div className="col-xs-6 col-md-3">
              <Card
                id={7}
                src="c89a32c4e94178be2d833b9a3d434fa6087d1f25"
                title="The Westminster – Long Heritage Trench Coat"
                price={27000}
              />
            </div>
            <div className="col-xs-6 col-md-3">
              <Card
                id={8}
                src="f3e96bbcf8fa0aca509c9f5933110b8596d4f06e"
                title="The Westminster – Long Heritage Trench Coat"
                price={27000}
              />
            </div>
          </div>
        </Xl>
      </div>
    </Wraper>
  );
}

Categoty.propTypes = {
  title: PropTypes.string,
};

Categoty.defaultProps = {
  title: 'title',
};
