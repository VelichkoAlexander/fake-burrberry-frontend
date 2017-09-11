/* eslint-disable react/style-prop-object */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import { Link } from 'react-router-dom';
import LikeIcon from './LikeIcon';
import { imageProportion } from '../../common/helpers';

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const NavLink = styled(Link)`
  display: block;
  margin-bottom: 1rem;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Inner = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

const Type = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
`;


const Title = styled(Link)`
  margin: 0;
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  text-decoration: none;
  font-weight: 600;
  color: #171717;
  @media (min-width: 48rem) {
    max-width: 8.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  @media (min-width: 62rem) {
    font-size: 1rem;
    line-height: 1.25rem;
    max-width: 12.5rem;
  }
`;

const Price = styled.div`margin-bottom: 0;`;
const Availability = styled.div`margin-bottom: 0.3125rem;`;
const ColorLink = styled(Link)`
  color: #171717;
  line-height: 1rem;

  border-bottom: 1px solid #171717;
  text-decoration: none;
`;

const Card = props => (
  <Wraper>
    <NavLink to={`/mens-clothing/mens-coats/${props.slug}`}>
      <ProductImage src={imageProportion(props.image)} alt={props.title} />
    </NavLink>
    <Inner>
      <Type>{props.type}</Type>
      <LikeIcon width="14" height="14" />
    </Inner>
    <Title to={`/mens-clothing/mens-coats/${props.slug}`}>{props.title}</Title>
    <Availability>
      Available in{' '}
      <ColorLink to={`/mens-clothing/mens-coats/${props.slug}`}>
        {props.colours}
      </ColorLink>
    </Availability>
    <Price>
      <FormattedNumber
        value={props.price}
        style="currency"
        currency={props.currency}
        minimumFractionDigits={0}
      />
    </Price>
  </Wraper>
);

Card.propTypes = {
  slug: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  colours: PropTypes.string,
  currency: PropTypes.string,
};

Card.defaultProps = {
  slug: '',
  image: '',
  type: 'Relaxed fit',
  title: 'title',
  price: 0,
  colours: [],
  currency: '',
};

export default Card;
