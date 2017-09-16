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
  const list = props.data.map((product, i) =>
    (<div className="col-xs-6 col-md-3" key={i.toString()}>
      <Card
        image={product.images[0]}
        title={product.title}
        colours={coloursCount(product.colours.length)}
        to={`${props.to}${product.slug}`}
        price={product.multiCurrencyPrices}
      />
    </div>),
  );

  return (
    <Wraper>
      <div className="container">
        <Title>
          {props.title}
          {props.total !== 0 &&
            <Available>
              {' '}— {props.total} available
            </Available>}
        </Title>
        <div className="row">
          {list}
        </div>
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
      multiCurrencyPrices: PropTypes.objectOf(PropTypes.string),
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
      images: PropTypes.arrayOf(PropTypes.string),
      linkedProductIds: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  to: PropTypes.string.isRequired,
};

Category.defaultProps = {
  title: 'Category',
  total: 0,
  data: [],
  currency: 'RUB',
};
