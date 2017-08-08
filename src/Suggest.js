import React from 'react';
import SuggestItem from './SuggestItem';

export default () => {
  return (
    <section className="suggest">
      <div className="container">
        <h2 className="suggest-title">We recommend</h2>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <SuggestItem link="#" src="emroided_hooded" title="Emroided Hooded" price="27 000"/>
          </div>
          <div className="col-xs-6 col-md-3">
            <SuggestItem link="#" src="Relaxed_Fit_Stretch_Jeans" title="Relaxed Fit Stretch Jeans" price="22 500"/>
          </div>
          <div className="col-xs-6 col-md-3">
            <SuggestItem link="#" src="Leather_and_House_Check" title="Leather and House Check" price="120 000 "/>
          </div>
          <div className="col-xs-6 col-md-3">
            <SuggestItem link="#" src="Leather_Wingtip_Check" title="Leather Wingtip Check" price="46 000 "/>
          </div>
        </div>
      </div>
    </section>
  );
}