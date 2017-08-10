import React from 'react';
import styled from 'styled-components';

import SliderItem from './SliderItem';
import Info from './Info';
import Color from './Color';
import Buttons from './Buttons';
import InfoBlock from './InfoBlock';
import Delivery from './Delivery';

const Product = styled.section `
    padding-top: 1.5rem;
  `;
const Title = styled.h1 `
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
  `;

const Slider = styled.div `
    display: flex;
    margin: 0;
    padding: 0;
    margin: 0 -0.5rem;
    overflow-x: scroll;
    @media (min-width: 48rem) {
      margin: 0;
    }
  `;
const Line = styled.hr `
    margin: 0;
    border: 0;
    border-top: solid 0.0625rem #c6c6c6;
    @media only screen and (min-width: 768px) {
      display: none;
    }
  `;

export default () => {
  return (
    <Product>
      <div className="container">
        
        <Title>Long Cotton Gabardine Car Coat</Title>
        
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <Slider className="product-slider">
              <SliderItem nameItem="front" alt="Long Cotton Gabardine Car Coat - front"/>
              <SliderItem nameItem="detail1" alt="Long Cotton Gabardine Car Coat - collar detail 1"/>
              <SliderItem nameItem="detail2" alt="Long Cotton Gabardine Car Coat - collar detail 2"/>
              <SliderItem nameItem="back" alt="Long Cotton Gabardine Car Coat - back"/>
            </Slider>
          </div>
          
          <div className="col-xs-12 col-sm-5">
            <Info price="110 000" id="39428531"/>
            <Color currentColor="Honey"/>
            <Buttons/>
          </div>
          
        </div>
      </div>
      <Line/>
      <div className="container">
        <InfoBlock title="Description"/>
      </div>
      <Line/>
      <div className="container">
        <InfoBlock title="Shipping & Returns" hide/>
      </div>
      <Line/>
      <Delivery/>
    </Product>
  )
};