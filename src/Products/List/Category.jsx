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
    padding-bottom: 1.875rem;
  }
  @media (min-width: 62rem) {
    padding-bottom: 1.875rem;
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
  const list = props.data.map((item, i) => {
    if (i < 4) {
      return (
        <div className="col-xs-6 col-md-3" key={i.toString()}>
          <Card
            src={item.src}
            title={item.title}
            colors={item.colors}
            price={item.price}
          />
        </div>
      );
    }
    return (
      <div className="col-xs-6 col-md-3" key={i.toString()}>
        <Xl>
          <Card
            src={item.src}
            title={item.title}
            colors={item.colors}
            price={item.price}
          />
        </Xl>
      </div>
    );
  });

  return (
    <Wraper>
      <div className="container">
        <Title>
          {props.title}
        </Title>
        <div className="row">
          {list}
        </div>
      </div>
    </Wraper>
  );
}

Categoty.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

Categoty.defaultProps = {
  title: 'title',
  data: [],
};
