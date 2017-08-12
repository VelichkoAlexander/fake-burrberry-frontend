import React from 'react';
import styled from 'styled-components';

import { Lg } from '../common/responsive';

const Img = styled.img`
display: block;
width: 100%;
height: auto;
margin-bottom: 4rem;
margin-top: ${props => (props.margin ? props.margin : '0')}rem;
}
`;

export default props => {
  return (
    <Lg>
      <picture>
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
          margin={props.margin}
          src={`${process.env
            .PUBLIC_URL}/images/content/product/desktop/${props.nameItem}.jpg`}
        />
      </picture>
    </Lg>
  );
};
