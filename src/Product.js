import React from 'react';
import SliderItem from './SliderItem';
import ProducInfo from './ProductInfo';
import InfoBlock from './InfoBlock';
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
        <InfoBlock title="Description" />
        </div>
        <hr className="divine-line"/>
          <div className="container">
            <InfoBlock title="Shipping & Returns" additionalClass="md-hide" />
          </div>
          <hr className="divine-line"/>
            <div className="delivery hidden-xs">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                  </div>
                  <div className="col-md-5">
                    <div className="delivery-right">
                      <h2 className="delivery-title">Delivery</h2>
                      <ul className="delivery-list">
                        <li className="delivery-item">
                          <h3 className="delivery-item-title">Free Next Day Delivery</h3>
                          <div className="delivery-item-desc">Order before 7pm Monday to Thursday for delivery the next day</div>
                        </li>
                        <li className="delivery-item">
                          <h3 className="delivery-item-title">Collect-in-Store</h3>
                          <div className="delivery-item-desc">Order online today and pick up your items in store as early as
                                                          tomorrow
                          </div>
                        </li>
                        <li className="delivery-item">
                          <h3 className="delivery-item-title">Free Returns</h3>
                          <div className="delivery-item-desc">Enjoy free returns on your order</div>
                        </li>
                        <li className="delivery-item">
                          <h3 className="delivery-item-title">Free Gift Packaging</h3>
                          <div className="delivery-item-desc">Discover our gift packaging, a gold lined box tied with a coloured
                                                          ribbon
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>
  )
};