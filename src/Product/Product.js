import React from 'react';
import SliderItem from './SliderItem';
import ProducInfo from './ProductInfo';
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
            <ProducInfo price="110 000" id="39428531"/>
            <div className="color ">
              <p className="color-actual">Colour: Honey</p>
              <div className="color-options">
                <button className="color-btn color-btn--black" type="button">Color black</button>
                <button className="color-btn color-btn--honey color-btn--active" type="button">Color honey</button>
              </div>
            </div>
            
            <div className="product-btn-wrap">
              <button className="product-btn product-btn-black" type="button">select a size</button>
              <button className="product-btn" type="button">Find in store</button>
              <button className="product-help" type="button">need size help?</button>
            </div>
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