/* eslint-disable react/style-prop-object */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

import hart from '../images/hart.svg';
import { imageLg, imageMd, imageXs } from '../common/imageResponsive';

const Wraper = styled.div `
    margin-bottom: 2rem;
    font-size: 0.75rem;
    line-height: 1rem;
`;

const Link = styled.a `
    display: block;
    margin-bottom: 1rem;
`;

const Img = styled.img `
    width: 100%;
    height: auto;
    display: block;
`;

const Inner = styled.div `
    display: flex;
    margin-bottom: 0.5rem;
    justify-content: space-between;
    align-items: center;
`;

const Type = styled.div `
    font-size: 0.75rem;
    line-height: 1rem;

`;

const Favourite = styled.button `
    padding: 0;
    font-size: 0;
    background-color: transparent;
    border: none;
    width: 0.875rem;
    height: 0.875rem;
    background: url(${hart}) center no-repeat;
`;

const Title = styled.h3 `
    margin: 0;
    padding-bottom: 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
    color: #171717;
`;

const Price = styled.div `
    margin-bottom: 1rem;
`;
const Availability = styled.div `
    margin-bottom: 0.3125rem;
`;
const ColorLink = styled.a `
    color: #171717;
    line-height: 1rem;


`;

export default function Card(props) {
  return (<Wraper>
    <Link href={props.link}>
      <picture>
        <source
          media="(min-width: 62rem)"
          srcSet={`${props.src}${imageLg} 1x`}
        />
        <source
          media="(min-width: 48rem)"
          srcSet={`${props.src}${imageMd} 1x`}
        />
        <source
          media="(min-width: 48rem)"
          srcSet={`${props.src}${imageXs} 1x`}
        />
        <Img
          src={`${props.src}${imageXs}`}
          alt={props.title}
        />
      </picture>
    </Link>
    <Inner>
      <Type>{props.type}</Type>
      <Favourite>Favourite</Favourite>
    </Inner>
    <Title>
      {props.title}
    </Title>
    <Availability>
      Available in <ColorLink href={props.link}>{props.colors} colours</ColorLink>
    </Availability>
    <Price>
      <FormattedNumber
        value={props.price}
        style="currency"
        currency="RUB"
        minimumFractionDigits={0}
      />
    </Price>
  </Wraper>);
}

Card.propTypes = {
  link: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  colors: PropTypes.number,
};

Card.defaultProps = {
  link: '',
  src: '',
  type: 'Classic fit',
  title: 'title',
  price: 0,
  colors: 3,
};
