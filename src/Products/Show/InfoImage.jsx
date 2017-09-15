import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { imageRetina2, imageRetina3 } from '../../common/ImageResponsive';

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 4rem;
`;
const bigImg = '?$BBY_V2_ML_3X4$&wid=905&hei=800';
const smallImg = '?$BBY_V2_ML_3X4$&wid=545&hei=727';
export default function InfoImage(props) {
  return (
    <picture>
      <source
        media="(min-width: 62rem)"
        srcSet={`${props.src + (props.big ? bigImg : smallImg)} 1x,
      ${props.src + imageRetina2(props.big ? bigImg : smallImg)} 2x,
      ${props.src + imageRetina3(props.big ? bigImg : smallImg)} 3x`}
      />
      <Img
        src={props.src + props.big ? bigImg : smallImg}
      />
    </picture>
  );
}

InfoImage.propTypes = {
  src: PropTypes.string,
  big: PropTypes.bool,
};

InfoImage.defaultProps = {
  src: '',
  big: false,
};
