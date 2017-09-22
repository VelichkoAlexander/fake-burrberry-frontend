/* eslint-disable react/style-prop-object */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import { Link } from 'react-router-dom';
import LikeIcon from './LikeIcon';
import { imageProportion } from '../../common/helpers';
import { supportedLanguages } from '../../data/Data';

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
  flex-direction: column;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  @media (min-width: 48rem) {
    max-width: 8.5rem;
  }
  @media (min-width: 62rem) {
    max-width: 12.5rem;
  }
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
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  @media (min-width: 62rem) {
    font-size: 1rem;
    line-height: 1.25rem;
    
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

const Info = styled.div`display: flex;`;

const LikeWrap = styled.div`
  margin-left: auto;
  padding-top: 0.1875rem;
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
    const label = (
      <Type>
        {this.props.type}
      </Type>
    );
    const { currency } = supportedLanguages[this.props.localeId];
    return (
      <Wraper show={this.state.isImageLoaded}>
        <NavLink to={this.props.to}>
          <ProductImage
            src={imageProportion(this.props.image)}
            alt={this.props.title}
            onLoad={this.handleImageLoaded}
          />
        </NavLink>
        <Info>
          <Inner>
            {this.props.type && label}
            <Title to={this.props.to}>
              {this.props.title}
            </Title>

            <Availability>
              Available in{' '}
              <ColorLink to={this.props.to}>{this.props.colours}</ColorLink>
            </Availability>
            <Price>
              <FormattedNumber
                value={this.props.price[currency] / 100}
                style="currency"
                currency={currency}
                minimumFractionDigits={0}
              />
            </Price>
          </Inner>
          <LikeWrap>
            <LikeIcon width="14" height="14" />
          </LikeWrap>
        </Info>
      </Wraper>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  colours: PropTypes.string,
  to: PropTypes.string,
  price: PropTypes.objectOf(PropTypes.string),
  localeId: PropTypes.number,
};

Card.defaultProps = {
  image: '',
  type: '',
  title: 'title',
  price: [],
  colours: [],
  to: '',
  localeId: 0,
};

export default connect(state => ({ localeId: state.localeId }))(Card);
