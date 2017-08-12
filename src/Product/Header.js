import React from 'react';
import Responsive from 'react-responsive';
import styled from 'styled-components';

import SliderItem from './SliderItem';
import Info from './Info';
import Color from './Color';
import Size from './Size';
import Buttons from './Buttons';

const Default = ({ children }) =>
  <Responsive minWidth={992} children={children} />;
const Mobile = ({ children }) =>
  <Responsive maxWidth={992} children={children} />;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  padding-left: 0.5rem;
  margin-bottom: 1rem;
  font-family: "Lora", serif;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: #171717;
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
  overflow-x: auto;
  @media (min-width: 48rem) {
    margin: 0;
  }
`;

const Wrapper = styled.div`@media (min-width: 62rem) {background: #d4bdad;}`;

export default () => {
  return (
    <Wrapper>
      <div className="container">
        <Mobile>
          <Title>Long Cotton Gabardine Car Coat</Title>
        </Mobile>
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <Default>
              <Slider className="product-slider">
                <SliderItem
                  nameItem="front"
                  alt="Long Cotton Gabardine Car Coat - front"
                />
              </Slider>
            </Default>
            <Mobile>
              <Slider className="product-slider">
                <SliderItem
                  nameItem="front"
                  alt="Long Cotton Gabardine Car Coat - front"
                />
                <SliderItem
                  nameItem="detail1"
                  alt="Long Cotton Gabardine Car Coat - collar detail 1"
                />
                <SliderItem
                  nameItem="detail2"
                  alt="Long Cotton Gabardine Car Coat - collar detail 2"
                />
                <SliderItem
                  nameItem="back"
                  alt="Long Cotton Gabardine Car Coat - back"
                />
              </Slider>
            </Mobile>
          </div>

          <div className="col-xs-12 col-sm-5">
            <Default>
              <Title>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Title>
            </Default>
            <Info price="110 000" id="39428531" />
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <Color currentColor="Honey" />
              </div>
              <Default>
                <div className="col-md-12 col-lg-6">
                  <Size />
                </div>
              </Default>
            </div>
            <Buttons />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
