import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Image from './SliderItem';
import Info from './Info';
import Color from './Color';
import Size from './Size';
import Buttons from './Buttons';

import { Sm, Lg } from '../../common/Responsive';

const Title = styled.h1`
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  font-family: 'Lora', serif;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: #171717;
  margin-top: 1.5rem;
  @media (min-width: 48rem) {
    padding-left: 0;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: #111111;
  }
  @media (min-width: 62rem) {
    margin-top: 10rem;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
`;

const Slider = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  margin: 0 -0.5rem;
  overflow-x: ${props => (props.hero ? 'hidden' : 'auto')};
  @media (min-width: 48rem) {
    margin: 0;
  }
`;
const Caption = styled.h3`
  margin: 0 0 0.3125rem;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1.1667;
`;

const Text = styled.p`
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1.33;
`;

const Wrapper = styled.div`@media (min-width: 62rem) {margin-bottom: 4rem;}`;

class Header extends Component {
  constructor() {
    super();
    this.state = { colorId: 0 };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(id) {
    this.setState({ colorId: id });
  }

  render() {
    const sliderImages =
      this.props.images &&
      this.props.images.map((image, index) =>
        <Image src={image} alt={this.propstitle} key={index.toString()} />,
      );
    const heroSrc =
      this.props.colours && this.props.colours[this.state.colorId].heroSrc;
    return (
      <Wrapper>
        <div className="container">
          <Sm>
            <Title>
              {this.props.title}
            </Title>
          </Sm>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <Lg>
                <Slider hero>
                  <Image src={heroSrc} alt={this.props.title} hero />
                </Slider>
              </Lg>
              <Sm>
                <Slider>
                  {sliderImages}
                </Slider>
              </Sm>
            </div>
            <div className="col-xs-12 col-sm-6">
              <Lg>
                <Title>
                  {this.props.title}
                </Title>
              </Lg>
              <Info
                price={this.props.price}
                currency={this.props.currency}
                id={this.props.id}
              />
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                  <Color
                    colours={this.props.colours}
                    handleColorChange={this.handleColorChange}
                  />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                  <Lg>
                    <Size sizes={this.props.sizes} />
                  </Lg>
                </div>
              </div>
              <Buttons />
              <Lg>
                <Caption>Free Next Day Delivery</Caption>
                <Text>
                  Order before 7pm Monday to Thursday for delivery the next day
                </Text>
              </Lg>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
  colours: PropTypes.arrayOf(
    PropTypes.shape({
      heroSrc: PropTypes.string,
      value: PropTypes.string,
      src: PropTypes.string,
    }),
  ),
  currency: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: '',
  id: '',
  price: 0,
  images: [],
  sizes: [],
  colours: [{}],
};

export default Header;
