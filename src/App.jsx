import React from 'react';
import { Helmet } from 'react-helmet';
import ruLocaleData from 'react-intl/locale-data/ru';
import { IntlProvider, addLocaleData } from 'react-intl';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Menu from './common/Menu';
import Show from './Products/Show';
import List from './Products/List';
import Footer from './Footer';
import ScrollToTop from './common/ScrollToTop';
import { Xl } from './common/Responsive';

addLocaleData(ruLocaleData);

export default () =>
  (<IntlProvider locale="ru">
    <Router>
      <ScrollToTop>
        <div className="App">
          <Helmet>
            <title>Men’s Clothing | Burberry</title>
            <meta
              name="description"
              content="Shop from the current men’s clothing collection.
                       Sartorial suits, shirts and trousers feature as well as casual T-shirts,
                        polos and jeans."
            />
          </Helmet>
          <Header />
          <div className="container">
            <div className="row">
              <Xl>
                <Menu />
              </Xl>
            </div>
          </div>
          <Route exact path="/" component={List} />
          <Route path="/mens-coats/:id" component={Show} />
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  </IntlProvider>);
