/* eslint-disable react/style-prop-object */

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import { Link } from 'react-router-dom';

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

const Favourite = styled.button`
  padding: 0;
  font-size: 0;
  background-color: transparent;
  border: none;
  width: 0.875rem;
  height: 0.875rem;
  cursor: pointer;
`;

const Path = styled.path`
  fill: ${props => (props.fill ? '#000' : 'none')};
  stroke: #000;
  stroke-width: 1px;
`;

const Title = styled.a`
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

const Price = styled.div`
  margin-bottom: 0.9375rem;
  @media (min-width: 62rem) {
    margin-bottom: 0;
  }
`;
const Availability = styled.div`margin-bottom: 0.3125rem;`;
const ColorLink = styled.a`
  color: #171717;
  line-height: 1rem;

  border-bottom: 1px solid #171717;
  text-decoration: none;
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { favourite: false };
    this.handleFavourite = this.handleFavourite.bind(this);
  }

  handleFavourite() {
    this.setState(() => ({ favourite: !this.state.favourite }));
  }

  render() {
    return (
      <Wraper>
        <NavLink
          to={`/mens-coats/${this.props.id}`}
          onMouseOver={this.handleHover}
          onMouseOut={this.handleHover}
        >
          <picture>
            <source
              media="(min-width: 62rem)"
              srcSet={`${imageUrl}${this.props.src}.jpg${imageLg} 1x`}
            />
            <source
              media="(min-width: 48rem)"
              srcSet={`${imageUrl}${this.props.src}.jpg${imageMd} 1x`}
            />
            <source
              media="(min-width: 20rem)"
              srcSet={`${imageUrl}${this.props.src}.jpg${imageXs} 1x`}
            />
            <Img
              src={`${imageUrl}${this.props.src}.jpg${imageLg}`}
              alt={this.props.title}
            />
          </picture>
        </NavLink>
        <Inner>
          <Type>
            {this.props.type}
          </Type>
          <Favourite onClick={this.handleFavourite}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fill={this.state.favourite}
                d="M1.724 7.342l5.3 5.71 5.32-5.732c1.403-1.512
               1.403-3.995 0-5.507C10.94.3 8.656.3 7.233 1.813L7
                2.06l-.23-.247C5.37.28 3.086.28 1.66 1.768.236 3.258.236 5.74
                 1.618 7.275l.042.022.063.045z"
              />
            </svg>
            Favourite
          </Favourite>
        </Inner>
        <Title href={`/mens-coats/${this.props.id}`}>
          {this.props.title}
        </Title>
        <Availability>
          Available in{' '}
          <ColorLink href={`/mens-coats/${this.props.id}`}>
            {this.props.colors} colours
          </ColorLink>
        </Availability>
        <Price>
          <FormattedNumber
            value={this.props.price}
            style="currency"
            currency="RUB"
            minimumFractionDigits={0}
          />
        </Price>
      </Wraper>
    );
  }
}

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
