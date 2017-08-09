import React from 'react';
import SliderItem from './SliderItem';
import Info from './Info';
import Color from './Color';
import Buttons from './Buttons';
import InfoBlock from './InfoBlock';
import Delivery from './Delivery';

export default () => {
  return (
    <section className="product">
      <div className="container">
        <h1 className="product-title">Long Cotton Gabardine Car Coat</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <div className="product-slider">
              <SliderItem nameItem="front" alt="Long Cotton Gabardine Car Coat - front"/>
              <SliderItem nameItem="detail1" alt="Long Cotton Gabardine Car Coat - collar detail 1"/>
              <SliderItem nameItem="detail2" alt="Long Cotton Gabardine Car Coat - collar detail 2"/>
              <SliderItem nameItem="back" alt="Long Cotton Gabardine Car Coat - back"/>
            </div>
          </div>
          
          <div className="col-xs-12 col-sm-5">
            <Info price="110 000" id="39428531"/>
            <Color currentColor="Honey"/>
            <Buttons/>
          </div>
        </div>
      </div>
      <hr className="divine-line"/>
      <div className="container">
        <InfoBlock title="Description"/>
      </div>
      <hr className="divine-line"/>
      <div className="container">
        <InfoBlock title="Shipping & Returns" additionalClass="md-hide"/>
      </div>
      <hr className="divine-line"/>
      <Delivery/>
    </section>
  )
};