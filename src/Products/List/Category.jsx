import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { coloursCount } from '../../common/helpers';
import Card from '../Card';

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
  font-family: 'Lora', serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
  @media (min-width: 48rem) {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const Available = styled.span`
  font-family: 'Lora', serif;
  font-size: 0.875rem;
`;

export default function Category(props) {
  const list = props.data.map((item, i) => (
    <div className="col-xs-6 col-md-3" key={i.toString()}>
      <Card
        image={item.images[0]}
        title={item.title}
        colours={coloursCount(item.colours.length)}
        slug={item.slug}
        price={item.multiCurrencyPrices[props.currency] / 100}
        currency={props.currency}
      />
    </div>
  ));

  return (
    <Wraper>
      <div className="container">
        <Title>{props.title}
          {props.total !== 0 &&
            (<Available> — {props.total} available</Available>)
          }
        </Title>
        <div className="row">{list}</div>
      </div>
    </Wraper>
  );
}

Category.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      slug: PropTypes.string,
      multiCurrencyPrices: PropTypes.objectOf(
        PropTypes.string,
      ),
      colours: PropTypes.arrayOf(
        PropTypes.shape({
          heroSrc: PropTypes.string,
          value: PropTypes.string,
          src: PropTypes.string,
        }),
      ),
      sizes: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          id: PropTypes.string,
        }),
      ),
      description: PropTypes.string,
      details: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.string,
      ),
      linkedProductIds: PropTypes.arrayOf(
        PropTypes.string,
      ),
    }),
  ).isRequired,
  currency: PropTypes.string,
};

Category.defaultProps = {
  title: 'Category',
  total: 0,
  data: [],
  currency: 'RUB',
};
