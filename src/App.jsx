import React from 'react';
import { Helmet } from 'react-helmet';
import ruLocaleData from 'react-intl/locale-data/ru';
import { IntlProvider, addLocaleData } from 'react-intl';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './Header';
import Show from './Products/Show';
import List from './Products/List';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default () =>
  (
    <IntlProvider locale="ru">
      <Router>
        <div className="App">
          <Helmet>
            <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
            <meta name="description" content="Long Cotton Gabardine Car Coat" />
          </Helmet>
          <Header />
          <Route exact path="/" component={List} />
          <Route path="/products/:id" component={Show} />
          <Footer />
        </div>
      </Router>
    </IntlProvider>);
