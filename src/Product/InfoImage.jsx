import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 4rem;
`;

export default function infoImage(props) {
  return (<picture>
    <source
      media="(min-width: 62rem)"
      srcSet={`${process.env
        .PUBLIC_URL}/images/content/product/desktop/${props.nameItem}.jpg 1x,
                          ${process.env
      .PUBLIC_URL}/images/content/product/desktop/${props.nameItem}.jpg@2x.jpg 2x,
                          ${process.env
      .PUBLIC_URL}/images/content/product/desktop/${props.nameItem}.jpg@3x.jpg 3x`}
    />
    <Img
      src={`${process.env
        .PUBLIC_URL}/images/content/product/desktop/${props.nameItem}.jpg`}
    />
  </picture>);
}

infoImage.propTypes = {
  nameItem: PropTypes.string,
};

infoImage.defaultProps = {
  nameItem: '2',
};
