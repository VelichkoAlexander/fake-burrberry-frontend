/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Helmet } from 'react-helmet';
import ruLocaleData from 'react-intl/locale-data/ru';
import { IntlProvider, addLocaleData } from 'react-intl';

import Header from './Header';
import Product from './Product';
import Suggest from './Suggest';
import More from './More';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default () =>
  (<IntlProvider locale="ru">
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
  </IntlProvider>);
