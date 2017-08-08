import React from 'react';
import productImg1 from './images/content/recommend/emroided_hooded.jpg';
import productImg2 from './images/content/recommend/Relaxed_Fit_Stretch_Jeans.jpg';
import productImg3 from './images/content/recommend/Leather_and_House_Check.jpg';
import productImg4 from './images/content/recommend/Leather_Wingtip_Check.jpg';
export default () => {
  return (
    <section className="suggest">
      <div className="container">
        <h2 className="suggest-title">We recommend</h2>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <a className="suggest-link" href="javascript:void(0);" >
              <img className="suggest-image" src={productImg1} alt="Emroided Hooded"/>
                <h3 className="suggest-item-title">Emroided Hooded</h3>
                <h5 className="suggest-price">27 000 руб</h5>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="javascript:void(0);" className="suggest-link">
              <img className="suggest-image" src={productImg2}
                   alt="Relaxed Fit Stretch Jeans"/>
                <h3 className="suggest-item-title">Relaxed Fit Stretch Jeans</h3>
                <h5 className="suggest-price">22 500 руб</h5>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="javascript:void(0);" className="suggest-link">
              <img className="suggest-image" src={productImg3}
                   alt="Leather and House Check"/>
                <h3 className="suggest-item-title">Leather and House Check</h3>
                <h5 className="suggest-price">120 000 руб</h5>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="javascript:void(0);" className="suggest-link">
              <img className="suggest-image" src={productImg4}
                   alt="Leather Wingtip Check"/>
                <h3 className="suggest-item-title">Leather Wingtip Check</h3>
                <h5 className="suggest-price">46 000 руб</h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}