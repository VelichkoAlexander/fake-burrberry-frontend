import React from 'react';
import { Helmet } from 'react-helmet';
import ruLocaleData from 'react-intl/locale-data/ru';
import { IntlProvider, addLocaleData } from 'react-intl';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './Header';
import Show from './Show';
import List from './List';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default () =>
  (<Router>
    <IntlProvider locale="ru">
      <div className="App">
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
          <meta name="description" content="Long Cotton Gabardine Car Coat" />
        </Helmet>
        <Header />
        <Route exact path="/" component={List} />
        <Route path="/:id" component={Show} />
        <Footer />
      </div>
    </IntlProvider>
  </Router>);
