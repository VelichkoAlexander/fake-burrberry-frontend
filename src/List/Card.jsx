/* eslint-disable react/style-prop-object */

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

import hart from '../images/hart.svg';
import hartBlack from '../images/hart_black.svg';
import { imageUrl, imageLg, imageMd, imageXs } from '../common/imageResponsive';

const Wraper = styled.div`
    margin-bottom: 2rem;
    font-size: 0.75rem;
    line-height: 1rem;
`;

const Link = styled.a`
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
    background: url(${props => (props.fill ? `${hartBlack}` : `${hart}`)
}
  )
  center no-repeat

  ;
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

const Price = styled.div`margin-bottom: 1rem;`;
const Availability = styled.div`margin-bottom: 0.3125rem;`;
const ColorLink = styled.a`
    color: #171717;
    line-height: 1rem;
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: `${imageUrl}${props.src}`,
      favourite: false,
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleFavourite = this.handleFavourite.bind(this);
  }

  handleHover() {
    this.setState(() => ({ src: (this.state.src === `${imageUrl}${this.props.src2}`) ? `${imageUrl}${this.props.src}` : `${imageUrl}${this.props.src2}` }));
  }

  handleFavourite() {
    this.setState(() => ({ favourite: !this.state.favourite }));
  }

  render() {
    return (
      <Wraper>
        <Link href={`/products/${this.props.id}`} onMouseOver={this.handleHover} onMouseOut={this.handleHover}>
          <picture>
            <source
              media="(min-width: 62rem)"
              srcSet={`${this.state.src}.jpg${imageLg} 1x`}
            />
            <source
              media="(min-width: 48rem)"
              srcSet={`${this.state.src}.jpg${imageMd} 1x`}
            />
            <source
              media="(min-width: 48rem)"
              srcSet={`${this.state.src}.jpg${imageXs} 1x`}
            />
            <Img
              src={`${this.state.src}.jpg${imageLg}`}
              alt={this.props.title}
            />
          </picture>
        </Link>
        <Inner>
          <Type>
            {this.props.type}
          </Type>
          <Favourite
            onClick={this.handleFavourite}
            fill={this.state.favourite}
          >
            Favourite
          </Favourite>
        </Inner>
        <Title href={`/products/${this.props.id}`}>
          {this.props.title}
        </Title>
        <Availability>
          Available in{' '}
          <ColorLink href={`/products/${this.props.id}`}>{this.props.colors} colours</ColorLink>
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
  src2: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  colors: PropTypes.number,
};

Card.defaultProps = {
  id: 1,
  src: '',
  src2: '',
  type: 'Classic fit',
  title: 'title',
  price: 0,
  colors: 3,
};


export default Card;
