/* eslint-disable react/style-prop-object */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import { Link } from 'react-router-dom';
import LikeIcon from './LikeIcon';

import {
  imageUrl,
  imageLg,
  imageMd,
  imageXs,
} from '../../common/ImageResponsive';

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

const Img = styled.img`
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
    <NavLink to={`/mens-clothing/mens-coats/${props.id}`}>
      <picture>
        <source
          media="(min-width: 62rem)"
          srcSet={`${imageUrl}${props.src}.jpg${imageLg} 1x`}
        />
        <source
          media="(min-width: 48rem)"
          srcSet={`${imageUrl}${props.src}.jpg${imageMd} 1x`}
        />
        <source
          media="(min-width: 20rem)"
          srcSet={`${imageUrl}${props.src}.jpg${imageXs} 1x`}
        />
        <Img src={`${imageUrl}${props.src}.jpg${imageLg}`} alt={props.title} />
      </picture>
    </NavLink>
    <Inner>
      <Type>{props.type}</Type>
      <LikeIcon width="14" height="14" />
    </Inner>
    <Title to={`/mens-clothing/mens-coats/${props.id}`}>{props.title}</Title>
    <Availability>
      Available in{' '}
      <ColorLink to={`/mens-clothing/mens-coats/${props.id}`}>
        {props.colors} colours
      </ColorLink>
    </Availability>
    <Price>
      <FormattedNumber
        value={props.price}
        style="currency"
        currency="RUB"
        minimumFractionDigits={0}
      />
    </Price>
  </Wraper>
);

Card.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  colors: PropTypes.number,
};

Card.defaultProps = {
  id: 1,
  src: '',
  type: 'Relaxed fit',
  title: 'title',
  price: 0,
  colors: 3,
};

export default Card;
