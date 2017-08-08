import React from 'react';

export default () => {
  return (
    <div className="delivery hidden-xs">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <picture>
              <source srcset="images/decor/tablet-delivery.jpg 1x,
                            images/decor/tablet-delivery@2x.jpg 2x,
                            images/decor/tablet-delivery@3x.jpg 3x"/>
                <img class="delivery-image" src="images/decor/tablet-delivery.jpg" alt="delivery boxes"/>
            </picture>
          </div>
          <div className="col-md-5">
            <div className="delivery-right">
              <h2 className="delivery-title">Delivery</h2>
              <ul className="delivery-list">
                <li className="delivery-item">
                  <h3 className="delivery-item-title">Free Next Day Delivery</h3>
                  <div className="delivery-item-desc">Order before 7pm Monday to Thursday for delivery the next day
                  </div>
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
)
}