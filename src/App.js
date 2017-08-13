import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Product from './Product';
import Suggest from './Suggest';
import More from './More';
import Footer from './Footer';

import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';

addLocaleData(ruLocaleData);

export default () => {
  return (
    <IntlProvider locale="ru">
      <div className="App">
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
          <meta name="description" content="Long Cotton Gabardine Car Coat" />
        </Helmet>
        <Header />
        <Product />
        <Suggest />
        <More />
        <Footer />
      </div>
    </IntlProvider>
  );
};
