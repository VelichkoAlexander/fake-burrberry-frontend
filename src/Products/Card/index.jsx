/* eslint-disable react/style-prop-object */

import React, { Component } from 'react';
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
  opacity: ${props => (props.show ? '1' : '0')};
  transition: opacity .3s linear;
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
  align-items:  ${props => (props.isLabel ? 'center' : '')};
  flex-direction: ${props => (props.isLabel ? 'row' : 'row-reverse;')};
  
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

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { isImageLoaded: false };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  handleImageLoaded() {
    this.setState({ isImageLoaded: true });
  }

  render() {
    const label = (<Type>{this.props.type}</Type>);
    return (
      <Wraper show={this.state.isImageLoaded}>
        <NavLink to={`/mens-clothing/mens-coats/${this.props.slug}`}>
          <ProductImage
            src={imageProportion(this.props.image)}
            alt={this.props.title}
            onLoad={this.handleImageLoaded}
          />
        </NavLink>
        <Inner isLabel={this.props.type}>
          {this.props.type && label}
          <LikeIcon width="14" height="14" />
          <Title to={`/mens-clothing/mens-coats/${this.props.slug}`}>{this.props.title}</Title>
        </Inner>
        <Availability>
            Available in{' '}
          <ColorLink to={`/mens-clothing/mens-coats/${this.props.slug}`}>
            {this.props.colours}
          </ColorLink>
        </Availability>
        <Price>
          <FormattedNumber
            value={this.props.price}
            style="currency"
            currency={this.props.currency}
            minimumFractionDigits={0}
          />
        </Price>
      </Wraper>);
  }
}


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
  type: '',
  title: 'title',
  price: 0,
  colours: [],
  currency: '',
};

export default Card;
