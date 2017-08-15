import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`display: block;`;

export default function image(props) {
  return (<picture>
    <source
      media="(min-width: 62rem)"
      srcSet={`${process.env
        .PUBLIC_URL}/images/content/product/desktop-${props.nameItem}.jpg 1x,
                          ${process.env
      .PUBLIC_URL}/images/content/product/desktop-${props.nameItem}@2x.jpg 2x,
                          ${process.env
      .PUBLIC_URL}/images/content/product/desktop-${props.nameItem}@3x.jpg 3x`}
    />
    <source
      media="(min-width: 48rem)"
      srcSet={`${process.env
        .PUBLIC_URL}/images/content/product/tablet-${props.nameItem}.jpg 1x,
                          ${process.env
      .PUBLIC_URL}/images/content/product/tablet-${props.nameItem}@2x.jpg 2x,
                          ${process.env
      .PUBLIC_URL}/images/content/product/tablet-${props.nameItem}@3x.jpg 3x`}
    />
    <source
      media="(min-width: 48rem)"
      srcSet={`${process.env
        .PUBLIC_URL}/images/content/product/mobile-${props.nameItem} 1x,
                          ${process.env
      .PUBLIC_URL}/images/content/product/mobile-${props.nameItem}@2x.jpg 2x,
                          ${process.env
      .PUBLIC_URL}/images/content/product/mobile-${props.nameItem}@3x.jpg 3x`}
    />
    <Img
      src={`${process.env
        .PUBLIC_URL}/images/content/product/mobile-${props.nameItem}.jpg`}
      alt={props.alt}
    />
  </picture>);
}

image.propTypes = {
  nameItem: PropTypes.string,
  alt: PropTypes.string,
};

image.defaultProps = {
  nameItem: '2',
  alt: '',
};
