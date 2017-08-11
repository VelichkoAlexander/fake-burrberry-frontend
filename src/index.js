import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import 'flexboxgrid2/dist/flexboxgrid.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';

addLocaleData(ruLocaleData);

ReactDOM.render(
  <IntlProvider locale="ru">
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
