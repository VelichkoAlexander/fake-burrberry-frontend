import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { imageRetina } from '../../common/ImageResponsive';

const Img = styled.img`
  display: block;
  margin-left: ${props => (props.hero ? '-145px' : '0')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: opacity .3s linear;
`;

const heroImgProps = '?$BBY_V2_ML_HERO$&wid=1500&hei=725';
const smallImgProps = '?$BBY_V2_ML_3X4$&wid=432&hei=576';

class SliderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isImageLoaded: false,
      src: '',
    };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  componentWillReceiveProps(e) {
    if (this.state.src !== e.src) {
      this.setState({ isImageLoaded: false });
    }
  }

  handleImageLoaded() {
    this.setState({
      isImageLoaded: true,
      src: this.props.src,
    });
  }

  render() {
    return (
      <picture>
        <source
          media="(min-width: 62rem)"
          srcSet={`${this.props.src +
            (this.props.hero ? heroImgProps : smallImgProps)} 1x,
      ${this.props.src +
        imageRetina(this.props.hero ? heroImgProps : smallImgProps, 2)} 2x`}
        />
        <Img
          src={
            this.props.src + (this.props.hero ? heroImgProps : smallImgProps)
          }
          alt={this.props.alt}
          hero={this.props.hero}
          onLoad={this.handleImageLoaded}
          show={this.state.isImageLoaded}
        />
      </picture>
    );
  }
}

SliderItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  hero: PropTypes.bool,
};

SliderItem.defaultProps = {
  src: '',
  alt: '',
  hero: false,
};

export default SliderItem;
